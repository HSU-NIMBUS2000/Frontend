import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chat from "./Chat";

function ChatForm({patientId, isDoctor }) {
    const [chats, setChats] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchChatHistory = async () => {
        if (isLoading || !hasMore) return;
        const token=localStorage.getItem('doctorToken');
        
        setIsLoading(true);
        try {
            const response = await fetch(`http://15.164.174.64/api/chat/history/doctor?patientId=${patientId}&page=${page}&size=10`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (response.status === 200 && data.data) {
                setChats((prev) => [...prev, ...data.data]);
                setPage((prev) => prev + 1);
                if (data.data.length < 10) setHasMore(false); // 데이터 부족 시 더 이상 로드하지 않음
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("채팅 내역을 가져오는 중 오류 발생:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleScroll = (e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        if (scrollHeight - scrollTop <= clientHeight + 50) {
            fetchChatHistory();
        }
    };

    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <MainLayout onScroll={handleScroll}>
            {chats.map((chat) => (
                <Chat
                    key={chat.chatId}
                    isSend={chat.chatIsSend === 1}
                    content={chat.chatContent}
                />
            ))}
            {isLoading && <Loading>Loading...</Loading>}
        </MainLayout>
    );
}

export default ChatForm;

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 80vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 20px;
`;

const Loading = styled.div`
    text-align: center;
    font-size: 14px;
    color: gray;
`;

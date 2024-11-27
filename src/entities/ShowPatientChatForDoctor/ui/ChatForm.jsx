import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chat from "./Chat";
import axios from "axios";

function ChatForm() {
    const [chats, setChats] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const token = localStorage.getItem('doctorToken');
                const patientId = localStorage.getItem('patientId');

                // axios 요청
                const response = await axios.get(
                    `/api/chat/history/doctor?patientId=${patientId}&page=${page}&size=10`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = response.data; // axios는 JSON을 자동으로 파싱합니다.
                if (response.status === 200 && data.data) {
                    setChats((prev) => [...prev, ...data.data]);
                    setPage((prev) => prev + 1);
                    if (data.data.length < 10) setHasMore(false); // 데이터 부족 시 더 이상 로드하지 않음
                } else {
                    console.error("오류:", data.message);
                }
            } catch (error) {
                console.error("채팅 내역을 가져오는 중 오류 발생:", error);
            }
        };

        fetchChatHistory();
    }, [page]); // 페이지가 변경될 때만 새로 호출

    return (
        <MainLayout>
            {chats.map((chat) => (
                <Chat
                    key={chat.chatId}
                    isSend={chat.chatIsSend === 1}
                    content={chat.chatContent}
                />
            ))}
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

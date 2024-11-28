import React from "react";
import axios from "axios";
import "./MainInput.css";
import useSpeechToText from "../../../hooks/hook";

function MainInput({ value, setValue, chattings, setChattings }) {
    const { transcript, listening, toggleListening, resetTranscript, speakText } = useSpeechToText();
    const token = localStorage.getItem('patientToken');

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            e.preventDefault(); // 기본 동작 방지

            const userMessage = value; // 현재 값 저장
            setValue(''); // 입력 필드 초기화

            // 유저 메시지 추가
            const newChat = {
                type: 'user',
                date: new Date().toISOString(),
                chat: userMessage
            };
            setChattings(prevChattings => [...prevChattings, newChat]);

            // AI 응답 요청
            try {
                const data = { chatContent: userMessage }; // 요청 데이터
                const response = await axios.post(`/api/chat/send`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // AI 응답 추가
                setChattings(prevChattings => [
                    ...prevChattings,
                    {
                        type: 'ai',
                        chat: response.data.data.chatContent,
                        date: response.data.data.createdAt
                    }
                ]);

                // TTS 호출
                speakText(response.data.data.chatContent);
            } catch (error) {
                console.error('Error sending chat:', error);
            }
        }
    };

    return (
        <div className="inputGroup">
            <input
                type="text"
                id="name"
                required
                autoComplete="off"
                value={value}
                onChange={(e) => {
                    // 입력 필드가 초기화된 경우 값 업데이트 방지
                    // if (value.trim() === '') return;
                    setValue(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
            <label htmlFor="name">상담을 시작해 보세요.</label>
        </div>
    );
}

export default MainInput;
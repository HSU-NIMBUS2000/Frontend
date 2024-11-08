import React from "react";
import { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MyChat from "./MyChat";
import AIChat from "./AIChat";

function Chatting({ chattings }) {

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chattings]);

  return (
    <MainLayout>
      {chattings.map((e, index) => (
        <ChatWrapper key={index}>
          {e.type === "user" ? (
            <MyChatContainer>
              <MyChat date={e.date} chat={e.chat} />
            </MyChatContainer>
          ) : (
            <AIChatContainer>
              <AIChat name="펴닝봇" date={e.date} chat={e.chat} />
            </AIChatContainer>
          )}
        </ChatWrapper>
      ))}
      <div ref={chatEndRef} />
    </MainLayout>
  );
}

export default Chatting;

const MainLayout = styled.div`
  position: absolute;
  top: 150px;
  right: 160px;
  max-height:60vh;
  z-index: 10;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
  /* 스크롤 바 숨기기 (웹킷 기반 브라우저) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* 스크롤 바 숨기기 (Firefox) */
  scrollbar-width: none;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const ChatWrapper = styled.div`
  margin-bottom: 1rem; /* 채팅 간 간격 */
  display: flex;
  flex-direction: column; /* MyChat과 AIChat이 세로로 배치되도록 설정 */
`;

const MyChatContainer = styled.div`
  animation: ${slideUp} 0.5s ease-out; /* MyChat 애니메이션 0.5초 동안 실행 */
`;

const AIChatContainer = styled.div`
  animation: ${slideUp} 0.5s ease-out; /* AIChat 애니메이션 0.5초 동안 실행 */
  animation-delay: 1s; /* 1초 뒤에 애니메이션 시작 */
  animation-fill-mode: backwards; /* 시작 전에 원래 위치 유지 */
`;
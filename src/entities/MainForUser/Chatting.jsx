import React from "react";
import styled, { keyframes } from "styled-components";
import MyChat from "./MyChat";
import AIChat from "./AIChat";

function Chatting({ chattings }) {
  return (
    <MainLayout>
      {chattings.map((e, index) => (

        <ChatWrapper key={index}>

          <MyChatContainer>
            <MyChat date={"11.11.11"} chat={e} />
          </MyChatContainer>

          <AIChatContainer>
            <AIChat name={"펴닝봇"} date={"11.11.11"} chat={"맞춤 답변"} />
          </AIChatContainer>
        </ChatWrapper>

      ))}
    </MainLayout>
  );
}
export default Chatting

const MainLayout = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 40px;
  right: 140px;
  z-index: 10;
  padding: 20px;
  border-radius: 10px;
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
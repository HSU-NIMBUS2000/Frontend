import React from "react";
import styled from "styled-components";

function Chat({ isSend, content }) {
  return (
    <MainLayout isSend={isSend}>
      <ChatWrapper isSend={isSend}>
        <ChatContent isSend={isSend}>{content}</ChatContent>
      </ChatWrapper>
    </MainLayout>
  );
}

export default Chat;

const MainLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.isSend ? "flex-end" : "flex-start")};
`;

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 25px;
  border-radius: 80px; /* 둥근 모서리 */
  background: ${(props) =>
    props.isSend
      ? "rgba(255, 255, 255, 0.8)" /* 송신: 밝은 흰색 투명 */
      : "rgba(111, 149, 230, 0.6)"}; /* 수신: 밝은 파란색 투명 */
  backdrop-filter: blur(10px); /* 유리 느낌을 위한 블러 처리 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-left: ${(props) => (props.isSend ? "auto" : "0")}; /* 송신 메시지 위치 */
  margin-right: ${(props) => (props.isSend ? "0" : "auto")}; /* 수신 메시지 위치 */
  min-height: 30px;
  max-width: 70%;
`;


const ChatContent = styled.div`
  border: none;
  font-size: 16px;
  width: 100%;
  outline: none;
  color: ${(props) => (props.isSend ? "#00000" : "#FFFFFF")};
  font-weight: 500;
  text-align: ${(props) => (props.isSend ? "right" : "left")};
`;

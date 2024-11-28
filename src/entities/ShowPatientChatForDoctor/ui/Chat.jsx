import React from "react";
import styled from "styled-components";
import pyeoning from "../../../assets/image/pyeoning.svg";
import person from "../../../assets/image/person.svg";

function Chat({ isSend, content }) {
  return (
    <MainLayout isSend={isSend}>
      <ChatContainer isSend={isSend}>
        {!isSend && (
          <>
          <Chatbox>
            <ChatImage src={pyeoning} alt="Chat Icon" />
            <ChatWrapper isSend={isSend}>
              <ChatContent isSend={isSend}>{content}</ChatContent>
            </ChatWrapper>
          </Chatbox>

          </>
        )}
        {isSend && (
          <>
          <Chatbox>
            <ChatWrapper isSend={isSend}>
              <ChatContent isSend={isSend}>{content}</ChatContent>
            </ChatWrapper>
            <ChatImage src={person} alt="Chat Icon" />
            </Chatbox>
          </>
        )}
      </ChatContainer>
    </MainLayout>
  );
}

export default Chat;

const MainLayout = styled.div`
  display: flex;
  width: 100%;
  gap:20px;
  justify-content: ${(props) => (props.isSend ? "flex-end" : "flex-start")};
`;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const Chatbox=styled.div`
  display: flex;
  gap:10px;
  margin:10px;
`;

const ChatImage = styled.img`
  width: 40px; /* 이미지 너비 */
  height: 40px; /* 이미지 높이 */
  margin: ${(props) => (props.isSend ? "0 0 0 10px" : "0 10px 0 0")}; /* 간격 조정 */
`;

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 30px;
  border-radius: 3em; /* 둥근 모서리 */
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
  color: ${(props) => (props.isSend ? "#000000" : "#FFFFFF")};
  font-weight: 500;
  text-align: ${(props) => (props.isSend ? "right" : "left")};
`;

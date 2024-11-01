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
  padding: 8px 30px 8px 30px;
  border: 1px solid #6572d2;
  border-radius: 4em;
  background-color: ${(props) => (props.isSend ? "#FFFFFF" : "#6572d2")};
  margin-left: ${(props) => (props.isSend ? "auto" : "0")};
  margin-right: ${(props) => (props.isSend ? "0" : "auto")};
  min-height: 50px;
  max-width: 60%;
`;

const ChatContent = styled.div`
  border: none;
  font-size: 16px;
  width: 100%;
  outline: none;
  color: ${(props) => (props.isSend ? "#000000" : "#ffffff")};
  font-weight: 500;
  text-align: ${(props) => (props.isSend ? "right" : "left")};
`;

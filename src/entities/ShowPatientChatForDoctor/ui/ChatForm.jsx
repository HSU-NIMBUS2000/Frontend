import React from "react";
import styled from "styled-components";
import Chat from "./Chat";

function ChatForm(){
    return(
        <MainLayout>
            <Chat isSend={true} content="환자가 보낸 내용 환자가 보낸 내용 환자가 보낸 내용 환자가 보낸 내용 환자가 보낸 내용 환자가 보낸 내용 환자가 보낸 내용환자가 보낸 내용환자가 보낸 내용"/>
            <Chat isSend={false} content="ai 의사가 환자의 채팅을 읽고 보낸 답변
            ai 의사가 환자의 채팅을 읽고 보낸 답변ai 의사가 환자의 채팅을 읽고 보낸 답변ai 의사가 환자의 채팅을 읽고 보낸 답변ai 의사가 환자의 채팅을 읽고 보낸 답변ai 의사가 환자의 채팅을 읽고 보낸 답변"/>
        </MainLayout>
    );
}

export default ChatForm;

const MainLayout=styled.div`
 display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width:100%;
  box-sizing: border-box;
`;
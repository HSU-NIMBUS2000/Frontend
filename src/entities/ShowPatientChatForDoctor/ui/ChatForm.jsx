import React from "react";
import styled from "styled-components";
import Chat from "./Chat";

function ChatForm(){
    return(
        <MainLayout>
            <Chat isSend={true} content="안녕 나 너무 힘들어"/>
            <Chat isSend={false} content="무슨 일 때문에 힘드신가요?"/>
            <Chat isSend={true} content="모르겠어 그냥 너무 우울해"/>
            <Chat isSend={false} content="그럴 떄는 산책을 하거나, 영화를 보는 건 어떤가요? 기분이 좋아질지도 몰라요!"/>
        
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
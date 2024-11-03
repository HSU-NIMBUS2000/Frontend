import React from "react"
import styled from "styled-components"

function ChatHistoryButton(){
    return(
        <MainLayout>
            <Title>대화 내용 보러가기</Title>
        </MainLayout>
    )
}

export default ChatHistoryButton;

const MainLayout = styled.div`
margin-top: 70px;
padding: 20px 200px;
border-radius: 16px;
background-color:#6572D2;
display:flex;
justify-content: center;
align-items: center;
`

const Title = styled.div`
font-size: 24px;
font-weight:500;
color: white;
`
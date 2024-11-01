import React from "react";
import styled from "styled-components";
import ShowPatientChatIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import ChatForm from "../entities/ShowPatientChatForDoctor/ui/ChatForm";

function ShowPatientChatForDoctor() {
  return (
    <MainLayout>

    {/* 의사 환자 채팅 내역 조회 페이지 인트로 */}
      <ShowPatientChatIntro text="ai 의사와 김감자님의 대화 내역" />
    
    {/* 의사 환자 채팅 내역 폼 */}
    <ChatForm />

    </MainLayout>
  );
}

export default ShowPatientChatForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
  gap: 40px;
`;

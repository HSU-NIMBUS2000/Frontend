import React from "react";
import styled from "styled-components";
import ShowPatientChatIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import ChatForm from "../entities/ShowPatientChatForDoctor/ui/ChatForm";

function ShowPatientChatForDoctor({patientId}) {
  return (
    <MainLayout>

    {/* 의사 환자 채팅 내역 조회 페이지 인트로 */}
      <ShowPatientChatIntro text="ai 의사와 환자의 대화 내역" />
    
    {/* 의사 환자 채팅 내역 폼 */}
    <ChatForm patientId={patientId} />

    </MainLayout>
  );
}

export default ShowPatientChatForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

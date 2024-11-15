import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from '../assets/image/pyeoning.svg';
import Table from "../entities/PatientInfoForDoctor/ui/Table";
import ChatHistoryButton from "../entities/PatientInfoForDoctor/ui/ChatHistoryButton";
import Title from "../entities/PatientInfoForDoctor/ui/TItle";
import Summary from "../entities/PatientInfoForDoctor/ui/Summary";

<<<<<<< HEAD:src/pages/PatientInfoForDoctor.jsx
function PatientInfoForDoctor() {
    const [isEdited, setIsEdited] = useState(false);
=======
function PatientInfo() {
  const [isEdited, setIsEdited] = useState(false);
>>>>>>> 6f517f312819e9ebb06e0b176b47dc66bc869f4f:src/pages/PatientInfo.jsx

  return (
    <MainLayout>

      <LogoWrap>
        <Logo src={logo} />
      </LogoWrap>

      <Title isEdited={isEdited} setIsEdited={setIsEdited} />

      <Table
        isEdited={isEdited}
        setIsEdited={setIsEdited}
      />

      <ChatHistoryButton />

      <Summary />

    </MainLayout>
  );
}

export default PatientInfoForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px;

  & > div {
    box-sizing: border-box;
  }
`;

const LogoWrap = styled.div`
  object-fit: contain;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
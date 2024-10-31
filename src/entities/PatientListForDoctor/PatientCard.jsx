import React from "react";
import styled from "styled-components";

function PatientCard({ name, age, birth, gender, patientInfo }) {
  const patientFormat = `${name} (${birth} / ${age}세, ${gender})`;
  return (
    <MainLayout>
      <PatientTitle>{patientFormat}</PatientTitle>
      <PatientContent>{patientInfo}</PatientContent>
    </MainLayout>
  );
}

export default PatientCard;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6572d2;
  border-radius: 2em;
  height: 150px;
  gap: 20px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box; // width와 height에 padding과 border가 포함
`;

const PatientTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const PatientContent = styled.div`
  font-size: 15px;
`;

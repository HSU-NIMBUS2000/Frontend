import React from "react";
import styled from "styled-components";
import PatientCard from "./PatientCard";

function PatientCardList() {
  return (
    <MainLayout>
        <PatientCard
          name="김환자"
          birth="1990.09.21"
          age="90"
          gender="여"
          patientInfo="설명부분"
        ></PatientCard>
    </MainLayout>
  );
}

export default PatientCardList;

const MainLayout=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width:100%;
  box-sizing: border-box;
`;

import React from "react";
import { useState } from "react";
import styled from "styled-components";

function PatientCard({ name,age,birth,gender,patientInfo }) {
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
  border-radius:1.5em;
  width:100%;
  height:150px;
  gap:20px;
  padding:30px;
`;


const PatientTitle=styled.div`
font-size:30px;
font-weight:600;
width:100%;
`;

const PatientContent=styled.div`
font-size:20px;
`;
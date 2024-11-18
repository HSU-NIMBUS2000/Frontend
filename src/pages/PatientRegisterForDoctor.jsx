import React from "react";
import styled from "styled-components";
import PatientRegisterIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import PatientRegisterForm from "../entities/PatientRegisterForDoctor/ui/PatientRegisterForm";
import PatientRegisterBtn from "../entities/PatientRegisterForDoctor/ui/PatientRegisterButton";

function PatientRegisterForDoctor() {
  return (
    <MainLayout>
      {/* 의사 환자 등록 페이지 인트로 */}
      <PatientRegisterIntro text="환자 정보를 입력해주세요" />

      {/* 의사 환자 등록 페이지 등록 폼 */}
      <PatientRegisterForm />

      {/* 의사 환자 등록 페이지 등록 버튼 */}
      <PatientRegisterBtn text="환자 등록하기" />
    </MainLayout>
  );
}
export default PatientRegisterForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 360px 100px 360px;
  gap: 40px;
`;

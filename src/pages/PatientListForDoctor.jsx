import React from "react";
import styled from "styled-components";
import PatientListIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import PatientCardList from "../entities/PatientListForDoctor/ui/PatientCardList";
import SearchBar from "../entities/PatientListForDoctor/ui/SearchBar";

function PatientListForDoctor() {
  return (
    <MainLayout>
      {/* 의사 환자 목록 페이지 인트로 */}
      <PatientListIntro text="환자 목록" />

      {/* 의사 환자 목록 페이지 검색바 */}
      <SearchBar />

      {/* 의사 환자 목록 리스트 */}
      <PatientCardList />
    </MainLayout>
  );
}

export default PatientListForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
  gap: 30px;
`;

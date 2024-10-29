import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../entities/SignUpForDoctor/ui/Logo";
import Polygon from "../assets/image/Polygon.svg";
import Search from "../assets/image/Search.svg";
import PatientCard from "../entities/PatientListForDoctor/PatientCard";

function PatientListForDoctor() {
  return (
    <MainLayout>
      <Logo />
      <PatientListIntro>환자 목록</PatientListIntro>
      <SearchWrapper>
        <SearchCategory>
            <option value="disease">병명</option>
            <option value="patient">환자명</option>
            <option value="content">내용</option>
        </SearchCategory>
        <SearchKeyword type="text"/>
        <SearchBtn />
      </SearchWrapper>
      <PatientCardList>
      <PatientCard name="김환자" birth="1990.09.21" age="90" gender="여" 
      patientInfo="아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기"></PatientCard>
      <PatientCard name="김환자" birth="1990.09.21" age="90" gender="여" 
      patientInfo="아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기"></PatientCard>
      <PatientCard name="김환자" birth="1990.09.21" age="90" gender="여" 
      patientInfo="아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기"></PatientCard>
      <PatientCard name="김환자" birth="1990.09.21" age="90" gender="여" 
      patientInfo="아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기
      아진짜개힘ㄷ드웅냥웅냥웅냥ㅇ냥사카구치켄타로개잘생겼다우르락기우르랄기"></PatientCard>
      </PatientCardList>
    </MainLayout>

  );
}

export default PatientListForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
`;

const PatientListIntro=styled.div`
font-size: 50px;
  font-weight: 600;
  margin: 30px 0px 50px 0px; // 상우하좌
  text-align: center;
`;

const SearchWrapper=styled.div`
display: flex;
gap:15px;
  width:100%;
`;

const SearchCategory = styled.select`
  font-size: 25px;
  padding: 30px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  outline: none;
  color: white;
  width: 10%;
  height:90px;
  background-color: #6572d2;
  background-image: url(${Polygon});
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 1.2em;
  appearance: none; // 브라우저 기본 스타일 제거
  box-sizing: border-box;
`;

const SearchKeyword=styled.input`
background-color:#D7E3FF;
font-size: 30px;
height:40px;
padding: 25px;
  border: none;
  border-radius: 2em;
  outline: none;
  flex-grow: 1;
`;

const SearchBtn=styled.button`
background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: center;
  height:90px;
  background-color: #6572d2;
  border: none;
  cursor: pointer;
  background-size: 60%;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width:10%;
`;

const PatientCardList=styled.div`
margin-top:30px;
display: flex;
  align-items: center;
  flex-direction: column;
  gap:40px;
width:95%;
`;


import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function GoTo(){
    return (
        <MainLayout>
            <GoLink to="/SignUpForDoctor">1. 회원가입 페이지</GoLink>
            <GoLink to="/LoginForDoctor">2. 로그인 페이지</GoLink>
            <GoLink to="/PatientListForDoctor">3. 환자 목록 페이지</GoLink>
            <GoLink to="/PatientRegisterForDoctor">4. 환자 등록 페이지</GoLink>
            <GoLink to="/ShowPatientChatForDoctor">5. 환자 채팅 내역 조회 페이지</GoLink>
        </MainLayout>
    );
}

export default GoTo;
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
  gap: 30px;
`;


const GoLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  text-decoration: underline;
  text-decoration-thickness: 2px;
`;
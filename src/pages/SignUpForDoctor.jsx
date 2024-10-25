import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../entities/SignUpForDoctor/ui/Logo";
import SignUpInput from "../entities/SignUpForDoctor/ui/SignUpInput";

function SignUpForDoctor() {
  return (
    <MainLayout>
      <Logo />
      <SignUpIntro> 의사 선생님, 반나서 반가워요! <br/>펴닝에게 정보를 알려주세요</SignUpIntro>

      <SignUpForm>
        <SignUpInput formInfo="성함을 알려주세요" placeholder="이름" type="text" isExistBtn={false}/>
        <SignUpInput formInfo="소속 병원을 알려주세요" placeholder="병원명" type="text" isExistBtn={false}/>
        <SignUpInput formInfo="의사면허 번호를 입력해주세요" placeholder="면허 번호" type="text" isExistBtn={true}/>
        <SignUpInput formInfo="비밀번호를 입력해주세요" placeholder="비밀번호" type="password" isExistBtn={false}/>
      </SignUpForm>

      <SignUpSubmitBtn>회원가입 하기</SignUpSubmitBtn>
    </MainLayout>
  );
}

export default SignUpForDoctor;

const MainLayout = styled.div`
  padding: 100px 280px 100px 280px
`;

const SignUpIntro = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-top: 50px;
  text-align: center;
  padding-bottom: 80px;
`;

const SignUpForm = styled.div`
`;


const SignUpSubmitBtn=styled.button`
background-color: #6572d2;
  color: white;
  width: 100%;
  border: none;
  height: 120px;
  border-radius: 1em;
  padding: 30px;
  margin-top:30px;
  font-size: 35px;
  font-weight:600;
  cursor: pointer;
`;

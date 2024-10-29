import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../entities/SignUpForDoctor/ui/Logo";
import SignUpInput from "../entities/SignUpForDoctor/ui/SignUpInput";

function SignUpForDoctor() {
  return (
    <MainLayout>
      <Logo />
      <SignUpIntro>
        {" "}
        의사 선생님, 반나서 반가워요! <br />
        펴닝에게 정보를 알려주세요
      </SignUpIntro>

      <SignUpForm>
        <SignUpInput
          formInfo="성함을 알려주세요"
          placeholder="이름"
          type="text"
        />
        <SignUpInput
          formInfo="소속 병원을 알려주세요"
          placeholder="병원명"
          type="text"
        />
        <SignUpInput
          formInfo="의사면허 번호를 입력해주세요"
          placeholder="면허번호"
          type="text"
          isExistBtn={true}
          warningSentence="이미 존재하는 번호입니다."
        />
        <SignUpInput
          formInfo="비밀번호를 입력해주세요"
          placeholder="비밀번호"
          type="password"
          warningSentence="비밀번호는 영문/숫자/특수기호를 조합하여 8자 이상 설정해야 합니다."
        />
      </SignUpForm>

      <SignUpSubmitBtn>회원가입 하기</SignUpSubmitBtn>
    </MainLayout>
  );
}

export default SignUpForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
`;

const SignUpIntro = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 50px 0px 30px 0px; // 상우하좌
  text-align: center;
`;

const SignUpForm = styled.div`
  width: 100%;
`;

const SignUpSubmitBtn = styled.button`
  background-color: #6572d2;
  color: white;
  border: none;
  height: 70px;
  border-radius: 1em;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  width:100%;
  cursor: pointer;
`;

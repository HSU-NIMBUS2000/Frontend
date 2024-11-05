import React from "react";
import styled from "styled-components";
import SignUpIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import SubmitButton from "../shared/components/ForDoctor/StandardButton";
import SignUpForm from "../entities/SignUpForDoctor/ui/SignUpForm";

function SignUpForDoctor() {
  return (
    <MainLayout>
      {/* 의사 회원가입 페이지 인트로 */}
      <SignUpIntro text="의사 선생님, 반가워요! <br /> 펴닝에게 정보를 알려주세요" />

      {/* 의사 페이지 입력 폼*/}
      <SignUpForm />

      {/* 의사 회원가입 페이지 폼 제출 버튼*/}
      <SubmitButton text="회원가입 하기" type="signUp" />
    </MainLayout>
  );
}

export default SignUpForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
  gap: 40px;
`;

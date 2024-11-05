import React from "react";
import styled from "styled-components";
import LoginForm from "../entities/LoginForDoctor/ui/LoginForm";
import LoginIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import LoginSubmitBtn from "../shared/components/ForDoctor/StandardButton";
import GoToSignUp from "../entities/LoginForDoctor/ui/GoToSignUp";
import LoginWarning from "../entities/LoginForDoctor/ui/LoginWarning";

function LoginForDoctor() {
  return (
    <MainLayout>
      {/* 의사 로그인 페이지 인트로 */}
      <LoginIntro text="의사 계정으로 로그인하기"></LoginIntro>

      {/* 의사 로그인 페이지 로그인 폼 */}
      <LoginForm />

      {/* 로그인 실패 시 나타나는 문구 */}
      <LoginWarning />

      {/* 의사 로그인 페이지 로그인 폼 제출 버튼 */}
      <LoginSubmitBtn text="로그인하기" type="login"/>

      {/* 의사 로그인 페이지에서 회원가입 페이지로 이동*/}
      <GoToSignUp />
    </MainLayout>
  );
}

export default LoginForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
  gap: 30px;
`;

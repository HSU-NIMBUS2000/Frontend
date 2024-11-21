import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styled, { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";
import LoginForm from "../entities/LoginForDoctor/ui/LoginForm";
import LoginIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import LoginSubmitBtn from "../entities/LoginForDoctor/ui/LoginButton";
import GoToSignUp from "../entities/LoginForDoctor/ui/GoToSignUp";
import LoginWarning from "../entities/LoginForDoctor/ui/LoginWarning";

// React 컴포넌트
function LoginForDoctor() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <MainLayout>
      <LoginIntro text="의사 계정으로 로그인하기" />
      <LoginForm />
      {errorMessage && <LoginWarning text={errorMessage} />}
      <LoginSubmitBtn text="로그인하기" setErrorMessage={setErrorMessage} />
      <GoToSignUp />
    </MainLayout>
  );
}

// 렌더링 컴포넌트
function LoginForDoctorWrapper() {
  useEffect(() => {
    const loginElement = document.getElementById("loginForDoctor");

    if (loginElement) {
      const root = ReactDOM.createRoot(loginElement);
      root.render(
        <StyleSheetManager target={document.head}>
          <RecoilRoot>
            <LoginForDoctor />
          </RecoilRoot>
        </StyleSheetManager>
      );
      console.log("React component rendered successfully at #loginForDoctor");
    } else {
      console.error("#loginForDoctor element not found in the DOM.");
    }
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return null; // Wrapper 자체는 아무것도 렌더링하지 않음
}

export default LoginForDoctorWrapper;

// 스타일 정의
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 330px 100px 330px;
  gap: 30px;
`;

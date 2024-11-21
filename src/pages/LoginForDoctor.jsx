import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import styled, { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 추가
import LoginForm from "../entities/LoginForDoctor/ui/LoginForm";
import LoginIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import LoginSubmitBtn from "../entities/LoginForDoctor/ui/LoginButton";
import GoToSignUp from "../entities/LoginForDoctor/ui/GoToSignUp";
import SignUpForDoctor from "./SignUpForDoctor";

function LoginForDoctorWrapper() {
  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      iframe.onload = () => {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // LoginForDoctor 렌더링
        const loginElement = iframeDocument.getElementById("loginForDoctor");
        if (loginElement) {
          const root = ReactDOM.createRoot(loginElement);
          root.render(
            <StyleSheetManager target={iframeDocument.head}>
              <RecoilRoot>
                <BrowserRouter>
                  <LoginForDoctor />
                </BrowserRouter>
              </RecoilRoot>
            </StyleSheetManager>
          );
        }

        // SignUpForDoctor 렌더링
        const signUpElement = iframeDocument.getElementById("signUpForDoctor");
        if (signUpElement) {
          const root = ReactDOM.createRoot(signUpElement);
          root.render(
            <StyleSheetManager target={iframeDocument.head}>
              <RecoilRoot>
                <BrowserRouter>
                  <SignUpForDoctor />
                </BrowserRouter>
              </RecoilRoot>
            </StyleSheetManager>
          );
        }

      };
    }
  }, []);

  return (
    <MainLayout>
      <iframe src="/template/intro.html" title="Embedded Login Content" />
    </MainLayout>
  );
}

export default LoginForDoctorWrapper;

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

function LoginForDoctor() {
  return (
    <LoginForDoctorLayout>
      <LoginIntro text="의사 계정으로 로그인하기" />
      <LoginForm />
      <LoginSubmitBtn text="로그인하기" />
      <GoToSignUp />
    </LoginForDoctorLayout>
  );
}

const LoginForDoctorLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;


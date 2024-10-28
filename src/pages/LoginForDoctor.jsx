import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../entities/SignUpForDoctor/ui/Logo";
import LoginInput from "../entities/LoginForDoctor/LoginInput";

function LoginForDoctor() {
  return (
    <MainLayout>
      <Logo />
      <LoginIntro>
        {" "}
        의사 계정으로 로그인하기
      </LoginIntro>
      <LoginForm>
        <LoginInput type="text" placeholder="의사 면허 번호를 입력해주세요"/>
        <LoginInput type="password" placeholder="비밀번호를 입력해주세요"/>
      </LoginForm>
      <LoginWarning>통신하면 해야징</LoginWarning>
      <LoginSubmitBtn>로그인하기</LoginSubmitBtn>
      <GoToSignUp>
        <SuggestSignUp>아직 회원이 아니신가요?</SuggestSignUp>
        <SingUpLink to="/SignUpForDoctor">회원가입하기</SingUpLink>
      </GoToSignUp>
    </MainLayout>
  );
}

export default LoginForDoctor;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 280px 100px 280px;
`;

const LoginIntro=styled.div`
  font-size: 50px;
  font-weight: 600;
  margin: 50px 0px 80px 0px; // 상우하좌
  text-align: center;
`;

const LoginForm=styled.div`
  width: 100%;
`;

const LoginSubmitBtn=styled.button`
background-color: #6572d2;
color: white;
width: 100%;
border: none;
height: 120px;
border-radius: 1em;
margin-top: 30px;
font-size: 30px;
font-weight: 600;
cursor: pointer;
`;

const LoginWarning=styled.div`
color:#EE2B2B;
font-size:25px;
font-weight:600;
`;

const GoToSignUp=styled.div`
  display: flex;
  align-items: center;
  margin-top:30px;
  gap:10px;
`;

const SuggestSignUp=styled.div`
font-size:30px;
color:#939393;
`;

const SingUpLink=styled(Link)`
font-size:30px;
font-weight:500;
color:#000000;
text-decoration: underline;
text-decoration-thickness: 2px;
`;
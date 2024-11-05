import React from "react";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm"

function LoginForm({isClicked}) {
  return (
    <MainLayout>
      {/* signUp 폼과 이름을 다르게 줄 것 */}
      <LoginInputForm type="doctorId" isClicked={isClicked} placeholder="의사 면허 번호를 입력해주세요" />
      <LoginInputForm type="password" isClicked={isClicked} placeholder="비밀번호를 입력해주세요" />
    </MainLayout>
  );
}

export default LoginForm;

const MainLayout = styled.div`
  width: 100%;
`;

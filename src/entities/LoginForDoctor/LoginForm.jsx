import React from "react";
import styled from "styled-components";
import LoginInputForm from "../../shared/components/ForDoctor/StandardInputForm";

function LoginForm() {
  return (
    <MainLayout>
      <LoginInputForm type="text" placeholder="의사 면허 번호를 입력해주세요" />
      <LoginInputForm type="password" placeholder="비밀번호를 입력해주세요" />
    </MainLayout>
  );
}

export default LoginForm;

const MainLayout = styled.div`
  width: 100%;
`;

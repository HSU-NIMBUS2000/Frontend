import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function GoToSignUp() {
  return (
    <MainLayout>
      <SuggestSignUp>아직 회원이 아니신가요?</SuggestSignUp>
      <SingUpLink to="/SignUpForDoctor">회원가입하기</SingUpLink>
    </MainLayout>
  );
}

export default GoToSignUp;

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -15px;
`;
const SuggestSignUp = styled.div`
  font-size: 20px;
  color:  #444444;
`;

const SingUpLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  text-decoration: underline;
  text-decoration-thickness: 2px;
`;

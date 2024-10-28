import React from "react";
import { useState } from "react";
import styled from "styled-components";

function SignUpInput({ placeholder, type }) {
  return (
    <MainLayout>
        <InfoInputWrapper>
            <InfoInput type={type} placeholder={placeholder} />
        </InfoInputWrapper>
    </MainLayout>
  );
}

export default SignUpInput;

const MainLayout = styled.div`
`;

const InfoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0 30px;
  border: 1px solid #6572d2;
  border-radius: 3em;
  height: 100px;
  margin-bottom: 40px;
`;

const InfoInput = styled.input`
  border: none;
  font-size: 25px;
  width:80%;
  outline:none;
`;
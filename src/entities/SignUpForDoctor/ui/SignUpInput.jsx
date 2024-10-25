import React from "react";
import styled from "styled-components";
function SignUpInput({ formInfo, placeholder, type, isExistBtn }) {
  return (
    <MainLayout>
      <FormInfo>{formInfo}</FormInfo>
      <InfoInputWrapper>
        <InfoInput type={type} placeholder={placeholder} />
        {/* isExistBtn이 true일 때만 화면에 표시되는 조건부 렌더링 */}
        {isExistBtn && <IdCheckButton>중복 확인</IdCheckButton>}
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default SignUpInput;

const MainLayout = styled.div`
`;

const FormInfo = styled.div`
  align-items: baseline;
  font-size: 30px;
  font-weight: 500;
  text-align: left;
`;

const InfoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0 30px;
  border: 1px solid #6572d2;
  border-radius: 3em;
  height: 150px;
  margin-bottom: 70px;
`;

const InfoInput = styled.input`
  border: none;
  font-size: 30px;
  outline:none;
`;

const IdCheckButton = styled.button`
  background-color: #6572d2;
  color: white;
  border: none;
  border-radius: 1em;
  padding: 30px;
  font-size: 25px;
  cursor: pointer;
`;

import React from "react";
import { useState } from "react";
import styled from "styled-components";

function StandardInputForm({
  formInfo,
  placeholder,
  type,
  isExistBtn,
  warningSentence,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isSatisfied, setIsSatisfied] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (type === "password") {
      const passwordCriteria =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
      setIsSatisfied(passwordCriteria.test(value));
    }
  };

  return (
    <MainLayout>
      <FormInfoWrapper>
        <FormInfo>{formInfo}</FormInfo>
        {/* isSatisfied가 false일 때만 화면에 표시되는 조건부 렌더링 */}
        {!isSatisfied && <Warning>{warningSentence}</Warning>}
      </FormInfoWrapper>
      <InfoInputWrapper>
        <InfoInput
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        {/* isExistBtn이 true일 때만 화면에 표시되는 조건부 렌더링 */}
        {isExistBtn && <IdCheckButton>중복 확인</IdCheckButton>}
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default StandardInputForm;

const MainLayout = styled.div``;

const FormInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Warning = styled.div`
  color: #ee2b2b;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  padding-left: 10px;
`;

const FormInfo = styled.div`
  align-items: baseline;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const InfoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 30px 0px 30px;
  border: 1px solid #6572d2;
  border-radius: 3em;
  height: 80px;
`;

const InfoInput = styled.input`
  border: none;
  font-size: 15px;
  width: 85%;
  outline: none;
`;

const IdCheckButton = styled.button`
  background-color: #6572d2;
  color: white;
  border: none;
  border-radius: 3em;
  padding: 15px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

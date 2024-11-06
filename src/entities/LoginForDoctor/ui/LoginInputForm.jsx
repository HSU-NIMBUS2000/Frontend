import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { doctorIdState, passwordState } from "../../../shared/components/state/LoginForDoctor";

function LoginInputForm({
  formInfo,
  placeholder,
  type,
  isExistBtn,
  warningSentence,
}) {
  const [isSatisfied, setIsSatisfied] = useState(true);
  
  // useRecoilState 호출
  const [doctorId, setDoctorId] = useRecoilState(doctorIdState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [localValue, setLocalValue] = useState(""); // default 값 처리용 로컬 상태

  // 상태와 설정 함수 결정
  const inputValue = type === "doctorId" ? doctorId : type === "password" ? password : localValue;
  const setInputValue =
    type === "doctorId" ? setDoctorId : type === "password" ? setPassword : setLocalValue;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (type === "password") {
      const passwordCriteria = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
      setIsSatisfied(passwordCriteria.test(value));
    } else if (type === "email") {
      const emailCriteria = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setIsSatisfied(emailCriteria.test(value));
    } else if (type === "birth") {
      const birthCriteria = /^\d{4}.\d{2}.\d{2}$/;
      setIsSatisfied(birthCriteria.test(value));
    }

    console.log("type:" + type + " value:" + inputValue);
  };

  return (
    <MainLayout>
      <FormInfoWrapper>
        <FormInfo>{formInfo}</FormInfo>
        {!isSatisfied && <Warning>{warningSentence}</Warning>}
      </FormInfoWrapper>
      <InfoInputWrapper>
        <InfoInput
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        {isExistBtn && <IdCheckButton>중복 확인</IdCheckButton>}
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default LoginInputForm;

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
  justify-content: space-between;
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


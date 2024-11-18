import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  nameState,
  hospitalState,
  phoneState,
  doctorIdState,
  passwordState,
} from "../../../shared/components/state/SignUpForDoctor";

function SignUpInputForm({
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
  const [name, setName] = useRecoilState(nameState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [hospital, setHospital] = useRecoilState(hospitalState);
  const [localValue, setLocalValue] = useState(""); // default 값 처리용 로컬 상태

  let inputValue;
  let setInputValue;

  switch (type) {
    case "doctorId":
      inputValue = doctorId;
      setInputValue = setDoctorId;
      break;
    case "password":
      inputValue = password;
      setInputValue = setPassword;
      break;
    case "name":
      inputValue = name;
      setInputValue = setName;
      break;
    case "phone":
      inputValue = phone;
      setInputValue = setPhone;
      break;
    case "hospital":
      inputValue = hospital;
      setInputValue = setHospital;
      break;
    default:
      inputValue = localValue;
      setInputValue = setLocalValue;
      break;
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 입력 검증
    if (type === "password") {
      const passwordCriteria =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
      setIsSatisfied(passwordCriteria.test(value));
    } else if (type === "phone") {
      const phoneCriteria = /^010-\d{4}-\d{4}$/;
      setIsSatisfied(phoneCriteria.test(value));    
    } else if (type === "birth") {
      const birthCriteria = /^\d{4}.\d{2}.\d{2}$/;
      setIsSatisfied(birthCriteria.test(value));
    } else {
      setIsSatisfied(true); // 특정 검증이 없는 경우 항상 만족하는 상태로 설정
    }
    console.log("type:" + type + " value:" + inputValue);
  };

  return (
    <MainLayout>
      <FormInfoWrapper>
        <FormInfo>{formInfo}</FormInfo>
        {/* isSatisfied가 false이고 warningSentence가 있을 때만 경고 문구 표시 */}
        {!isSatisfied && warningSentence && (
          <Warning>{warningSentence}</Warning>
        )}
      </FormInfoWrapper>
      <InfoInputWrapper>
        <InfoInput
          type={type === "password" ? "password" : "text"}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        {/* isExistBtn이 true일 때만 중복 확인 버튼 표시 */}
        {isExistBtn && <IdCheckButton>중복 확인</IdCheckButton>}
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default SignUpInputForm;

// 스타일드 컴포넌트들
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
  padding: 0px 30px;
  border-radius: 3em;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const InfoInput = styled.input`
  border: none;
  font-size: 15px;
  width: 85%;
  outline: none;
  background:transparent;
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
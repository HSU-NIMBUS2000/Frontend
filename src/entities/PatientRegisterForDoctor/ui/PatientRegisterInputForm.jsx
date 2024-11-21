import React, {useState} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  nameState,
  emailState,
  birthState,
  diseaseState,
} from "../../../shared/components/state/PatientRegisterForDoctor"; 

function PatientRegisterInputForm({
  formInfo,
  placeholder,
  type,
  isExistBtn,
  warningSentence,
}) {
  const [isSatisfied, setIsSatisfied] = useState(true);

  const [disease, setDisease]=useRecoilState(diseaseState);
  const [birth, setBirth]=useRecoilState(birthState);
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [localValue, setLocalValue] = useState("");

  let inputValue;
  let setInputValue;

  switch (type) {
    case "birth":
      inputValue = birth;
      setInputValue = setBirth;
      break;
    case "disease":
      inputValue = disease;
      setInputValue = setDisease;
      break;
    case "name":
      inputValue = name;
      setInputValue = setName;
      break;
    case "email":
      inputValue = email;
      setInputValue = setEmail;
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
    if (type === "email") {
      const emailCriteria = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setIsSatisfied(emailCriteria.test(value));
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

export default PatientRegisterInputForm;

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
  //border: 1px solid #6572d2;
  border-radius: 3em;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoInput = styled.input`
  border: none;
  font-size: 17px;
  width: 85%;
  outline: none;
  background-color: transparent;
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

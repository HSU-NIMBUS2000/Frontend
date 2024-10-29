import React from "react";
import { useState } from "react";
import styled from "styled-components";

function SignUpInput({ formInfo, placeholder, type, isExistBtn, warningSentence }) {
  // useState 훅 사용
  // inputValue : 사용자가 입력한 값을 저장하는 상태 변수 (초기값 빈 문자열)
  const [inputValue, setInputValue] = useState("");
  // isSatisfied : 입력값이 조건을 만족하는지 여부를 저장하는 상태 변수 (초기값 true)
  const [isSatisfied, setIsSatisfied] = useState(true);

  // 입력 필드의 값이 변경될 때마다 호출
  const handleInputChange = (e) => {
    // 사용자가 입력한 값을 가져와 value에 저장
    const value = e.target.value;
    // setInputValue inputValue의 상태를 업데이트
    setInputValue(value);

    // password 일때 검증 수행
    if (type==="password") {
      const passwordCriteria = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
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
        <InfoInput type={type} placeholder={placeholder}  value={inputValue}
          onChange={handleInputChange}/>
        {/* isExistBtn이 true일 때만 화면에 표시되는 조건부 렌더링 */}
        {isExistBtn && <IdCheckButton>중복 확인</IdCheckButton>}
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default SignUpInput;

const MainLayout = styled.div`
`;

const FormInfoWrapper=styled.div`
  display: flex;
  align-items: center;
  margin-top:40px;
`;

const Warning=styled.div`
  color: #EE2B2B;
  font-size:15px;
  font-weight:600;
  margin-bottom: 12px;
  padding-left:10px;
`;

const FormInfo = styled.div`
  align-items: baseline;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-bottom:10px;
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
  width:85%;
  outline:none;
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

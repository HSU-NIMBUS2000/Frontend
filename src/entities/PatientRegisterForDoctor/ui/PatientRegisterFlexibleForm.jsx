import React, {useState} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { promptState, remarkState} from "../../../shared/components/state/PatientRegisterForDoctor";

function PatientRegisterFlexibleForm({ formInfo, placeholder, type, height }) {
    const inputHeight = height ? `${height - 20}px` : "60px";
  
    const [prompt, setPrompt]=useRecoilState(promptState);
    const [remark, setRemark]=useRecoilState(remarkState);
    const [localValue, setLocalValue] = useState("");
  
    let inputValue;
    let setInputValue;
  
    switch (type) {
      case "prompt":
        inputValue = prompt;
        setInputValue = setPrompt;
        break;
      case "remark":
        inputValue = remark;
        setInputValue = setRemark;
        break;
      default:
        inputValue = localValue;
        setInputValue = setLocalValue;
        break;
    }

    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      console.log("type:" + type + " value:" + inputValue);
    };

  return (
    <MainLayout>
      <FormInfo>{formInfo}</FormInfo>
      <InfoInputWrapper height={height}>
        <InfoInput 
          type={type} 
          placeholder={placeholder} 
          height={inputHeight} 
          value={inputValue}
          onChange={handleInputChange} />
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default PatientRegisterFlexibleForm;

const MainLayout = styled.div`
  margin-top: 40px;
`;

const FormInfo = styled.div`
  align-items: baseline;
    font-size: 22px;
  font-weight: 550;
  text-align: left;
  margin-bottom: 10px;
`;

const InfoInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 30px 20px 30px;
  //border: 1px solid #6572d2;
  border-radius: 3em;
  background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: ${({ height }) =>
    height || "80px"}; /* height를 props로 받거나 기본값 80px으로 */
`;

const InfoInput = styled.textarea`
  border: none;
  font-size: 20px;
  font-weight:400;
  width: 100%;
  height: ${({ height }) => height};
  outline: none;
  resize: none;
  max-width: 100%; /* 최대 너비를 설정하여 줄바꿈이 발생할 수 있도록 */
  word-wrap: break-word; /* 단어 길 떄 줄바꿈 */
  overflow-wrap: break-word; /* 길게 이어진 텍스트 줄바꿈 */
  background-color: transparent;
`;

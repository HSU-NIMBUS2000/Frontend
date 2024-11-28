import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { nameState, birthState, diseaseState, remarkState, promptState } from "../../../shared/components/state/PatientInfoForDoctor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import axios from "axios";
import { bitAnd } from "three/webgpu";

function Table({ isEdited }) {
  const [name, setName] = useRecoilState(nameState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [disease, setDisease] = useRecoilState(diseaseState);
  const [remark, setRemark] = useRecoilState(remarkState);
  const [prompt, setPrompt] = useRecoilState(promptState);
  const formattedBirth = birth ? format(birth, 'yyyy년 MM월 dd일', { locale: ko }) : "";

  useEffect(() => {
    setName(localStorage.getItem('patientName') || "이름 없음");
    setBirth(localStorage.getItem('patientBirth') || "생년월일 없음");
    setDisease(localStorage.getItem('pyeoningDisease') || "병명 없음");
    setPrompt(localStorage.getItem('pyeoningPrompt') || "프롬프트 없음");
    setRemark(localStorage.getItem('pyeoningSpecial') || "특이사항 없음");
  }, []);

  return (
    <MainLayout>
      <Name><KeyWrap>이름</KeyWrap></Name>
      <NameValue>
        <TextInput value={name} readOnly={!isEdited} onChange={(e) => setName(e.target.value)} />
        {/* <AutoResizeTextarea value={name} readOnly={!isEdited} onChange={(e) => setName(e.target.value)} /> */}
      </NameValue>

      <Birth><KeyWrap>생년월일</KeyWrap></Birth>
      <BirthValue>
        <TextInput value={birth} readOnly={!isEdited} onChange={(e) => setBirth(e.target.value)} />
        {/* <BirthInput value={birth} readOnly={!isEdited} onChange={(e) => setBirth(e.target.value)} /> */}
        {/* <AutoResizeTextarea value={birth} readOnly={!isEdited} onChange={(e) => setBirth(e.target.value)} /> */}
      </BirthValue>

      {/* <BirthValue>
        {isEdited ? (
          <StyledDatePicker
            selected={birth}
            onChange={(date) => setBirth(date)}
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            placeholderText="날짜 선택"
            showYearDropdown
            yearDropdownItemNumber={100}
            scrollableYearDropdown
          />
        ) : (
          <span>{formattedBirth}</span>
        )}
      </BirthValue> */}

      <Birth><KeyWrap>병명</KeyWrap></Birth>
      <BirthValue>
        <TextInput value={disease} readOnly={!isEdited} onChange={(e) => setDisease(e.target.value)} />
        {/* <AutoResizeTextarea value={disease} readOnly={!isEdited} onChange={(e) => setDisease(e.target.value)} /> */}
      </BirthValue>

      <Birth style={{ backgroundColor: "#6572d2", color: "white" }}>
        <KeyWrap>프롬프트</KeyWrap>
      </Birth>
      <BirthValue style={{ backgroundColor: "#6572d2", height: "120px", overflow: "auto" }}>
        <textarea
          style={{
            backgroundColor: '#6572d2', // 기본값
            color: "white",           // 기본값
            fontWeight: 600,          // 기본값
            whiteSpace: "pre-wrap", // 줄바꿈 허용 및 공백 유지
            overflowWrap: "break-word", // 긴 단어 줄바꿈
            width: "100%", // 부모 요소 크기에 맞춤
            height: "100%", // 부모 요소 높이에 맞춤
            border: "none", // 불필요한 테두리 제거
            boxSizing: "border-box", // 패딩 포함 크기 계산
            resize: "none", // 크기 조정 비활성화
          }}
          value={prompt}
          readOnly={!isEdited}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // 엔터로 줄바꿈 막기
              e.target.style.backgroundColor = "skyblue";
              e.target.style.color = "white";
              e.target.style.fontWeight = 600;
            }
          }}
        />
      </BirthValue>

      <Remark><KeyWrap>특이사항</KeyWrap></Remark>
      <RemarkValue>
        <TextInput value={remark} readOnly={!isEdited} onChange={(e) => setRemark(e.target.value)} />
        {/* <AutoResizeTextarea value={remark} readOnly={!isEdited} onChange={(e) => setRemark(e.target.value)} /> */}
      </RemarkValue>
    </MainLayout>
  );
}

export default Table;

const AutoResizeTextarea = ({ value = "", readOnly, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      requestAnimationFrame(() => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      });
    }
  }, [value]);

  return (
    <ValueInput
      as="textarea"
      ref={textareaRef}
      value={value || ""} // 기본값 보장
      readOnly={readOnly}
      onChange={onChange}
      rows={1}
    />
  );
};

const ValueInput = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 16px;
  color: #000;
  resize: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:read-only {
    background: transparent;
  }
`;



const StyledDatePicker = styled(DatePicker)`
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  border: none;
  font-size: 16px;
  padding: 0px;
  margin-left: -19px;
  font-family: none;

  &:focus {
    outline: none;
    border: none;
    font-size: 16px; 
    padding: 0px;
    font-family: none;
  }

  &::placeholder {
    font-size: 16px; 
    color: #ccc;
    font-family: none;
  }
`;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(5, auto);
  width: 100%;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #6572d2;
  padding: 20px;
  border-top-left-radius: 10px;
  border-right: 1px solid #6572d2;
  border-bottom: 1px solid #6572d2;
`;

const KeyWrap = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 600;
`;

const NameValue = styled.div`
  border: 2px solid #6572d2;
  padding: 20px;
  border-top-right-radius: 10px;
  border-left: 1px solid #6572d2;
  border-bottom: 1px solid #6572d2;
`;

const Birth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6572d2;
  border-left: 2px solid #6572d2;
  padding: 20px;
`;

// const BirthValue = styled.div`
//   border: 1px solid #6572d2;
//   border-right: 2px solid #6572d2;
//   padding: 20px;
// `;

const Remark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #6572d2;
  padding: 20px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-right: 1px solid #6572d2;
  border-top: 1px solid #6572d2;
`;

const RemarkValue = styled.div`
  border: 2px solid #6572d2;
  padding: 20px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid #6572d2;
  border-top: 1px solid #6572d2;
`;

// const ValueInput = styled.textarea`
//   width: 100%;
//   border: none;
//   background: transparent;
//   text-align: left;
//   font-size: 16px;
//   color: inherit;
//   resize: none;
//   white-space: pre-wrap;
//   overflow-wrap: break-word;
//   overflow: hidden;

//   &:focus {
//     outline: none;
//   }

//   &:read-only {
//     background: transparent;
//   }
// `;

const TextInput = styled.input`
width: 100%;
outline: none;
border: none;

`

const BirthValue = styled.div`
border: 1px solid #6572d2;
  padding: 20px;
  border-right: 2px solid #6572d2;
`

const BirthInput = styled.input`
outline: none;
border: none;
// border: 1px solid #6572d2;
// border-right: 2px solid #6572d2
`
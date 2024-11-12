import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { nameState, birthState, diseaseState, remarkState, promptState } from "../../../shared/components/state/PatientInfo";
import axios from "axios";

function Table({ isEdited }) {
  const [name, setName] = useRecoilState(nameState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [disease, setDisease] = useRecoilState(diseaseState);
  const [remark, setRemark] = useRecoilState(remarkState);
  const [prompt, setPrompt] = useRecoilState(promptState);
  const formattedBirth = birth ? format(birth, 'yyyy년 MM월 dd일', { locale: ko }) : "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token_tmp = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTEiLCJ1c2VySWQiOiIxMTEiLCJyb2xlcyI6WyJST0xFX0RPQ1RPUiJdLCJpYXQiOjE3MzEwNDg5MjEsImV4cCI6MTczMTEzNTMyMX0.YEcVzsvWRHIMqcywgtonPbt_tELUywtocgjrlfFLvN8'
        const response = await axios.get('/api/patient/6/detail', {
          headers: {
            'Authorization': `Bearer ${token_tmp}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('Data received:', response.data);
        setName(response.data.data.patientName)
        setBirth(response.data.data.patientBirth)
        setDisease(response.data.data.patientBirth)
        setRemark(response.data.data.pyeoningSpecial)
        setPrompt(response.data.data.pyeoningSpecial)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <MainLayout>
      <Name><KeyWrap>이름</KeyWrap></Name>
      <NameValue>
        <AutoResizeTextarea value={name} readOnly={!isEdited} onChange={(e) => setName(e.target.value)} />
      </NameValue>

      <Birth><KeyWrap>생년월일</KeyWrap></Birth>
      <BirthValue>
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
      </BirthValue>

      <Birth><KeyWrap>병명</KeyWrap></Birth>
      <BirthValue>
        <AutoResizeTextarea value={disease} readOnly={!isEdited} onChange={(e) => setDisease(e.target.value)} />
      </BirthValue>

      <Birth><KeyWrap>프롬프트</KeyWrap></Birth>
      <BirthValue>
        <AutoResizeTextarea value={prompt} readOnly={!isEdited} onChange={(e) => setPrompt(e.target.value)} />
      </BirthValue>

      <Remark><KeyWrap>특이사항</KeyWrap></Remark>
      <RemarkValue>
        <AutoResizeTextarea value={remark} readOnly={!isEdited} onChange={(e) => setRemark(e.target.value)} />
      </RemarkValue>
    </MainLayout>
  );
}

export default Table;

const AutoResizeTextarea = ({ value, readOnly, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <ValueInput
      as="textarea"
      ref={textareaRef}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      rows={1}
    />
  );
};

const StyledDatePicker = styled(DatePicker)`
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  border: none;
  font-size: 16px;
  padding: 0px;

  &:focus {
    outline: none;
    border: none;
    font-size: 16px; 
    padding: 0px;
  }

  &::placeholder {
    font-size: 16px; 
    color: #ccc;
  }
`;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(5, auto);
  width: 1000px;
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
  text-align: center;
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

const BirthValue = styled.div`
  border: 1px solid #6572d2;
  border-right: 2px solid #6572d2;
  padding: 20px;
`;

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
  text-align: center;
  border-bottom-right-radius: 10px;
  border-left: 1px solid #6572d2;
  border-top: 1px solid #6572d2;
`;

const ValueInput = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 16px;
  color: inherit;
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
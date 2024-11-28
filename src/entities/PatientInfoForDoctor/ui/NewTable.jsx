import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { nameState, birthState, diseaseState, remarkState, promptState, genderState } from "../../../shared/components/state/PatientInfoForDoctor";
import axios from "axios";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

function NewTable({ isEdited }) {
  const [name, setName] = useRecoilState(nameState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [disease, setDisease] = useRecoilState(diseaseState);
  const [remark, setRemark] = useRecoilState(remarkState);
  const [gender, setGender] = useRecoilState(genderState);
  const [prompt, setPrompt] = useRecoilState(promptState);

  const formattedBirth = birth ? format(birth, 'yyyy년 MM월 dd일', { locale: ko }) : "";
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('doctorToken');
        const patientId = localStorage.getItem('patientId');
        const response = await axios.get(`/api/patient/${patientId}/detail`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setName(localStorage.getItem('patientName'));
        setBirth(localStorage.getItem('patientBirth'));
        setDisease(localStorage.getItem('pyeoningDisease'));
        setGender(localStorage.getItem('genderState'));
        setRemark(localStorage.getItem('pyeoningSpecial'));
        setPrompt(localStorage.getItem('pyeoningPrompt'));
        setGender(localStorage.getItem('patientGender'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <FlexBox height="30px">
        <Title>생년월일</Title>
        <AutoResizeTextarea value={birth} readOnly={!isEdited} onChange={(e) => setBirth(e.target.value)} />
      </FlexBox>

      <FlexBox height="30px">
        <Title>성별</Title>
        <AutoResizeTextarea value={gender} readOnly={!isEdited} onChange={(e) => setGender(e.target.value)} />
      </FlexBox>

      <FlexBox height="30px">
        <Title>병명</Title>
        <AutoResizeTextarea value={disease} readOnly={!isEdited} onChange={(e) => setDisease(e.target.value)} />
      </FlexBox>

      <FlexBox height="130px">
        <Title>프롬프트</Title>
        <AutoResizeTextarea value={prompt} readOnly={!isEdited} onChange={(e) => setPrompt(e.target.value)} />
      </FlexBox>

      <FlexBox height="30px">
        <Title>특이사항</Title>
        <AutoResizeTextarea value={remark} readOnly={!isEdited} onChange={(e) => setRemark(e.target.value)} />
      </FlexBox>
    </MainLayout>
  );
}

export default NewTable;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-right: 40px;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const FlexBox = styled.div`
  display: flex;
  margin: 5px;
  height: ${(props) => props.height || "50px"};
  width: 550px;
`;

const Title = styled.div`
  width: 30%;
  color: black;
  font-weight: 400;
  font-size: 22px;
`;

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
      ref={textareaRef}
      value={value}
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
  font-size: 20px;
  font-weight: 400;
  color: inherit;
  resize: none; /* 텍스트박스 크기 조정 불가 */
  overflow-y: auto; /* 텍스트가 넘칠 때 스크롤 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  height: 35px; /* 기본 높이를 설정하여 넘치지 않게 함 */
  display: block;
  max-height: 150px; /* 텍스트가 너무 많이 들어가면 최대 높이 설정 */
  
  &:focus {
    outline: none;
  }

  &:read-only {
    background: transparent;
  }
`;

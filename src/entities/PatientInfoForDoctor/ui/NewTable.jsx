import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil";
import { nameState, birthState, diseaseState, remarkState, promptState } from "../../../shared/components/state/PatientInfoForDoctor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import axios from "axios";

function NewTable(isEdited) {

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
            <FlexBox>
                <Title>생년월일</Title>
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
            </FlexBox>

            <FlexBox>
                <Title>성별</Title>
                <AutoResizeTextarea value={name} readOnly={!isEdited} onChange={(e) => setName(e.target.value)} />
            </FlexBox>

            <FlexBox>
                <Title>병명</Title>
                <AutoResizeTextarea value={disease} readOnly={!isEdited} onChange={(e) => setDisease(e.target.value)} />
            </FlexBox>

            <FlexBox>
                <Title>프롬프트</Title>
                <AutoResizeTextarea value={prompt} readOnly={!isEdited} onChange={(e) => setPrompt(e.target.value)} />
            </FlexBox>

            <FlexBox>
                <Title>특이사항</Title>
                <AutoResizeTextarea value={remark} readOnly={!isEdited} onChange={(e) => setRemark(e.target.value)} />
            </FlexBox>
        </MainLayout>
    )
}
export default NewTable;

const MainLayout = styled.div`
width: 350px;
padding-right: 30px;
`

const FlexBox = styled.div`
display: flex;
margin-bottom: 10px;
`

const Title = styled.div`
width: 100%;
color: black;
font-weight: 400;
`

const Value = styled.div`
font-weight: 400;
`

const BirthValue = styled.div`
  width: 350px; /* 원하는 고정 너비 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임 표시 */
  display: inline-block; /* 텍스트가 처음부터 보이도록 inline-block 설정 */
`;

const ValueInput = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 16px;
  color: inherit;
  resize: none;
  white-space: nowrap; /* 줄 바꿈을 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ... 표시 */
  display: block; /* block 요소로 설정 */
  
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
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { nameState, birthState, diseaseState, remarkState, promptState } from "../../../shared/components/state/PatientInfo";

function Table({ isEdited }) {
  const [name, setName] = useRecoilState(nameState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [disease, setDisease] = useRecoilState(diseaseState);
  const [remark, setRemark] = useRecoilState(remarkState);
  const [prompt, setPrompt] = useRecoilState(promptState);

  return (
    <MainLayout>
      <Name><KeyWrap>이름</KeyWrap></Name>
      <NameValue>
        <AutoResizeTextarea value={name} readOnly={!isEdited} onChange={(e) => setName(e.target.value)} />
      </NameValue>

      <Birth><KeyWrap>생년월일</KeyWrap></Birth>
      <BirthValue>
        <AutoResizeTextarea value={birth} readOnly={!isEdited} onChange={(e) => setBirth(e.target.value)} />
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
  }
`;
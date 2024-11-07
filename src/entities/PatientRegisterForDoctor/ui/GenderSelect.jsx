import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  genderState,
} from "../../../shared/components/state/PatientRegisterForDoctor";

function GenderSelect() {
  const [selectedGender, setSelectedGender] = useRecoilState(genderState);
  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <MainLayout>
      <FormInfo>성별을 선택해주세요</FormInfo>

      {/* 성별 선택 버튼 */}
      <SelectWrapper>
        <SelectButton
          isSelected={selectedGender === "male"}
          onClick={() => handleSelect("male")}
        >
          🚹
        </SelectButton>
        <SelectButton
          isSelected={selectedGender === "female"}
          onClick={() => handleSelect("female")}
        >
          🚺 
        </SelectButton>
      </SelectWrapper>
    </MainLayout>
  );
}

export default GenderSelect;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormInfo = styled.div`
  align-items: baseline;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const SelectButton = styled.button`
  border: 1px solid #6572d2;
  background-color: ${({ isSelected }) => (isSelected ? "#6572d2" : "white")};
  border-radius: 3em;
  padding: 15px;
  font-size: 45px;
  font-weight: 600;
  width: 45%;
  height: 80px;
  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#6572d2" : "#f0f0f0"};
  }
`;

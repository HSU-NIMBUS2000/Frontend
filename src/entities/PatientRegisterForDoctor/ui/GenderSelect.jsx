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
          isSelected={selectedGender === "MALE"}
          onClick={() => handleSelect("MALE")}
        >
          🚹
        </SelectButton>
        <SelectButton
          isSelected={selectedGender === "FEMALE"}
          onClick={() => handleSelect("FEMALE")}
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
  background-color: ${({ isSelected }) => (isSelected ? "#d7e3fe" : "rgba(255, 255, 255, 0.6)")};
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
      isSelected ? "#d7e3fe" : "#f0f0f0"};
  }
`;

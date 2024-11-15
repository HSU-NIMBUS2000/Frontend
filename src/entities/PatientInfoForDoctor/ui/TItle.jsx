import React from "react";
import styled from "styled-components";
import save from "../../../assets/image/save.svg";
import edit from "../../../assets/image/edit.svg";
<<<<<<< HEAD:src/entities/PatientInfoForDoctor/ui/TItle.jsx
import { useRecoilValue } from "recoil";
import { nameState } from "../../../shared/components/state/PatientInfoForDoctor";
=======
import axios from "axios";
import { useRecoilState } from "recoil";
import { nameState, birthState, diseaseState, remarkState, promptState } from "../../../shared/components/state/PatientInfo";
>>>>>>> 6f517f312819e9ebb06e0b176b47dc66bc869f4f:src/entities/PatientInfo/ui/TItle.jsx

function Title({ isEdited, setIsEdited }) {

  const [name, setName] = useRecoilState(nameState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [disease, setDisease] = useRecoilState(diseaseState);
  const [remark, setRemark] = useRecoilState(remarkState);
  const [prompt, setPrompt] = useRecoilState(promptState);

  function btnClickHandler() {
    setIsEdited(!isEdited)

    if (isEdited) {
      const token_tmp = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTEiLCJ1c2VySWQiOiIxMTEiLCJyb2xlcyI6WyJST0xFX0RPQ1RPUiJdLCJpYXQiOjE3MzEwNDg5MjEsImV4cCI6MTczMTEzNTMyMX0.YEcVzsvWRHIMqcywgtonPbt_tELUywtocgjrlfFLvN8'

      axios.post('/api/patient/6/modifyPrompt', {
        'patientName': name,
        "patientBirth": birth,
        "pyeoningDisease": disease,
        "pyeoningPrompt": prompt,
        "pyeoningSpecial": remark
      }, {
        headers: {
          'Authorization': `Bearer ${token_tmp}`,
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log('Response:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  }

  return (
    <MainLayout>
      <TitleText>{name}님 관리페이지</TitleText>
      <EditButton onClick={btnClickHandler}>
        <img src={isEdited ? save : edit} />
      </EditButton>
    </MainLayout>
  );
}

export default Title;

const MainLayout = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;
import React from "react";
import styled from "styled-components";
import save from "../../../assets/image/save.svg";
import edit from "../../../assets/image/edit.svg";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../shared/components/state/PatientInfoForDoctor";

function Title({ isEdited, setIsEdited }) {

    const name = useRecoilValue(nameState)

    function btnClickHandler() {
        setIsEdited(!isEdited)
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
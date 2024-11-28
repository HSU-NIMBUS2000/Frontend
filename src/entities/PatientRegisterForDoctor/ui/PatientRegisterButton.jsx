import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { nameState, birthState, genderState, diseaseState,emailState,promptState,remarkState } from "../../../shared/components/state/PatientRegisterForDoctor";

function PatientRegisterButton({text, state }) {
  const name = useRecoilValue(nameState);
  const birth=useRecoilValue(birthState);
  const gender=useRecoilValue(genderState);
  const disease=useRecoilValue(diseaseState);
  const email=useRecoilValue(emailState);
  const remark=useRecoilValue(remarkState);
  const prompt=useRecoilValue(promptState);

  async function btnClickHandler(){
    // 생년월일 '.'을 '-'으로 변경
    const formattedBirth = (birth.replace(/\./g, '-'));
    const formattedGender=(gender.toUpperCase());

    const requestData = {
            patientName: name,
            patientBirth : formattedBirth,
            patientGender : formattedGender,
            patientEmail : email,
            pyeoningDisease: disease,
            pyeoningPrompt: prompt,
            pyeoningSpecial: remark,
      };
      console.log("requestData 타입:", typeof requestData);
      console.log("requestData 내용:", requestData);


      const token=localStorage.getItem('doctorToken');
  
      try {
        const response = await fetch("http://15.164.174.64/api/patient/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`,
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log("환자 등록 성공:", responseData);
          alert("환자가 등록되었습니다.");
        } else {
            const errorData = await response.json();
            console.error("환자 등록 실패:", response.status, errorData.message);
            alert(`${errorData.message}`);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
        alert("네트워크 오류입니다. 관리자에게 문의하세요");
      }

    
  }
  return <Button onClick={btnClickHandler}>{text}</Button>;
}

export default PatientRegisterButton;

const Button = styled.button`
  background-color: #6f95e6;
  color: white;
  border: none;
  height: 70px;
  border-radius: 3em;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
`;

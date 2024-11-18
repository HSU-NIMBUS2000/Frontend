import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { nameState, doctorIdState, hospitalState, phoneState, passwordState } from "../../../shared/components/state/SignUpForDoctor";

function SignUpButton({text, state }) {
  const name = useRecoilValue(nameState);
  const doctorId = useRecoilValue(doctorIdState);
  const hospital = useRecoilValue(hospitalState);
  const phone = useRecoilValue(phoneState);
  const password = useRecoilValue(passwordState);

  async function btnClickHandler(){
    const requestData = {
        doctorName: name,
        doctorHospital: hospital,
        doctorLicense: doctorId,
        doctorPhone: phone,
        doctorPassword: password,
      };
  
      try {
        const response = await fetch("http://15.164.174.64/api/doctor/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log("회원가입 성공:", responseData);
          alert("회원가입이 성공적으로 완료되었습니다!");
        } else {
            const errorData = await response.json();
            console.error("회원가입 실패:", response.status, errorData.message);
            alert(`${errorData.message}`);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
        alert("네트워크 오류입니다. 관리자에게 문의하세요");
      }

    
  }
  return <Button onClick={btnClickHandler}>{text}</Button>;
}

export default SignUpButton;

const Button = styled.button`
  background-color: #6572d2;
  color: white;
  border: none;
  height: 70px;
  border-radius: 1em;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
`;

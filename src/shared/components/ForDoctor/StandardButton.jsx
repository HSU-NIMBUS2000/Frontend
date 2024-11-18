import React from "react";
import styled from "styled-components";

function StandardButton({ type, text, state }) {
  function btnClickHandler(){
    if(type === 'login'){
      // 아이디랑 패스워드 
      // post 로그인 요청
    }else if(type==='signUp'){
      // post 회원가입 요청

    }
    
  }
  return <Button onClick={btnClickHandler}>{text}</Button>;
}

export default StandardButton;

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

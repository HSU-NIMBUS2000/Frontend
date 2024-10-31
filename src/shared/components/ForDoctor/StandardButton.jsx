import React from "react";
import styled from "styled-components";

function StandardButton({ text }) {
  return <Button>{text}</Button>;
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

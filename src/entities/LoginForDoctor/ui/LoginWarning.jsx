import React from "react";
import styled from "styled-components";

function LoginWarning({text}) {
  return <WarningText>{text}</WarningText>;
}

export default LoginWarning;

const WarningText = styled.div`
  color: #ee2b2b;
  font-size: 20px;
  font-weight: 600;
`;

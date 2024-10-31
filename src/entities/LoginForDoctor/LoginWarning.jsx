import React from "react";
import styled from "styled-components";

function LoginWarning() {
  return <WarningText>어떻게 둬야 할지 모르겠음</WarningText>;
}

export default LoginWarning;

const WarningText = styled.div`
  color: #ee2b2b;
  font-size: 20px;
  font-weight: 600;
`;

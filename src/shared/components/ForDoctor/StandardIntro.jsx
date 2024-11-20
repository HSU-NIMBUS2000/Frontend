import React from "react";
import styled from "styled-components";

function StandardIntro({ text }) {
  return <IntroText dangerouslySetInnerHTML={{ __html: text }} />;
}

export default StandardIntro;

const IntroText = styled.div`
  font-size: 30px;
  font-weight: 600;
  // margin: 50px 0px 0px 0px; // 상우하좌
  text-align: center;
`;

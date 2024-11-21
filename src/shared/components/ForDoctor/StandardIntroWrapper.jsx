import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Intro from "./StandardIntro";

function StandardIntroWrapper({ text }) {
  return (
    <MainLayout>
      {/* <Logo /> */}
      <Intro text={text} />
    </MainLayout>
  );
}

export default StandardIntroWrapper;

const MainLayout = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;

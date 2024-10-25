import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Chatting from "../entities/MainForUser/Chatting";
import Listening from '../shared/components/Listening'
// import Avatar from "../entities/MainForUser/Avatar";
import Logo from "../entities/MainForUser/Logo";

function MainForUser() {
  const [chattings, setChattings] = useState([])

  return (
    <MainLayout>

      <Logo />

      {/* <Avatar /> */}

      <Chatting chattings={chattings} />

      <Listening
        chattings={chattings}
        setChattings={setChattings}
      />

    </MainLayout>
  );
};

export default MainForUser;

// 스타일드 컴포넌트
const MainLayout = styled.div`
  position: relative;
  background: linear-gradient(135deg, #FFDEAD, #FFD1DC, #E5CCDA);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
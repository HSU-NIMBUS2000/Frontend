import React, { useState, Suspense, useEffect } from "react";
import styled from "styled-components";
import Chatting from "../entities/MainForUser/Chatting";
import Listening from '../shared/components/Listening';
import Avatar from "../entities/MainForUser/Avatar";
import Logo from "../entities/MainForUser/Logo";
import ToggleSwitch from "../shared/components/ToggleSwitch/ToggleSwitch";
import bunny_doctor from '../assets/model/bunny_doctor.glb';
import doctor_simi from '../assets/model/doctor_simi.glb';
import banana_cat from '../assets/model/banana_cat.glb';

function MainForUser() {
  const [chattings, setChattings] = useState([]);
  const [avatar, setAvatar] = useState(doctor_simi);

  useEffect(()=>{
    console.log(avatar)
  }, [])

  function changeAvatar(n) {
    switch (n) {
      case 0:
        setAvatar(doctor_simi);
        break;
      case 1:
        setAvatar(bunny_doctor);
        break;
      case 2:
        setAvatar(banana_cat);
        break;
      default:
        break;
    }
  }

  return (
    <MainLayout>
      <Logo />
      <Suspense fallback={<div>Loading...</div>}>
        <Avatar avatar={avatar} />
      </Suspense>
      <Chatting chattings={chattings} />
      <Listening chattings={chattings} setChattings={setChattings} />
      <ToggleSwitchWrap>
        <ToggleSwitch changeAvatar={changeAvatar} />
      </ToggleSwitchWrap>
    </MainLayout>
  );
}

export default MainForUser;

const MainLayout = styled.div`
  position: relative;
  background: linear-gradient(135deg, #FFDEAD, #FFD1DC, #E5CCDA);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ToggleSwitchWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;
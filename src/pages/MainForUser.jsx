import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import Chatting from "../entities/MainForUser/Chatting";
import Listening from "../shared/components/Listening";
import Avatar from "../entities/MainForUser/Avatar";
import Logo from "../entities/MainForUser/Logo";
import ToggleSwitch from "../shared/components/ToggleSwitch/ToggleSwitch";
import doctor_simi from "../assets/model/doctor_simi.glb";
import banana_cat from "../assets/model/banana_cat.glb";
import MainInput from "../shared/components/MainInput/MainInput";

function MainForUser() {
  const [chattings, setChattings] = useState([]);
  const [avatar, setAvatar] = useState(doctor_simi);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const token = localStorage.getItem("patientToken");
      if (token && chattings.length > 1) {
        const payload = new Blob([JSON.stringify({ token })], { type: "application/json" });

        // Send session end request
        if (!navigator.sendBeacon("/api/chat/endSession", payload)) {
          console.error("Failed to send /api/chat/endSession");
        }

        // Send summary creation request
        if (!navigator.sendBeacon("/api/summary/create", payload)) {
          console.error("Failed to send /api/summary/create");
        }
      }
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [chattings]);

  const changeAvatar = (n) => {
    switch (n) {
      case 0:
        setAvatar(doctor_simi);
        break;
      case 2:
        setAvatar(banana_cat);
        break;
      default:
        break;
    }
  };

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
      <MainInputWrap>
        <MainInput />
      </MainInputWrap>

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

const MainInputWrap = styled.div`
width: 250px;
position: absolute;
bottom: 150px;
right: 140px;
`
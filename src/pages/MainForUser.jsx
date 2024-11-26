import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import Chatting from "../entities/MainForUser/Chatting";
import Listening from "../shared/components/Listening";
import Avatar from "../entities/MainForUser/Avatar";
import Logo from "../entities/MainForUser/Logo";
import ToggleSwitch from "../shared/components/ToggleSwitch/ToggleSwitch";
import doctor_simi from "../assets/model/doctor_simi.glb";
import banana_cat from "../assets/model/banana_cat.glb";
import axios from "axios";

function MainForUser() {
  const [chattings, setChattings] = useState([]);
  const [avatar, setAvatar] = useState(doctor_simi);
  useEffect(() => {
    // 초기 로그인 요청
    axios.post("/api/patient/login", { patientCode: "JVDOO2UB" })
      .then((response) => {
        const token = response.data.data;
        localStorage.setItem("token", token);
        console.log("Token stored in localStorage:", token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // 세션 종료 시 POST 요청 설정
    const handleBeforeUnload = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.stringify({ token });

        if (chattings.length > 1) {

          // 첫 번째 요청
          navigator.sendBeacon("/api/chat/endSession", payload);

          // 두 번째 요청

          navigator.sendBeacon("/api/summary/create", payload);
          // window.localStorage.setItem("res", 'summary called')
        }

      }
    };

    // 이벤트 등록
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // 이벤트 해제
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  // useEffect(() => {
  //   // 초기 로그인 요청
  //   axios.post('/api/patient/login', {
  //     patientCode: "JVDOO2UB"
  //   })
  //     .then((response) => {
  //       const token = response.data.data;
  //       localStorage.setItem('token', token);
  //       console.log('Token stored in localStorage:', token);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });

  //   // 세션 종료 시 POST 요청 설정
  //   const handleBeforeUnload = async () => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       try {
  //         // 첫 번째 API 호출
  //         await axios.post('/api/chat/endSession', {
  //           token: token,
  //         });

  //         // 성공적으로 완료되면 두 번째 API 호출
  //         await axios.post('/api/summary/create', {
  //           token: token,
  //         });
  //       } catch (error) {
  //         console.error('Error during API calls:', error);
  //       }
  //     }
  //   };

  //   // 이벤트 등록
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     // 이벤트 해제
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  function changeAvatar(n) {
    switch (n) {
      case 0:
        setAvatar(doctor_simi);
        break;
      case 1:
        // setAvatar(bunny_doctor);
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
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import MainForUser from "./pages/MainForUser";
import './App.css';
import SignUpForDoctor from "./pages/SignUpForDoctor";
import LoginForDoctor from "./pages/LoginForDoctor";
import PatientListForDoctor from "./pages/PatientListForDoctor";
import PatientRegisterForDoctor from "./pages/PatientRegisterForDoctor";
import ShowPatientChatForDoctor from "./pages/ShowPatientChatForDoctor";
import GoTo from "./pages/GoTo";
import ApplyForUser from "./pages/ApplyForUser";
import PatientInfoForDoctor from "./pages/PatientInfoForDoctor";

function AppContent() {
  const location = useLocation();
  const doctorPages = [
    "/SignUpForDoctor",
    "/LoginForDoctor",
    "/PatientListForDoctor",
    "/PatientRegisterForDoctor",
    "/ShowPatientChatForDoctor",
    "/PatientInfoForDoctor"
  ];

  const isDoctorPage = doctorPages.includes(location.pathname);
  const appStyle = {
    background: isDoctorPage ? "linear-gradient(0deg, #CDCEF5 0%, #AED5FF 50%, #CDCEF5 100%)" : "#ffffff", // 의사 페이지에만 다른 배경색 설정
    minHeight: "100vh", // 페이지 전체를 채우도록 설정
    padding: "0",
    margin: "0"
  };

  return (
    <div style={appStyle}>
      <Routes>
        <Route path="/" element={<MainForUser />} />   {/* 메인 페이지 */}
        <Route path="/SignUpForDoctor" element={<SignUpForDoctor />} /> {/* 의사 회원가입 페이지 */}
        <Route path="/LoginForDoctor" element={<LoginForDoctor />} /> {/* 의사 로그인 페이지 */}
        <Route path="/PatientListForDoctor" element={<PatientListForDoctor />} />{/* 의사의 환자 리스트 페이지*/}
        <Route path="/PatientRegisterForDoctor" element={<PatientRegisterForDoctor />} /> {/* 의사 환자 등록 페이지 */}
        <Route path="/ShowPatientChatForDoctor" element={<ShowPatientChatForDoctor />} /> {/* 의사 환자 채팅 내역 조회 페이지*/}
        <Route path="/GoTo" element={<GoTo />} /> {/* 터미널 */}
        <Route path="/ApplyForUser" element={<ApplyForUser />} />   {/* 메인 페이지 */}
        <Route path="/PatientInfoForDoctor" element={<PatientInfoForDoctor />} /> {/* 환자 정보 조회 페이지 */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

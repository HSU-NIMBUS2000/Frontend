import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForUser from "./pages/MainForUser";
import './App.css';
import SignUpForDoctor from "./pages/SignUpForDoctor";
<<<<<<< HEAD
import LoginForDoctor from "./pages/LoginForDoctor";
import PatientListForDoctor from "./pages/PatientListForDoctor";
import PatientRegisterForDoctor from "./pages/PatientRegisterForDoctor";
import ShowPatientChatForDoctor from "./pages/ShowPatientChatForDoctor";
import GoTo from "./pages/\bGoTo";
=======
import ApplyForUser from "./pages/ApplyForUser";
import PatientInfo from "./pages/PatientInfo";
>>>>>>> d230bffbd756f17f3815ca8848dc3d6824fb8d8f

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForUser />} />   {/* 메인 페이지 */}
<<<<<<< HEAD
        <Route path="/SignUpForDoctor" element={<SignUpForDoctor/>} /> {/* 의사 회원가입 페이지 */}
        <Route path="/LoginForDoctor" element={<LoginForDoctor/>} /> {/* 의사 로그인 페이지 */}
        <Route path="/PatientListForDoctor" element={<PatientListForDoctor/>} />{/* 의사의 환자 리스트 페이지*/}
        <Route path="/PatientRegisterForDoctor" element={<PatientRegisterForDoctor/>}/> {/* 의사 환자 등록 페이지 */}
        <Route path="/ShowPatientChatForDoctor" element={<ShowPatientChatForDoctor/>}/> {/*의사 환자 채팅 내역 조회 페이지*/}
        <Route path="/GoTo" element={<GoTo/>}/> {/* 터미널 */}
=======
        <Route path="/apply" element={<ApplyForUser />} />   {/* 메인 페이지 */}
        <Route path="/SignUpForDoctor" element={<SignUpForDoctor />} /> {/* 의사 회원가입 페이지 */}
        <Route path="/PatientInfo" element={<PatientInfo />} /> {/* 의사 회원가입 페이지 */}
>>>>>>> d230bffbd756f17f3815ca8848dc3d6824fb8d8f
      </Routes>
    </Router>
  );
}

export default App;
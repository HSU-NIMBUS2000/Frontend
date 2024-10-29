import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForUser from "./pages/MainForUser";
import './App.css';
import SignUpForDoctor from "./pages/SignUpForDoctor";
import LoginForDoctor from "./pages/LoginForDoctor";
import PatientListForDoctor from "./pages/PatientListForDoctor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForUser />} />   {/* 메인 페이지 */}
        <Route path="/SignUpForDoctor" element={<SignUpForDoctor/>} /> {/* 의사 회원가입 페이지 */}
        <Route path="/LoginForDoctor" element={<LoginForDoctor/>} /> {/* 의사 로그인 페이지 */}
        <Route path="/PatientListForDoctor" element={<PatientListForDoctor/>} />{/* 의사 웹에서의 환자 리스트 페이지*/}
      </Routes>
    </Router>
  );
}

export default App;
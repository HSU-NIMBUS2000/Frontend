import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForUser from "./pages/MainForUser";
import './App.css';
import SignUpForDoctor from "./pages/SignUpForDoctor";
import ApplyForUser from "./pages/ApplyForUser";
import PatientInfo from "./pages/PatientInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForUser />} />   {/* 메인 페이지 */}
        <Route path="/apply" element={<ApplyForUser />} />   {/* 메인 페이지 */}
        <Route path="/SignUpForDoctor" element={<SignUpForDoctor />} /> {/* 의사 회원가입 페이지 */}
        <Route path="/PatientInfo" element={<PatientInfo />} /> {/* 의사 회원가입 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
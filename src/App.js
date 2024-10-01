import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForUser from "./pages/MainForUser";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForUser />} />   {/* 메인 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
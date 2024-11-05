import React from "react";
import "./Dropdown.css";
import { useState } from "react";

function Dropdown({ op1, op2, op3 }) {
  const [selectedOption, setSelectedOption] = useState(op1); // 기본 선택을 op1으로 설정

  const handleOptionClick = (option) => {
    setSelectedOption(option); // 클릭한 항목을 선택 항목으로 설정
  };
  return (
    <div class="paste-button">
      <button class="drop-button">{selectedOption} &nbsp; ▼</button>
      <div class="dropdown-content">
        <a id="top" href="#" onClick={() => handleOptionClick(op1)}>
          {op1}
        </a>
        <a id="middle" href="#" onClick={() => handleOptionClick(op2)}>
          {op2}
        </a>
        <a id="bottom" href="#" onClick={() => handleOptionClick(op3)}>
          {op3}
        </a>
      </div>
    </div>
  );
}

export default Dropdown;

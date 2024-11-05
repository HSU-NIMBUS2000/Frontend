import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Input.css';

function Input() {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (isValidCode(code)) { // 유효성 검사 함수 호출
                navigate('/'); // 메인 페이지로 이동
            } else {
                alert("유효하지 않은 코드입니다."); // 유효하지 않은 경우 알림 표시
            }
        }
    };

    const isValidCode = (inputCode) => {
        // 여기에 실제 코드 유효성 검사를 추가합니다 (예: 정규 표현식 또는 코드 확인 로직)
        return inputCode === "pyeoning"; // 예시로 코드가 "123456"인 경우만 유효하다고 가정
    };

    return (
        <div className="brutalist-container">
            <input
                placeholder="코드 입력"
                className="brutalist-input smooth-type"
                value={code}
                onChange={handleChange}
                onKeyPress={handleKeyPress} // 엔터 키를 감지하여 유효성 검사
                type="text"
            />
            <label className="brutalist-label">이메일로 제공받은 코드를 입력해 주세요.</label>
        </div>
    );
}

export default Input;
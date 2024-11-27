import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Input.css';

function Input() {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    // handleKeyPress를 비동기 함수로 변경
    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            const isValid = await isValidCode(code); // 유효성 검사 결과를 기다림
            if (isValid) {
                navigate('/MainForUser'); // 메인 페이지로 이동
            } else {
                alert("유효하지 않은 코드입니다."); // 유효하지 않은 경우 알림 표시
            }
        }
    };

    const isValidCode = async (inputCode) => {
        try {
            const response = await fetch('/api/patient/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // JSON 형식 명시
                },
                body: JSON.stringify({ patientCode: inputCode }) // JSON 문자열로 변환
            });

            if (response.ok) { // 응답 상태가 200-299일 때
                const data = await response.json(); // JSON 응답 데이터 파싱
                if (data?.data) {
                    localStorage.setItem("patientToken", data.data); // 토큰 저장
                    console.log("로그인 성공")
                    return true; // 유효한 코드
                }
            } else if (response.status === 404) {
                console.error("유효하지 않은 접속코드입니다.");
            } else {
                console.error(`서버 오류: ${response.status}`);
            }
        } catch (error) {
            console.error("네트워크 오류:", error.message);
        }
        return false; // 유효하지 않은 코드
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

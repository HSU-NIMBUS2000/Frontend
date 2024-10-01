import React, { useState, useEffect } from "react";
import useSpeechToText from "../hooks/hook"; // STT 훅 import
import { getSpeech } from "./speech"; // TTS 함수 import
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import doctor from './model/doctor.glb';
import styled from "styled-components";

export default function SpeakButton() {

// stt (Speech-to-Text)
const { transcript, listening, toggleListening } = useSpeechToText();

// tts (Text-to-Speech)
const [text, setText] = useState("");

// 목소리 관련 상태값
const [voices, setVoices] = useState([]);
const [selectedVoice, setSelectedVoice] = useState(""); // 사용자가 선택한 목소리

// 음 높이 및 속도 상태값
const [pitch, setPitch] = useState(1); // 음 높이: 기본값 1
const [rate, setRate] = useState(1);   // 속도: 기본값 1

// 텍스트 입력 변경 핸들러
const handleChange = (event) => {
  setText(event.target.value);
};

// 음성 출력 핸들러
const handleSpeak = () => {
  if (text.trim()) {
    getSpeech(text, selectedVoice, pitch, rate); // 선택한 목소리, 음 높이, 속도 전달
  }
};

// 음성 목록을 가져와 상태값에 설정
useEffect(() => {
  const setVoiceList = () => {
    const voices = window.speechSynthesis.getVoices();
    setVoices(voices);
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }
}, []);

// 선택된 목소리를 설정
const handleVoiceChange = (event) => {
  setSelectedVoice(event.target.value);
};


    return (
        <MainLayout>
            <h1>Web Speech API</h1>

            {/* STT 영역 */}
            <textarea className="transcript" value={transcript} onChange={() => { }} />
            <button onClick={toggleListening}>
                {listening ? "음성인식 중지" : "음성인식 시작"}
            </button>

            {/* TTS 영역 */}
            <h1>Speech Synthesis Example</h1>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="텍스트를 입력하세요."
                rows="4"
                cols="50"
            />
            <br />

            {/* 사용 가능한 목소리를 드롭다운 메뉴로 제공 */}
            <select value={selectedVoice} onChange={handleVoiceChange}>
                <option value="">목소리 선택</option>
                {voices.map((voice, index) => (
                    <option key={index} value={voice.name}>
                        {voice.name} ({voice.lang})
                    </option>
                ))}
            </select>
            <br />

            {/* 음 높이 및 속도 슬라이더 */}
            <label>
                음 높이: {pitch}
                <input
                    type="range"
                    min="0"
                    max="2"
                    value={pitch}
                    step="0.1"
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <label>
                속도: {rate}
                <input
                    type="range"
                    min="0.1"
                    max="3"
                    value={rate}
                    step="0.1"
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                />
            </label>
            <br />

            {/* 음성 출력 버튼 */}
            <button onClick={handleSpeak}>음성 출력</button>
        </MainLayout>
    )
}

const MainLayout = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(135deg, #ffffff, #D7E3FF);
    padding: 20px;
    border-radius: 10px;
    // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

`
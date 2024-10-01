// speech.js
export const getSpeech = (text, voiceName = "", pitch = 1, rate = 1) => {
    let voices = [];
  
    // 디바이스에 내장된 voice를 가져온다.
    const setVoiceList = () => {
      voices = window.speechSynthesis.getVoices();
    };
  
    setVoiceList();
  
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceList;
    }
  
    const speech = (txt) => {
      const utterThis = new SpeechSynthesisUtterance(txt);
  
      // 음 높이와 속도 설정
      utterThis.pitch = pitch; // 음 높이 설정
      utterThis.rate = rate;   // 속도 설정
  
      // 선택한 목소리 이름이 있다면 해당 목소리 설정
      const selectedVoice = voices.find((voice) => voice.name === voiceName);
  
      // 지정한 목소리가 있다면 적용, 없으면 경고 메시지 출력
      if (selectedVoice) {
        utterThis.voice = selectedVoice;
      } else {
        console.warn("해당 목소리를 찾을 수 없습니다. 기본 목소리를 사용합니다.");
      }
  
      // utterance를 재생(speak)한다.
      window.speechSynthesis.speak(utterThis);
    };
  
    speech(text);
  };
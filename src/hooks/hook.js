import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechToText = () => {
  const { resetTranscript, transcript, listening } = useSpeechRecognition();

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) {
      console.error("TTS를 지원하지 않는 브라우저입니다.");
      return;
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 1.2;
    utterance.pitch = 0.7;
  
    // 약간의 지연 추가
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100); // 100ms 딜레이
  };

  return { transcript, listening, toggleListening, resetTranscript, speakText };
};

export default useSpeechToText;
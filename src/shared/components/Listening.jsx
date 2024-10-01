import React from 'react';
import './Listening.css';
import voice from '../../assets/image/voice.svg'
import styled from 'styled-components';
import useSpeechToText from '../../hooks/hook';

function Listening({ chattings, setChattings }) {
    const { transcript, listening, toggleListening, resetTranscript } = useSpeechToText()
    
    return (
        <>
        <Transcript>{listening ? transcript : '마우스를 올린 후 얘기해 보세요.'}</Transcript>
        <MainLayout>
            

            <button
                className="button"
                onMouseEnter={() => {
                    resetTranscript();
                    toggleListening();

                }}
                onMouseLeave={() => {
                    toggleListening();
                    if (transcript !== '') {
                        setChattings([...chattings, transcript]);
                    }
                }}
            >
                <img src={voice} alt="Voice Icon" className="svgIcon" />
            </button>
        </MainLayout>
        </>
    );
};

export default Listening;

const MainLayout = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

const Transcript = styled.div`
position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 30px;
  color: white;
  z-index: 3;
`
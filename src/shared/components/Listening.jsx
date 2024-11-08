import React from 'react';
import './Listening.css';
import voice from '../../assets/image/voice.svg';
import styled from 'styled-components';
import useSpeechToText from '../../hooks/hook';
import axios from 'axios';
import { baseUrl } from './base/base';

function Listening({ chattings, setChattings }) {
    const { transcript, listening, toggleListening, resetTranscript } = useSpeechToText();

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
                            // 사용자 채팅 내용에 현재 날짜 추가
                            setChattings([...chattings, { type: 'user', chat: transcript, date: new Date().toLocaleTimeString() }]);

                            const data = {
                                "chatContent": transcript
                            };
                            const token = localStorage.getItem('token');
                            
                            axios.post(`/api/chat/send`, data, {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then(response => {
                                console.log('AI Response:', response.data);

                                // let date = response.data.data.createdAt.split(" ")[1]
                                
                                setChattings(prevChattings => [
                                    ...prevChattings,
                                    { type: 'ai', chat: response.data.data.chatContent, date: response.data.data.createdAt }
                                ]);
                            })
                            .catch(error => {
                                console.error('Error creating user:', error);
                            });
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
`;

const Transcript = styled.div`
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 30px;
  color: white;
  z-index: 11;
`;
import React, { useState } from "react"
import { useEffect } from "react";
import styled from "styled-components"
import axios from "axios";

function Summary (){

    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token_tmp = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTEiLCJ1c2VySWQiOiIxMTEiLCJyb2xlcyI6WyJST0xFX0RPQ1RPUiJdLCJpYXQiOjE3MzIwNzk0MDIsImV4cCI6MTczMjE2NTgwMn0.h0Nad2_6qoFTC2tt6dLZt5T_iN5-ZDND3ac8r8IGXcs'

            const response = await axios.get('/api/summary/patientSummary/6', {
              headers: {
                'Authorization': `Bearer ${token_tmp}`,
                'Content-Type': 'application/json'
              }
            });
            console.log('Data received:', response.data.data);
            setContent(response.data.data.summaryContent);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [])

    return(
        <MainLayout>
            <SubLayout>
                <TitleWrap>
                    <Title>AI 요약 보고서</Title>
                </TitleWrap>
                
                <ContentWrap>
                {content}
                </ContentWrap>
            </SubLayout>
        </MainLayout>
    )
}

export default Summary;

const MainLayout = styled.div`
width: 100%;
padding: 20px 30px;
border-radius: 16px;
background-color: #D7E3FF;
// margin-top: 70px;
box-sizing: border-box;
`

const SubLayout = styled.div`
width: 100%;
background-color: white;
border-radius: 16px;
padding: 30px 40px;
box-sizing: border-box;
`

const TitleWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
box-sizing: border-box;
`

const Title = styled.div`
font-size: 36px;
font-weight: 600;
`

const ContentWrap = styled.div`
width: 100%;
font-size: 18px;
border: 2px solid #6572D2;
padding: 30px 40px;
border-radius: 16px;
line-height: 1.8;
box-sizing: border-box;
`
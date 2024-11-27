import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

// 커스텀 툴팁 컴포넌트
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { 위험도, 설명 } = payload[0].payload;
        return (
            <TooltipContainer>
                <p style={{ margin: '-5px' }}>{`일자: ${label}`}</p>
                <p style={{ margin: '-5px' }}>{`위험도: ${위험도}`}</p>
                <p style={{ margin: '-5px' }}>{`설명: ${설명}`}</p>
            </TooltipContainer>
        );
    }
    return null;
};

export default function Chart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchRiskLevelData = async () => {
            try {
                const patientId = localStorage.getItem('patientId');
                const token = localStorage.getItem('doctorToken');

                const response = await axios.get(`/api/patient/${patientId}/riskLevels`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if (response.status !== 200) {
                    console.error(`API 호출 실패: ${response.status} ${response.statusText}`);
                    return;
                }

                const result = response.data;

                if (result?.data) {
                    const formattedData = result.data.map((item) => ({
                        name: item.createdAt, // 날짜
                        위험도: item.riskLevel, // 위험도
                        설명: item.description, // 설명
                    }));
                    setChartData(formattedData);
                } else {
                    console.error("유효하지 않은 데이터 형식:", result);
                }
            } catch (error) {
                if (error.response) {
                    console.error(`서버 응답 오류: ${error.response.status} ${error.response.statusText}`);
                } else if (error.request) {
                    console.error('요청이 서버에 도달하지 못했습니다.', error.request);
                } else {
                    console.error('요청 설정 중 오류:', error.message);
                }
            }
            
        };

        // 데이터 가져오기
        fetchRiskLevelData();
    }, []);

    return (
        <MainLayout>
            <TitleWrap>
                <Title>위험도 그래프</Title>
            </TitleWrap>
            <LineChart width={800} height={500} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 18, fontWeight: 'bold' }} />
                <YAxis tick={{ fontSize: 18, fontWeight: 'bold' }} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="위험도" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 5 }} />
            </LineChart>
        </MainLayout>
    );
}

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const TooltipContainer = styled.div`
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    box-sizing: border-box;
`;

const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
`;

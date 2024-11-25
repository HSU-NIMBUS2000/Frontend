import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: '', 위험도: 2, 우울감: 3, 분노: 2, 뭐시기: 1, 저시기: 4 },
    { name: '11/16', 위험도: 3, 우울감: 1, 분노: 1, 뭐시기: 2, 저시기: 3 },
    { name: '11/17', 위험도: 1, 우울감: 4, 분노: 3, 뭐시기: 1, 저시기: 2 },
    { name: '11/18', 위험도: 4, 우울감: 2, 분노: 1, 뭐시기: 5, 저시기: 3 },
    { name: '11/19', 위험도: 2, 우울감: 3, 분노: 4, 뭐시기: 2, 저시기: 5 },
    { name: '11/20', 위험도: 3, 우울감: 3, 분노: 4, 뭐시기: 2, 저시기: 5 },
    { name: '11/21', 위험도: 5, 우울감: 3, 분노: 4, 뭐시기: 2, 저시기: 5 },
    { name: '11/22', 위험도: 4, 우울감: 3, 분노: 4, 뭐시기: 2, 저시기: 5 },
    { name: '최근 대화', 위험도: 4, 우울감: 3, 분노: 4, 뭐시기: 2, 저시기: 5 },

];

// 커스텀 툴팁 컴포넌트
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { 우울감, 분노, 뭐시기, 저시기 } = payload[0].payload;
        return (
            <TooltipContainer>
                <p style={{margin: '-5px'}}>{`일자: ${label}`}</p>
                <p style={{margin: '-5px'}}>{`우울감: ${우울감}`}</p>
                <p style={{margin: '-5px'}}>{`분노: ${분노}`}</p>
                <p style={{margin: '-5px'}}>{`뭐시기: ${뭐시기}`}</p>
                <p style={{margin: '-5px'}}>{`저시기: ${저시기}`}</p>
            </TooltipContainer>
        );
    }
    return null;
};

export default function Chart() {
    return (
        <MainLayout>
            <TitleWrap>
                    <Title>위험도 그래프</Title>
                </TitleWrap>
            <LineChart width={800} height={500} data={data}>
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
`

const Title = styled.div`
font-size: 36px;
font-weight: 600;
`
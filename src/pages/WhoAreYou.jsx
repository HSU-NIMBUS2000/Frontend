import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function WhoAreYou() {
    return (
        <MainLayout>
            <DoctorCard to="/LoginForDoctor">
                <CardText>펴닝 - 의사 페이지</CardText>
            </DoctorCard>
            <PatientCard to="/ApplyForUser">
                <CardText>펴닝 - 환자 페이지</CardText>
            </PatientCard>
        </MainLayout>
    );
}

export default WhoAreYou;

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 화면 전체 너비 */
  height: 100vh; /* 화면 전체 높이 */
  //padding: 20px;
  gap: 30px; /* 두 카드 간 간격 */
`;

const Card = styled(Link)`
  flex: 1;
  max-width: 45%; /* 카드 최대 너비 */
  height: 85%; /* 화면의 80% 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; /* 둥근 모서리 */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
  transition: transform 0.3s, box-shadow 0.3s;
  color: #ffffff;
  text-decoration: none; /* 링크 밑줄 제거 */

  &:hover {
    transform: translateY(-10px); /* 마우스 호버 시 살짝 올라감 */
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강화 */
  }
`;

const DoctorCard = styled(Card)`
  background: linear-gradient(to bottom, #d7e3fe, #a9c8fc);
`;

const PatientCard = styled(Card)`
  background: linear-gradient(135deg, #FFDEAD, #FFD1DC, #E5CCDA);
`;

const CardText = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #FFFFFF; /* 글자 색상 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 글자 그림자 */
  text-align: center;
`;

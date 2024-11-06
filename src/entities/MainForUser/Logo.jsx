import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../assets/image/pyeoning.svg';

function Logo() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container>
            <MainLayout 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <Img src={logo} alt="logo" fetchpriority="high" />
            </MainLayout>
            <TextBackground isVisible={isHovered}>
                <Text>
                    의사명: 김의사
                    <br />
                    소속: 소속병원
                    <br />
                    mbti: intp
                </Text>
            </TextBackground>
        </Container>
    );
}

export default Logo;

const Container = styled.div`
  position: fixed;
  top: 14px;
  left: 14px;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const MainLayout = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid #E3E5E7;
  border-radius: 50%;
  background-color: transparent;
  object-fit: contain;
  padding: 0.5rem;
  margin-bottom: 0.4rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const TextBackground = styled.div`
  margin-left: 14px;
  display: flex;
  padding: 0.75rem 1rem;
  margin-top: 5px;
  background-color: rgba(10, 10, 10, 0.3); /* 더 어두운 반투명 배경 */
  backdrop-filter: blur(12px) saturate(150%); /* 유리 효과 강화 */
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* 더 강한 그림자 */
  transition: opacity 0.5s ease, transform 0.5s ease;

  /* isVisible 상태에 따라 애니메이션 적용 */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-20px)')};
`;

const Text = styled.div`
  font-size: 0.8rem;
  color: #fff;
  font-weight: bold;
  white-space: pre-line; /* 여러 줄 텍스트 지원 */
  text-align: left; /* 텍스트 가운데 정렬 */
  line-height: 1.5
`;
import React from "react";
import styled from "styled-components";
import logo from '../../assets/image/pyeoning.svg'

function Logo() {
    return (
        <MainLayout>
            <Img src={logo} alt="logo" fetchpriority="high" />
        </MainLayout>
    )
}

export default Logo;

const MainLayout = styled.div`
position: fixed;
top: 10px;
left: 10px;
z-index: 99;
width: 3rem;
height: 3rem;
border: 1px solid #E3E5E7;
border-radius: 50%;
background-color: transparent;
object-fit: contain;
padding: 0.5rem;
margin-bottom: 0.4rem;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* 그림자 */
  backdrop-filter: blur(20px); /* 배경 블러 효과 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 유리 테두리 */
`

const Img = styled.img`
width: 100%;
`
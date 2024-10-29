import React from "react";
import styled from "styled-components";
import logo from '../../../assets/image/pyeoning.svg'
function Logo() {
    return (
        <MainLayout>
            <Img src={logo} alt="logo" fetchpriority="high" />
        </MainLayout>
    )
}

export default Logo;

const MainLayout = styled.div`
display : flex;
justify-content : center;
align-items: center;
width: 130px;
height:120px;
margin-top:80px;
`

const Img = styled.img`
width: 100%;
`
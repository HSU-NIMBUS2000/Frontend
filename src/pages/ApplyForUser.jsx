import React from "react"
import styled from "styled-components"
import Input from "../entities/ApplyForUser/Input";
import Button from "../entities/ApplyForUser/Button";

function ApplyForUser() {
    return (
        <MainLayout>

            <Input />

            {/* <ButtonWrap>
            <Button />
            </ButtonWrap> */}
            

        </MainLayout>
    )
}

export default ApplyForUser;

const MainLayout = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const ButtonWrap = styled.div`
padding-top: 40px`
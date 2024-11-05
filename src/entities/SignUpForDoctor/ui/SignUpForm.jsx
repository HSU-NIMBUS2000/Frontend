import React from "react";
import styled from "styled-components";
import SignUpInputForm from "./SingUpInputForm";

function SignUpForm({isClicked}) {
  return (
    <MainLayout>
      <SignUpInputForm
        formInfo="성함을 알려주세요"
        placeholder="이름"
        type="name"
        isClicked={isClicked}
      />
      <SignUpInputForm
        formInfo="소속 병원을 알려주세요"
        placeholder="병원명"
        type="hospital"
        isClicked={isClicked}

      />
      <SignUpInputForm
        formInfo="의사면허 번호를 입력해주세요"
        placeholder="면허번호"
        type="doctorId"
        isExistBtn={true}
        warningSentence="이미 존재하는 번호입니다."
        isClicked={isClicked}

      />
      <SignUpInputForm
        formInfo="비밀번호를 입력해주세요"
        placeholder="비밀번호"
        type="password"
        warningSentence="비밀번호는 영문/숫자/특수기호를 조합하여 8자 이상 설정해야 합니다."
        isClicked={isClicked}
      />
    </MainLayout>
  );
}

export default SignUpForm;

const MainLayout = styled.div`
  width: 100%;
`;

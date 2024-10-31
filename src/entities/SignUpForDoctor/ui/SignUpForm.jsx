import React from "react";
import styled from "styled-components";
import StandardInputForm from "../../../shared/components/ForDoctor/StandardInputForm";

function SignUpForm() {
  return (
    <MainLayout>
      <StandardInputForm
        formInfo="성함을 알려주세요"
        placeholder="이름"
        type="text"
      />
      <StandardInputForm
        formInfo="소속 병원을 알려주세요"
        placeholder="병원명"
        type="text"
      />
      <StandardInputForm
        formInfo="의사면허 번호를 입력해주세요"
        placeholder="면허번호"
        type="text"
        isExistBtn={true}
        warningSentence="이미 존재하는 번호입니다."
      />
      <StandardInputForm
        formInfo="비밀번호를 입력해주세요"
        placeholder="비밀번호"
        type="password"
        warningSentence="비밀번호는 영문/숫자/특수기호를 조합하여 8자 이상 설정해야 합니다."
      />
    </MainLayout>
  );
}

export default SignUpForm;

const MainLayout = styled.div`
  width: 100%;
`;

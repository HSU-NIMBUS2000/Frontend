import React from "react";
import styled from "styled-components";
import StandardInputForm from "../../shared/components/ForDoctor/StandardInputForm";
import FlexibleInputForm from "../../shared/components/ForDoctor/FlexibleInputForm";
import GenderSelect from "./GenderSelect";

function PatientRegisterForm() {
  return (
    <MainLayout>
      {/* 이름 입력 폼 */}
      <StandardInputForm
        formInfo="환자 이름을 입력해주세요"
        placeholder="이름을 입력해주세요"
        type="text"
      />

      {/* 생년월일 입력 폼 */}
      <StandardInputForm
        formInfo="환자 생년월일을 입력해주세요"
        placeholder="생년월일을 입력해주세요"
        type="birth"
        warningSentence="생년월일은 YYYY.MM.DD와 같은 형식으로 입력해주세요"
      />

      {/* 성별 선택 폼 */}
      <GenderSelect/>

      {/* 병명 입력 폼 */}
      <StandardInputForm
        formInfo="환자 병명을 입력해주세요"
        placeholder="병명을 입력해주세요"
        type="text"
      />

      {/* 이메일 입력 폼 */}
      <StandardInputForm
        formInfo="환자 이메일 주소를 입력해주세요"
        placeholder="이메일 주소를 입력해주세요"
        type="email"
        warningSentence="유효하지 않은 이메일 형식입니다"
      />

      {/* 특이사항 입력 폼 */}
      <FlexibleInputForm
        formInfo="환자 특이사항을 입력해주세요"
        placeholder="특이사항을 입력해주세요"
        type="text"
        height={280}
      />

      {/* 프롬프트 입력 폼 */}
      <FlexibleInputForm
        formInfo="환자 맞춤형 프롬프트를 입력해주세요"
        placeholder="프롬프트를 입력해주세요"
        type="text"
        height={280}
      />

    </MainLayout>
  );
}

export default PatientRegisterForm;

const MainLayout = styled.div`
  width: 100%;
`;

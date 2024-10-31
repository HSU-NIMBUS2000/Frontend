import React from "react";
import styled from "styled-components";

function FlexibleInputForm({ formInfo, placeholder, type, height }) {
  const inputHeight = height ? `${height - 20}px` : "60px";

  return (
    <MainLayout>
      <FormInfo>{formInfo}</FormInfo>
      <InfoInputWrapper height={height}>
        <InfoInput type={type} placeholder={placeholder} height={inputHeight} />
      </InfoInputWrapper>
    </MainLayout>
  );
}

export default FlexibleInputForm;

const MainLayout = styled.div`
  margin-top: 40px;
`;

const FormInfo = styled.div`
  align-items: baseline;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const InfoInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 30px 20px 30px;
  border: 1px solid #6572d2;
  border-radius: 3em;
  height: ${({ height }) =>
    height || "80px"}; /* height를 props로 받거나 기본값 80px으로 */
`;

const InfoInput = styled.textarea`
  border: none;
  font-size: 15px;
  width: 100%;
  height: ${({ height }) => height};
  outline: none;
  resize: none;
  max-width: 100%; /* 최대 너비를 설정하여 줄바꿈이 발생할 수 있도록 */
  word-wrap: break-word; /* 단어 길 떄 줄바꿈 */
  overflow-wrap: break-word; /* 길게 이어진 텍스트 줄바꿈 */
`;

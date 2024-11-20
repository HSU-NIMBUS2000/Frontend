import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import styled, { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";
import PatientInfoForDoctor from "./PatientInfoForDoctor";
import ShowPatientChatForDoctor from "./ShowPatientChatForDoctor"; // 컴포넌트 가져오기
import PatientRegisterForDoctor from "./PatientRegisterForDoctor";

function PatientListForDoctor() {
  useEffect(() => {
    const iframe = document.querySelector("iframe");

    iframe.onload = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      // summary에 PatientInfoForDoctor 렌더링
      const summaryElement = iframeDocument.getElementById("summary");
      if (summaryElement) {
        const root = ReactDOM.createRoot(summaryElement);

        root.render(
          <StyleSheetManager target={iframeDocument.head}>
            <RecoilRoot>
              <PatientInfoForDoctor />
            </RecoilRoot>
          </StyleSheetManager>
        );
      }

      
      const chatElement = iframeDocument.getElementById("chat");
      if (chatElement) {
        const chatRoot = ReactDOM.createRoot(chatElement);

        chatRoot.render(
          <StyleSheetManager target={iframeDocument.head}>
            <RecoilRoot>
              <ShowPatientChatForDoctor />
            </RecoilRoot>
          </StyleSheetManager>
        );
      }

      const addElement = iframeDocument.getElementById("register");
      if (addElement) {
        const addRoot = ReactDOM.createRoot(addElement);

        addRoot.render(
          <StyleSheetManager target={iframeDocument.head}>
            <RecoilRoot>
              <PatientRegisterForDoctor />
            </RecoilRoot>
          </StyleSheetManager>
        );
      }
    };
  }, []);

  return (
    <MainLayout>
      <iframe src="/template/home.html" title="Embedded Content" />
    </MainLayout>
  );
}

export default PatientListForDoctor;

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
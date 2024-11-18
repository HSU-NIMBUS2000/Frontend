import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import PatientListIntro from "../shared/components/ForDoctor/StandardIntroWrapper";
import PatientCardList from "../entities/PatientListForDoctor/ui/PatientCardList";
import SearchBar from "../entities/PatientListForDoctor/ui/SearchBar";

function PatientListForDoctor() {

  useEffect(() => {
    // iframe이 로드되었을 때 실행
    const iframe = document.querySelector("iframe");

    // iframe이 존재하고, 콘텐츠가 로드되었을 때
    iframe.onload = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      // iframe 내부에서 React 컴포넌트를 렌더링하려면,
      // iframe의 body에 test 컴포넌트를 렌더링하는 코드 작성
      // const testElement = iframeDocument.getElementById("test");
      // if (testElement) {
      //   ReactDOM.createRoot(testElement).render(<Test />);
      // }
    };
  }, []);

  return (
    <MainLayout>
      {/* 의사 환자 목록 페이지 인트로 */}
      {/* <PatientListIntro text="환자 목록" /> */}

      {/* 의사 환자 목록 페이지 검색바 */}
      {/* <SearchBar /> */}

      {/* 의사 환자 목록 리스트 */}
      {/* <PatientCardList /> */}
      <iframe src="/template/home.html" title="Embedded Content" />
    </MainLayout>
  );
}

export default PatientListForDoctor;

// const MainLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 100px 280px 100px 280px;
//   gap: 30px;
// `;

const MainLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  padding: 100px 330px 100px 330px;
  gap: 30px;
`;

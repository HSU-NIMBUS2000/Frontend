import styled from "styled-components";

function MyChat({ date, chat }) {
  return (
    <MainLayout>
      <ChatWrap>
        <Date>
          <div>{date}</div>
        </Date>

        <GlassChat>{chat}</GlassChat>
      </ChatWrap>
    </MainLayout>
  );
}
export default MyChat;

const MainLayout = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: end;
`;

const ChatWrap = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: #FF6666;
  opacity: 0.5;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const GlassChat = styled.div`
  border-radius: 16px;
  padding: 0.8rem 1.6rem;
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  max-width: 26ch;
  overflow-wrap: break-word;
  
  /* 유리 효과 스타일 */
  background: rgba(255, 255, 255, 0.4); /* 투명도 적용 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* 그림자 */
  backdrop-filter: blur(20px); /* 배경 블러 효과 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 유리 테두리 */
  color: #FF6666; /* 텍스트 색상 */
`;
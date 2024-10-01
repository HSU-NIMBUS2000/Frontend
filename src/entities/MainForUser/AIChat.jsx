import styled from "styled-components";
import logo from '../../assets/image/pyeoning.svg'

function AIChat({ name, date, chat }) {
    return (
        <MainLayout>
            <ChatWrap>

                <ProfileWrap>
                    <ProfilePicWrap>
                        <Img src={logo} alt="logo" fetchpriority="high"/>
                    </ProfilePicWrap>

                    {/* <Name>{name}</Name> */}
                </ProfileWrap>

                <GlassChat>
                    <div>{chat}</div>
                </GlassChat>

                <Date>
                    <div>
                        {date}
                    </div>
                </Date>
            </ChatWrap>
        </MainLayout>
    )
}
export default AIChat;

const MainLayout = styled.div`
width: 100%;
padding: 1.2rem 2rem;
display: flex;
justify-content: start;
`

const ChatWrap = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
`

const Date = styled.div`
display: flex;
flex-direction: column;
justify-content:end;
color: #BABEC0;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

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
  color: #3182F6; /* 텍스트 색상 */
`;

const ProfileWrap = styled.div`

`
const ProfilePicWrap = styled.div`
width: 3rem;
height: 3rem;
border: 1px solid #E3E5E7;
border-radius: 50%;
background-color: white;
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

const Name = styled.div`
color: #262829;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
max-width: 5ch;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

`
import React from "react"
import styled from "styled-components"

function Summary (){
    return(
        <MainLayout>
            <SubLayout>
                <TitleWrap>
                    <Title>AI 요약 보고서</Title>
                </TitleWrap>
                
                <ContentWrap>
                해당 환자는 자신의 업무에서 실수를 했을 때 자책하는 경향이 강하였습니다. 특히, 완벽주의적인 성향으로 인해 작은 실수조차 큰 스트레스로 다가오며, 이를 계속해서 반추하며 스스로를 비판하는 모습을 보였습니다. 또한, 환자는 사회적 상황에서도 자신이 타인에게 어떻게 보일지에 대한 불안감이 커, 대인관계를 피하게 되고, 그 결과 혼자만의 시간을 보내는 경우가 많아지고 있었습니다. 이로 인해 외로움과 사회적 고립감이 심해지는 경향이 관찰되었습니다. 환자는 수면 문제도 겪고 있었습니다. 업무에서의 스트레스와 불안으로 인해 밤에 잠을 이루지 못하거나 자주 깨는 수면 패턴이 반복되고 있었습니다. 특히 중요한 업무나 실수가 있었던 날은 불안이 극대화되어 수면의 질이 더 낮아지는 경향이 있었습니다. 이로 인해 피로감이 누적되고, 이는 일상생활과 정서적인 안정을 방해하는 요인으로 작용하고 있었습니다. 환자는 이러한 수면 문제를 해결하고자 하는 의지를 표현하였으나, 구체적인 방법을 찾지 못하고 있는 상태였습니다. 해당 환자에게는 자신을 지나치게 비판하는 경향을 줄이기 위해, 작은 성취에도 긍정적인 피드백을 줄 것을 권장하였습니다. 상담 중에는 스스로에게 “충분히 잘해냈다”라고 말하는 연습을 하도록 제안하였고, 환자도 이를 시도해보겠다는 긍정적인 반응을 보였습니다. 사회적 불안에 대해서는 큰 모임을 피하되, 가까운 친구와의 소규모 만남부터 천천히 재개하는 방법을 제안하였습니다. 또한, 수면 문제를 해결하기 위해 잠들기 전 5분 정도 간단한 명상이나 호흡법을 시도해보도록 권유하였습니다. 환자는 이러한 권장 사항들을 긍정적으로 받아들였으며, 이를 실천해보겠다고 하였습니다.
                </ContentWrap>
            </SubLayout>
        </MainLayout>
    )
}

export default Summary;

const MainLayout = styled.div`
width: 1000px;
padding: 20px 30px;
border-radius: 16px;
background-color: #D7E3FF;
margin-top: 70px;
box-sizing: border-box;
`

const SubLayout = styled.div`
width: 100%;
background-color: white;
border-radius: 16px;
padding: 30px 40px;
box-sizing: border-box;
`

const TitleWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
box-sizing: border-box;
`

const Title = styled.div`
font-size: 36px;
font-weight: 600;
`

const ContentWrap = styled.div`
width: 100%;
font-size: 18px;
border: 2px solid #6572D2;
padding: 30px 40px;
border-radius: 16px;
line-height: 1.8;
box-sizing: border-box;
`
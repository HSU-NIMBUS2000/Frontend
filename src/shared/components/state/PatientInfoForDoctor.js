import { atom } from 'recoil';

export const nameState = atom({
    key: 'nameState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '김환자', // 초기 상태 값
});

export const birthState = atom({
    key: 'birthState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '2000.06.13(22세)', // 초기 상태 값
});

export const diseaseState = atom({
    key: 'diseaseState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '우울장애, 불안장애', // 초기 상태 값
});

export const promptState = atom({
    key: 'promtState_PatientInfoForDoctor', 
    default: '자존감이 낮아져 있는 상태이므로, 주변에서 긍정적인 피드백을 받을 때 조금 더 자신감을 얻을 수 있음. 그래서 환자가 노력한 부분이나 잘해낸 일에 대해 칭찬과 인정을 해주는 것이 중요함. 혼자 있는 시간이 에, 사회적 관계를 유지하고 서 확장해나가는 것이 필요함. 큰 모임이나 낯선 사람들과의 만남은 부담스러울 수 있으니, 가까운 친구나 가족과의 시간을 더 많이 가질 수 있도록 독려하는 것이 좋음. 불안해하는 상황에 너무 자주 직면하게 되면 오히려 증상이 악화될 수 있음. 그래서 불안감을 유발하는 상황을 서서히 노출하는 방식으로 접근해야 함. 직장에서나 일상생활에서 무리하게 그를 몰아붙이기보다 차분한 환경에서 그의 속도에 맞게 일하도록 유도하는 것이 중요함.'
});

export const remarkState = atom({
    key: 'remarkState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '우울증과 불안 때문에 친구들과의 모임이나 직장 회식에 참석하는 것이 매우 부담스러움. 그는 모임에서 자신의 행동이 비판받을까 걱정하며, 사회적 상황에서 불편함을 느껴 불안 증상이 심해짐. 이런 상황을 회피하는 경향이 강하며, 그로 인해 사회적 고립이 더욱 심화되고 있음. 수면 장애를 겪고 있음. 이로 인해 피로감이 심하고, 일상생활에서 에너지가 부족함.업무에서 작은 실수도 용납할 수 없다고 느껴 스트레스를 많이 받음. 이로 인해 일이 지연되기도 하고, 시간이지날수록 불안과 우울감이 더 심해짐.'
});
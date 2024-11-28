import { atom } from 'recoil';

export const nameState = atom({
    key: 'nameState_PatientRegsiterForDoctor', // 고유한 키를 설정해야 함
    default: '최환자', // 초기 상태 값
});

export const emailState = atom({
    key: 'emailState_PatientRegsiterForDoctor', // 고유한 키를 설정해야 함
    default: 'lucy011121@naver.com', // 초기 상태 값
});

export const genderState = atom({
    key: 'genderState_PatientRegisterForDoctor',
    default:'FEMALE',
})

export const birthState = atom({
    key: 'birthState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '2000.01.01', // 초기 상태 값
});

export const diseaseState = atom({
    key: 'diseaseState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '우울증, 대인기피증', // 초기 상태 값
});

export const promptState = atom({
    key: 'promtState_PatientRegisterForDoctor', 
    default: '환자와 대화 시 부드럽고 느린 말투를 사용해야 하며, 강압적이거나 판단적인 표현을 피해야함',
});

export const remarkState = atom({
    key: 'remarkState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '타인과의 직접 대화 시 극심한 불안감 및 땀 분비 증가를 호소함. 자신의 방에서 주로 시간을 보내며, 외출은 최소한으로 줄이는 경향이 있음.',
});
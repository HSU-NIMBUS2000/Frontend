import { atom } from 'recoil';

export const nameState = atom({
    key: 'nameState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '김환자', // 초기 상태 값
});

export const birthState = atom({
    key: 'birthState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: new Date(2000, 5, 13)
});

export const diseaseState = atom({
    key: 'diseaseState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다', 
});

export const remarkState = atom({
    key: 'remarkState_PatientInfoForDoctor', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다'
});

export const promptState = atom({
    key: 'promtState_PatientInfoForDoctor',
    default: '환자정보가 없습니다'
});
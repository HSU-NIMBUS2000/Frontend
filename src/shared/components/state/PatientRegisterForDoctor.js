import { atom } from 'recoil';

export const nameState = atom({
    key: 'nameState_PatientRegsiterForDoctor', // 고유한 키를 설정해야 함
    default: '', // 초기 상태 값
});

export const emailState = atom({
    key: 'emailState_PatientRegsiterForDoctor', // 고유한 키를 설정해야 함
    default: '', // 초기 상태 값
});

export const genderState = atom({
    key: 'genderState_PatientRegisterForDoctor',
    default:'',
})

export const birthState = atom({
    key: 'birthState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '', // 초기 상태 값
});

export const diseaseState = atom({
    key: 'diseaseState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '', // 초기 상태 값
});

export const promptState = atom({
    key: 'promtState_PatientRegisterForDoctor', 
    default: '',
});

export const remarkState = atom({
    key: 'remarkState_PatientRegisterForDoctor', // 고유한 키를 설정해야 함
    default: '',
});
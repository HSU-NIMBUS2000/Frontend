import { atom } from "recoil";

export const nameState = atom({
    key: 'nameState_SignUpForDoctor', // 고유한 키를 설정해야 함
    default: '김의사', // 초기 상태 값
});

export const doctorIdState = atom({
    key: 'doctorIdState_SignUpForDoctor',
    default: "12345",
});

export const hospitalState = atom({
    key: 'hospitalState_SignUpForDoctor',
    default: "펴닝병원",
});

export const emailState = atom({
    key: 'emailState_SignUpForDoctor',
    default: "doctor@p.com",
});

export const passwordState = atom({
    key: 'passwordState_SignUpForDoctor',
    default: "pyeoning123!",
});
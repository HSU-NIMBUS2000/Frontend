import { atom } from "recoil";

export const nameState = atom({
    key: 'nameState_SignUpForDoctor', // 고유한 키를 설정해야 함
    default: "", // 초기 상태 값
});

export const doctorIdState = atom({
    key: 'doctorIdState_SignUpForDoctor',
    default: "",
});

export const hospitalState = atom({
    key: 'hospitalState_SignUpForDoctor',
    default: "",
});

export const phoneState = atom({
    key: 'phoneState_SignUpForDoctor',
    default: "",
});

export const passwordState = atom({
    key: 'passwordState_SignUpForDoctor',
    default: "",
});
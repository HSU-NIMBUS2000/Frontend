import { atom } from 'recoil';

export const doctorIdState = atom({
    key: 'doctorIdState_LoginForDoctor',
    default: "12345",
});

export const passwordState = atom({
    key: 'passwordState_LoginForDoctor',
    default: "pyeoning123!",
});
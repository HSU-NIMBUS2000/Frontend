import { atom } from 'recoil';

export const nameState = atom({
    key: 'nameState', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다', // 초기 상태 값
});

export const birthState = atom({
    key: 'birthState', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다', // 초기 상태 값
});

export const diseaseState = atom({
    key: 'diseaseState', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다', // 초기 상태 값
});

export const promptState = atom({
    key: 'promtState', 
    default: '환자정보가 없습니다'
});

export const remarkState = atom({
    key: 'remarkState', // 고유한 키를 설정해야 함
    default: '환자정보가 없습니다'
});
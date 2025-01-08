import { atom } from 'recoil';

export const userIdState = atom({
    key: 'userId', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});
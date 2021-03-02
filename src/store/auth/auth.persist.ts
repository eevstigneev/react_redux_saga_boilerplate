import {getToken, setToken} from '../../utils/storage/storage.token';
import {getUserData, setUserData} from '../../utils/storage/storage.user';
import {STORE_NAME, initialState} from './auth.slice';
import type {RootState} from '../store';
import type {Token, UserData} from './auth.types';

// initial state from localStorage
export const authState = {
  [STORE_NAME]: {
    ...initialState,
    token: getToken<Token>(),
    ...getUserData<UserData>(),
  },
};
// rehydrate state to Redux store
export const saveAuthState = (state: RootState): void => {
  const {token, username, roles} = state[STORE_NAME];
  setToken(token);
  setUserData({username, roles});
};

import {getToken, setToken} from 'src/utils/storage/storage.token';
import {getUserData, setUserData} from 'src/utils/storage/storage.user';
import {authReducer, initialState} from './auth.reducer';
import type {RootState} from '../store';
import type {Token, UserData} from './auth.interfaces';

// initial state from localStorage
export const authState = {
  [authReducer.name]: {
    ...initialState,
    token: getToken<Token>(),
    ...getUserData<UserData>(),
  },
};
// rehydrate state to Redux store
export const saveAuthState = (state: RootState): void => {
  const {token, username, roles} = state[authReducer.name];
  setToken(token);
  setUserData({username, roles});
};

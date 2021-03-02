import {createAction, createSlice} from '@reduxjs/toolkit';
import type {InitialState, SingInPayload, SingInResponse} from './auth.types';
import {getActionHook, getPartOfStore} from 'src/hooks/react-redux';

export const STORE_NAME = 'auth';

export const initialState: InitialState = {
  username: '',
  token: null,
  roles: [],
  isFetching: false,
  error: null,
};

export const singInRequest = createAction<SingInPayload>('singInRequest');
export const singInSuccess = createAction<SingInResponse>('singInSuccess');
export const singInError = createAction<Error>('singInError');
export const logout = createAction<void>('logout');

type AuthStorePayload = SingInPayload | SingInResponse | Error | void;
export const useAuthStore = getPartOfStore(STORE_NAME);
export const useAuthAction = getActionHook<AuthStorePayload>();

export const authSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(singInRequest, state => ({...state, isFetching: !initialState.isFetching}));
    builder.addCase(singInSuccess, (state, {payload: {token, username, roles}}) => ({
      ...state,
      username,
      token,
      roles,
      isFetching: initialState.isFetching,
      error: initialState.error,
    }));
    builder.addCase(singInError, (state, {payload}) => ({
      ...state,
      error: payload,
      isFetching: initialState.isFetching,
    }));

    builder.addCase(logout, state => ({
      ...state,
      ...initialState,
    }));
  },
});

import {createReducer} from '@reduxjs/toolkit';
import {login, loginFailed, loginSuccess, STORE_NAME} from './auth.actions';
import type {InitialState} from './auth.interfaces';

export const initialState: InitialState = {
  id: null,
  username: '',
  token: null,
  roles: [],
  isFetching: false,
  error: null,
};

const reducer = createReducer(initialState, builder => {
  /** login pending */
  builder.addCase(login, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** login success */
  builder.addCase(loginSuccess, (state, action) => {
    const {token, username, roles} = action.payload;
    return {
      ...state,
      username,
      token,
      roles,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** login error */
  builder.addCase(loginFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
});

export const authReducer = {
  name: STORE_NAME,
  reducer,
};

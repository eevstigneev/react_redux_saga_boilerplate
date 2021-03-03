import {PayloadAction} from '@reduxjs/toolkit';
import {call, fork, put, takeLatest} from 'typed-redux-saga';
import {LoginDTO} from './auth.interfaces';
import api from './auth.api';
import {login, loginFailed, loginSuccess, logout} from './auth.actions';

function* onLogin({payload}: PayloadAction<LoginDTO.Request>) {
  try {
    const res = yield* call(api.login, payload);
    yield put(loginSuccess(res));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

function* loginListener() {
  yield* takeLatest(login.toString(), onLogin);
}

function* onLogout() {
  yield* call(api.logout);
}

function* logoutListener() {
  yield* takeLatest(logout.toString(), onLogout);
}

export default [fork(loginListener), fork(logoutListener)];

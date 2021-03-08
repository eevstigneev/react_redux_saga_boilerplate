import {PayloadAction} from '@reduxjs/toolkit';
import {fork, put, takeLatest} from 'typed-redux-saga';
import {MemberDTO} from './member.interfaces';
// import api from './member.api';
import {fetch, fetchSuccess, fetchFailed} from './member.actions';

function* onFetch(_action: PayloadAction<MemberDTO.FetchRequest>) {
  try {
    const res: MemberDTO.FetchResponse = yield [
      {id: 'id1', firstName: 'firstName', lastName: 'lastName', middleName: 'middleName', phone: 'phone'},
    ];
    yield put(fetchSuccess(res));
  } catch (e) {
    yield put(fetchFailed(e));
  }
}

function* fetchListener() {
  yield* takeLatest(fetch.toString(), onFetch);
}

export default [fork(fetchListener)];

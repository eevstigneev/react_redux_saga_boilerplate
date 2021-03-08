import {all} from 'redux-saga/effects';

import authSagas from './auth/auth.sagas';
import memberSagas from './member/member.sagas';

export function* rootSaga(): Generator {
  yield all([...authSagas, ...memberSagas]);
}

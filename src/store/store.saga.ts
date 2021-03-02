import {all} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga(): SagaIterator {
  yield all([]);
}

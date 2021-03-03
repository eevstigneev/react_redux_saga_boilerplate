import {notification} from 'antd';
import {SagaIterator} from 'redux-saga';
import {call, put, StrictEffect} from 'redux-saga/effects';
import {logout} from 'src/store/auth/auth.actions';

type Saga<Props> = (props: Props) => SagaIterator | StrictEffect;

export function onException<Props>(saga: Saga<Props>) {
  return function* exceptionChecker(props: Props): SagaIterator | StrictEffect {
    try {
      yield saga(props);
    } catch (e) {
      const status = Number(e.status);
      if (status) {
        if ([401, 403].includes(status)) {
          yield put(logout());
          return;
        }
        yield call(notification.error, {
          message: 'Ошибка сервера',
          description: e.message,
        });
        return;
      }
      yield call(notification.error, {
        message: 'Ошибка',
        description: e.message,
      });
    }
  };
}

import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';

import {authReducer} from './auth/auth.reducer';
import {memberReducer} from './member/member.reducer';

const combinedReducer = combineReducers({
  [memberReducer.name]: memberReducer.reducer,
  [authReducer.name]: authReducer.reducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'logout') {
    return combinedReducer({} as RootState, action);
  }
  return combinedReducer(state, action);
};

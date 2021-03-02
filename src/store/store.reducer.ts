import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from './auth/auth.slice';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

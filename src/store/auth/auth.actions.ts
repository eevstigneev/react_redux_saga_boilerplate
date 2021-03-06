import {createAction} from '@reduxjs/toolkit';
import {getActionHook, getPartOfStore} from 'src/hooks/react-redux';
import {FetchStatus} from 'src/types';
import {LoginDTO, LogoutDTO} from './auth.interfaces';

// type AuthPayload = LoginDTO.Request | LoginDTO.Response | Error | LogoutDTO.Request;
type AuthActions = ReturnType<typeof logout | typeof login | typeof loginSuccess | typeof loginFailed>;

export const STORE_NAME = 'auth' as const;

export const useAuthStore = getPartOfStore(STORE_NAME);
export const useAuthAction = getActionHook<AuthActions>();

/** Actions * */
const LOGIN_TYPE = 'login';
const LOGIN = `${STORE_NAME}/${LOGIN_TYPE}/${FetchStatus.pending}` as const;
export const login = createAction<LoginDTO.Request, typeof LOGIN>(LOGIN);

const LOGIN_SUCCESS = `${STORE_NAME}/${LOGIN_TYPE}/${FetchStatus.succeeded}` as const;
export const loginSuccess = createAction<LoginDTO.Response, typeof LOGIN_SUCCESS>(LOGIN_SUCCESS);

const LOGIN_FAILED = `${STORE_NAME}/${LOGIN_TYPE}/${FetchStatus.failed}` as const;
export const loginFailed = createAction<Error, typeof LOGIN_FAILED>(LOGIN_FAILED);

export const LOGOUT = `logout` as const;
export const logout = createAction<LogoutDTO.Request, typeof LOGOUT>(LOGOUT);

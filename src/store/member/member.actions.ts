import {createAction} from '@reduxjs/toolkit';
import {getActionHook, getPartOfStore} from 'src/hooks/react-redux';
import {FetchStatus} from 'src/types';
import {MemberDTO} from './member.interfaces';

type MemberActions = ReturnType<
  | typeof fetch
  | typeof fetchSuccess
  | typeof fetchFailed
  | typeof fetchOne
  | typeof fetchOneSuccess
  | typeof fetchFailed
  | typeof addOne
  | typeof addOneSuccess
  | typeof addOneFailed
  | typeof removeOne
  | typeof removeOneSuccess
  | typeof removeOneFailed
  | typeof updateOne
  | typeof updateOneSuccess
  | typeof updateOneFailed
>;

export const STORE_NAME = 'member' as const;
export const useMemberStore = getPartOfStore(STORE_NAME);
export const useMemberAction = getActionHook<MemberActions>();

/**
 *  Fetch member list
 */
const FETCH_TYPE = 'fetch';
const FETCH = `${STORE_NAME}/${FETCH_TYPE}/${FetchStatus.pending}` as const;
export const fetch = createAction<MemberDTO.FetchRequest, typeof FETCH>(FETCH);

const FETCH_SUCCESS = `${STORE_NAME}/${FETCH_TYPE}/${FetchStatus.succeeded}` as const;
export const fetchSuccess = createAction<MemberDTO.FetchResponse, typeof FETCH_SUCCESS>(FETCH_SUCCESS);

const FETCH_FAILED = `${STORE_NAME}/${FETCH_TYPE}/${FetchStatus.failed}` as const;
export const fetchFailed = createAction<Error, typeof FETCH_FAILED>(FETCH_FAILED);

/**
 *  Fetch one member
 */
const FETCH_ONE_TYPE = 'fetchOne';
const FETCH_ONE = `${STORE_NAME}/${FETCH_ONE_TYPE}/${FetchStatus.pending}` as const;
export const fetchOne = createAction<MemberDTO.FetchOneRequest, typeof FETCH_ONE>(FETCH_ONE);

const FETCH_ONE_SUCCESS = `${STORE_NAME}/${FETCH_ONE_TYPE}/${FetchStatus.succeeded}` as const;
export const fetchOneSuccess = createAction<MemberDTO.FetchOneResponse, typeof FETCH_ONE_SUCCESS>(FETCH_ONE_SUCCESS);

const FETCH_ONE_FAILED = `${STORE_NAME}/${FETCH_ONE_TYPE}/${FetchStatus.failed}` as const;
export const fetchOneFailed = createAction<Error, typeof FETCH_ONE_FAILED>(FETCH_ONE_FAILED);

/**
 *  add one member
 */
const ADD_ONE_TYPE = 'addOne';
const ADD_ONE = `${STORE_NAME}/${ADD_ONE_TYPE}/${FetchStatus.pending}` as const;
export const addOne = createAction<MemberDTO.CreateRequest, typeof ADD_ONE>(ADD_ONE);

const ADD_ONE_SUCCESS = `${STORE_NAME}/${ADD_ONE_TYPE}/${FetchStatus.succeeded}` as const;
export const addOneSuccess = createAction<MemberDTO.CreateResponse, typeof ADD_ONE_SUCCESS>(ADD_ONE_SUCCESS);

const ADD_ONE_FAILED = `${STORE_NAME}/${ADD_ONE_TYPE}/${FetchStatus.failed}` as const;
export const addOneFailed = createAction<Error, typeof ADD_ONE_FAILED>(ADD_ONE_FAILED);

/**
 *  remove one member
 */
const REMOVE_ONE_TYPE = 'removeOne';
const REMOVE_ONE = `${STORE_NAME}/${REMOVE_ONE_TYPE}/${FetchStatus.pending}` as const;
export const removeOne = createAction<MemberDTO.DeleteRequest, typeof REMOVE_ONE>(REMOVE_ONE);

const REMOVE_ONE_SUCCESS = `${STORE_NAME}/${REMOVE_ONE_TYPE}/${FetchStatus.succeeded}` as const;
export const removeOneSuccess = createAction<MemberDTO.DeleteResponse, typeof REMOVE_ONE_SUCCESS>(REMOVE_ONE_SUCCESS);

const REMOVE_ONE_FAILED = `${STORE_NAME}/${REMOVE_ONE_TYPE}/${FetchStatus.failed}` as const;
export const removeOneFailed = createAction<Error, typeof REMOVE_ONE_FAILED>(REMOVE_ONE_FAILED);

/**
 *  update one member
 */
const UPDATE_ONE_TYPE = 'updateOne';
const UPDATE_ONE = `${STORE_NAME}/${UPDATE_ONE_TYPE}/${FetchStatus.pending}` as const;
export const updateOne = createAction<MemberDTO.UpdateRequest, typeof UPDATE_ONE>(UPDATE_ONE);

const UPDATE_ONE_SUCCESS = `${STORE_NAME}/${UPDATE_ONE_TYPE}/${FetchStatus.succeeded}` as const;
export const updateOneSuccess = createAction<MemberDTO.UpdateResponse, typeof UPDATE_ONE_SUCCESS>(UPDATE_ONE_SUCCESS);

const UPDATE_ONE_FAILED = `${STORE_NAME}/${UPDATE_ONE_TYPE}/${FetchStatus.failed}` as const;
export const updateOneFailed = createAction<Error, typeof UPDATE_ONE_FAILED>(UPDATE_ONE_FAILED);

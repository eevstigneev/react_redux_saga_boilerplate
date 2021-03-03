import {createReducer} from '@reduxjs/toolkit';
import type {InitialState} from './member.interfaces';
import {
  addOne,
  addOneFailed,
  addOneSuccess,
  fetch,
  fetchFailed,
  fetchOne,
  fetchOneFailed,
  fetchOneSuccess,
  fetchSuccess,
  removeOne,
  removeOneFailed,
  removeOneSuccess,
  updateOne,
  updateOneFailed,
  updateOneSuccess,
  STORE_NAME,
} from './member.actions';

export const initialState: InitialState = {
  isFetching: false,
  error: null,
  list: [],
  item: null,
};

const reducer = createReducer(initialState, builder => {
  /** list pending */
  builder.addCase(fetch, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** list success */
  builder.addCase(fetchSuccess, (state, action) => {
    return {
      ...state,
      list: action.payload,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** list error */
  builder.addCase(fetchFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
  /** one pending */
  builder.addCase(fetchOne, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** one success */
  builder.addCase(fetchOneSuccess, (state, action) => {
    return {
      ...state,
      item: action.payload,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** one error */
  builder.addCase(fetchOneFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
  /** add one pending */
  builder.addCase(addOne, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** add one success */
  builder.addCase(addOneSuccess, (state, action) => {
    return {
      ...state,
      item: action.payload,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** add one error */
  builder.addCase(addOneFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
  /** remove one pending */
  builder.addCase(removeOne, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** remove one success */
  builder.addCase(removeOneSuccess, state => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** remove one error */
  builder.addCase(removeOneFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
  /** update one pending */
  builder.addCase(updateOne, state => ({
    ...state,
    isFetching: !initialState.isFetching,
  }));
  /** update one success */
  builder.addCase(updateOneSuccess, (state, action) => {
    return {
      ...state,
      item: action.payload,
      isFetching: initialState.isFetching,
      error: initialState.error,
    };
  });
  /** update one error */
  builder.addCase(updateOneFailed, (state, action) => {
    return {
      ...state,
      isFetching: initialState.isFetching,
      error: action.payload,
    };
  });
});

export const memberReducer = {
  name: STORE_NAME,
  reducer,
};

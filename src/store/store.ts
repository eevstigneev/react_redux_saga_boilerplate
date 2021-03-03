import createSagaMiddleware from 'redux-saga';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {saveStateToStorage, preloadedState} from './store.persist';
import {rootReducer} from './store.reducer';
import {rootSaga} from './store.saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

export type {RootState} from './store.reducer';
export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer,
  preloadedState /** load state from storage */,
  middleware,
});

/** save state to storage */
store.subscribe(saveStateToStorage(store.getState));

sagaMiddleware.run(rootSaga);

import {authState, saveAuthState} from './auth/auth.persist';
import type {RootState} from './store';

export const preloadedState = {
  ...authState,
};

export const saveStateToStorage = (getState: () => RootState) => (): void => {
  const state = getState();
  saveAuthState(state);
};

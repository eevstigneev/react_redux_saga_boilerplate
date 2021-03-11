import moment from 'moment';
import {EAppStoreNames, getFromStorage, removeFromStorage, setToStorage} from './storage';

export const TOKEN_KEY = 'token';

const getTokenExpirationDate = (expires: string | number): Date => {
  return !expires ? new Date(0) : new Date(expires);
};

export const isExpiredToken = <Token>(encodedToken: Token, expiresKey = 'expires'): boolean => {
  if (!encodedToken || !(expiresKey in encodedToken)) {
    return false;
  }
  const rightNow = new Date();
  const expirationDate = getTokenExpirationDate(encodedToken[expiresKey]);
  return moment(rightNow).isAfter(expirationDate);
};

export const clearToken = (storage = EAppStoreNames.local, storeKey = TOKEN_KEY): boolean => {
  return removeFromStorage(storage, storeKey);
};

export const getToken = <Token>(
  storage: EAppStoreNames = EAppStoreNames.local,
  storeKey: string = TOKEN_KEY,
): Token | null => {
  const raw = getFromStorage(storage, storeKey);
  return !raw ? null : JSON.parse(raw);
};

export const setToken = <Token>(
  value: Token,
  storage: EAppStoreNames = EAppStoreNames.local,
  storeKey: string = TOKEN_KEY,
): boolean => {
  if (!value) {
    return clearToken();
  }
  const token = JSON.stringify(value);
  return setToStorage(storage, storeKey, token);
};

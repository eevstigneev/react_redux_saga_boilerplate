import {Token} from 'src/store/auth/auth.interfaces';
import {setToken, getToken, clearToken, isExpiredToken, TOKEN_KEY} from './storage.token';

beforeAll(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

describe('Token', () => {
  const key = 'Secret Token';
  const actualToken: Token = {expires: new Date(2035, 1, 1).getTime(), key};
  const expiredToken: Token = {expires: new Date(2021, 1, 1).getTime(), key};
  test('should save token', () => {
    const isTokenSets = setToken<Token>(actualToken);
    expect(isTokenSets).toBe(true);
    expect(localStorage.getItem(TOKEN_KEY)).toStrictEqual(JSON.stringify(actualToken));
  });
  test('should have saved token', () => {
    expect(getToken()).toStrictEqual(actualToken);
  });
  test('should have actual token', () => {
    expect(isExpiredToken(actualToken)).toBe(false);
  });
  test('should have expired token', () => {
    expect(isExpiredToken(expiredToken)).toBe(true);
  });
  test('should expires token if expiration date is not defined', () => {
    expect(isExpiredToken({key})).toBe(true);
  });
  test('should expires token if expiration date is empty', () => {
    expect(isExpiredToken({key, expires: ''})).toBe(true);
  });
  test('should clear token if value null or undefined', () => {
    const prevToken = localStorage.getItem(TOKEN_KEY);
    expect(setToken(null)).toBe(true);
    expect(localStorage.getItem(TOKEN_KEY)).not.toStrictEqual(JSON.stringify(prevToken));
  });
  test('should clear token', () => {
    setToken<Token>(expiredToken);
    expect(clearToken()).toBe(true);
    expect(getToken()).not.toBe(expiredToken);
  });
});

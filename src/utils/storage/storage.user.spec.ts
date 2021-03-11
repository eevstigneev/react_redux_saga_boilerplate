import {UserData} from 'src/store/auth/auth.interfaces';
import {setUserData, getUserData, USER_KEY} from './storage.user';

const userData: UserData = {username: 'Bob', roles: ['member']};

beforeAll(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

describe('User data in storage', () => {
  test('should save user data', () => {
    expect(setUserData<UserData>(userData)).toBe(true);
    expect(localStorage.getItem(USER_KEY)).toStrictEqual(JSON.stringify(userData));
  });
  test('should not save user data', () => {
    expect(setUserData(null)).toBe(false);
  });
  test('should have saved user data', () => {
    expect(getUserData<UserData>()).toStrictEqual(userData);
  });
  test('should not have saved user data', () => {
    localStorage.setItem(USER_KEY, '');
    expect(getUserData<UserData>()).toStrictEqual(null);
  });
});

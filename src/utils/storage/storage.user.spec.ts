import {UserData} from 'src/store/auth/auth.interfaces';
import {setUserData, getUserData, USER_KEY} from './storage.user';

const userData: UserData = {username: 'Bob', roles: ['member']};

describe('UserData', () => {
  test('should save user data to storage', () => {
    expect(setUserData<UserData>(userData)).toBeTruthy();
    expect(localStorage.getItem(USER_KEY)).toStrictEqual(JSON.stringify(userData));
  });
  test('should not save user data to storage', () => {
    expect(setUserData(null)).toBeFalsy();
  });
  test('should have saved user data in storage', () => {
    expect(getUserData<UserData>()).toStrictEqual(userData);
  });
});

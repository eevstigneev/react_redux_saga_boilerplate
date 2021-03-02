import {EAppStoreNames, getFromStorage, setToStorage} from './storage';

const USER_KEY = 'userInfo';

export const setUserData = <Data>(
  value: Data,
  toStorage: EAppStoreNames = EAppStoreNames.local,
  storeKey: string = USER_KEY,
): boolean => {
  if (!value) {
    return false;
  }
  return setToStorage(toStorage, storeKey, JSON.stringify(value));
};

export const getUserData = <Data>(
  fromStorage: EAppStoreNames = EAppStoreNames.local,
  storeKey: string = USER_KEY,
): Data | null => {
  const result = getFromStorage(fromStorage, storeKey);
  return result ? JSON.parse(result) : null;
};

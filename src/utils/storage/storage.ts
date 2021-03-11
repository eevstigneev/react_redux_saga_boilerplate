export type StorageData = string | null;

export enum EAppStoreNames {
  local = 'localStorage',
  session = 'sessionStorage',
}

const APP_STORES_TYPES = [EAppStoreNames.local, EAppStoreNames.session];
export const isAppStoreTypeExist = (storeType: EAppStoreNames): boolean => APP_STORES_TYPES.includes(storeType);

export const getStorage = (storage: EAppStoreNames): Storage => {
  try {
    const store = window[storage];
    store.setItem('test', 'test');
    store.removeItem('test');
    return store;
  } catch (e) {
    throw Error(e);
  }
};

export const getFromStorage = (fromStorage: EAppStoreNames, key: string): StorageData => {
  if (!isAppStoreTypeExist(fromStorage)) return null;
  try {
    return getStorage(fromStorage).getItem(key) || null;
  } catch (e) {
    return null;
  }
};

export const setToStorage = (toStorage: EAppStoreNames, key: string, value: string): boolean => {
  if (!isAppStoreTypeExist(toStorage)) return false;
  try {
    getStorage(toStorage).setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
};

export const removeFromStorage = (fromStorage: EAppStoreNames, key: string): boolean => {
  if (!isAppStoreTypeExist(fromStorage)) return false;
  try {
    getStorage(fromStorage).removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export const clearStorage = (storage: EAppStoreNames = EAppStoreNames.local): boolean => {
  if (!isAppStoreTypeExist(storage)) return false;
  try {
    getStorage(storage).clear();
    return true;
  } catch (e) {
    return false;
  }
};

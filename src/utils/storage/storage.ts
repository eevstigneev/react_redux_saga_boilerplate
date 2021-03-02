export type StorageData = string | null;

export enum EAppStoreNames {
  local = 'localStorage',
  session = 'sessionStorage',
}

const APP_STORES_TYPES = [EAppStoreNames.local, EAppStoreNames.session];

/**
 *
 * @param {'localStorage' | 'sessionStorage'} [storage=APP_STORES_TYPES[0]] specify storage
 * @return {Storage}
 */
export const getStorage = (storage: EAppStoreNames): Storage => {
  const fakeStore = {
    key: () => null,
    clear: () => null,
    getItem: () => null,
    removeItem: () => null,
    setItem: () => null,
    length: 0,
  };
  try {
    const store = window[storage];
    store.setItem('test', 'test');
    store.removeItem('test');
    return store;
  } catch (e) {
    Error(e);
  }
  return fakeStore;
};

/**
 *
 * @param {'localStorage' | 'sessionStorage'} fromStorage
 * @param {string} key
 * @return {(string | null)|null}
 */
export const getFromStorage = (fromStorage: EAppStoreNames, key: string): StorageData => {
  if (APP_STORES_TYPES.indexOf(fromStorage) !== -1) {
    return getStorage(fromStorage).getItem(key) || null;
  }
  return null;
};
/**
 *
 * @param {'localStorage' | 'sessionStorage'} toStorage
 * @param {string} key
 * @param {string} value
 * @return {boolean} success/failure flag
 */
export const setToStorage = (toStorage: EAppStoreNames, key: string, value: string): boolean => {
  if (APP_STORES_TYPES.indexOf(toStorage) !== -1) {
    try {
      getStorage(toStorage).setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};
/**
 *
 * @param {'localStorage' | 'sessionStorage'} fromStorage
 * @param {string} key
 * @return {boolean} success/failure flag
 */
export const removeFromStorage = (fromStorage: EAppStoreNames, key: string): boolean => {
  if (APP_STORES_TYPES.indexOf(fromStorage) !== -1) {
    try {
      getStorage(fromStorage).removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};
/**
 *
 * @param {'localStorage' | 'sessionStorage'} storage
 * @return {boolean} success/failure flag
 */
export const clearStorage = (storage: EAppStoreNames = EAppStoreNames.local): boolean => {
  if (APP_STORES_TYPES.indexOf(storage) !== -1) {
    try {
      getStorage(storage).clear();
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};

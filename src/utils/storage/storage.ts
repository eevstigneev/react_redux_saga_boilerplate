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
  try {
    const store = window[storage];
    store.setItem('test', 'test');
    store.removeItem('test');
    return store;
  } catch (e) {
    throw Error(e);
  }
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
    getStorage(toStorage).setItem(key, value);
    return true;
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
    getStorage(fromStorage).removeItem(key);
    return true;
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
    getStorage(storage).clear();
    return true;
  }
  return false;
};

import {
  clearStorage,
  EAppStoreNames,
  getFromStorage,
  getStorage,
  isAppStoreTypeExist,
  removeFromStorage,
  setToStorage,
} from './storage';

const destroyStorage = (storageName: EAppStoreNames) => {
  const originalStorage = global[storageName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global[storageName] = undefined;
  delete global[storageName];
  return () => {
    Object.defineProperty(global, storageName, {value: originalStorage, writable: true});
  };
};

beforeAll(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

const storageName = EAppStoreNames.local;

describe('Storage', () => {
  test('Is testing library works properly', () => {
    const storage = getStorage(storageName);
    const KEY = 'FOO';
    const VALUE = 'BAR';
    storage.setItem(KEY, VALUE);
    expect(storage.getItem(KEY)).toBe(VALUE);
    expect(storage.length).toBe(1);
  });

  describe('Store key should be local or session storage', () => {
    test('should be local storage', () => {
      expect(isAppStoreTypeExist(EAppStoreNames.local)).toBeTruthy();
    });
    test('should be session storage', () => {
      expect(isAppStoreTypeExist(EAppStoreNames.session)).toBeTruthy();
    });
  });

  describe('Storage is not defined', () => {
    test('should throw Error', () => {
      const restoreStorage = destroyStorage(storageName);
      expect(() => getStorage(storageName)).toThrow(Error);
      restoreStorage();
    });
    test('should not returns value', () => {
      const KEY = 'test';
      const restoreStorage = destroyStorage(storageName);
      expect(getFromStorage(storageName, KEY)).toBe(null);
      restoreStorage();
    });
    test('should not save value', () => {
      const KEY = 'FOO';
      const VALUE = 'BAR';
      const restoreStorage = destroyStorage(storageName);
      expect(setToStorage(storageName, KEY, VALUE)).toBe(false);
      restoreStorage();
    });
    test('should not remove value', () => {
      const KEY = 'test';
      const restoreStorage = destroyStorage(storageName);
      expect(removeFromStorage(storageName, KEY)).toBe(false);
      restoreStorage();
    });
    test('should not clear storage', () => {
      const restoreStorage = destroyStorage(storageName);
      expect(clearStorage(storageName)).toBe(false);
      restoreStorage();
    });
  });

  describe('(Local | Session)Storage', () => {
    const KEY = 'FOO';
    const VALUE = 'BAR';
    test('should save to localStorage', () => {
      expect(setToStorage(EAppStoreNames.local, KEY, VALUE)).toBe(true);
    });
    test('should have saved localStorage', () => {
      expect(getFromStorage(EAppStoreNames.local, KEY)).toBe(VALUE);
    });
    test('should remove from localStorage', () => {
      expect(removeFromStorage(EAppStoreNames.local, KEY)).toBe(true);
    });
    test('should clear localStorage', () => {
      expect(clearStorage(EAppStoreNames.local)).toBe(true);
    });
    test('should not have saved to localStorage', () => {
      expect(getFromStorage(EAppStoreNames.local, KEY)).toBe(null);
    });
  });
});

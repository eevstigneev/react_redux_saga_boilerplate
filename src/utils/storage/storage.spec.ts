import {clearStorage, EAppStoreNames, getFromStorage, getStorage, removeFromStorage, setToStorage} from './storage';

beforeAll(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

describe('Storage', () => {
  test('Is testing library works properly', () => {
    const storage = getStorage(EAppStoreNames.local);
    const KEY = 'FOO';
    const VALUE = 'BAR';
    storage.setItem(KEY, VALUE);
    expect(storage.getItem(KEY)).toBe(VALUE);
    expect(storage.length).toBe(1);
  });
  describe('Storage is undefined', () => {
    test('should undefined storage', () => {
      expect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return getStorage('__unknown__');
      }).toThrow(Error);
    });
    test('should not returns value', () => {
      const KEY = 'test';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(getFromStorage('__unknown__', KEY)).toBe(null);
    });
    test('should not save value', () => {
      const KEY = 'FOO';
      const VALUE = 'BAR';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(setToStorage('__unknown__', KEY, VALUE)).toBe(false);
    });
    test('should not remove value', () => {
      const KEY = 'test';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(removeFromStorage('__unknown__', KEY)).toBe(false);
    });
    test('should not clear storage', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(clearStorage('__unknown__')).toBe(false);
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

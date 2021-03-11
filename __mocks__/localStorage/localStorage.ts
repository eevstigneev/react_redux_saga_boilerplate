export class LocalStorage implements Storage {
  get store(): LocalStorage {
    return this;
  }

  constructor(jest: typeof globalThis.jest) {
    Object.defineProperty(this, 'getItem', {
      enumerable: false,
      value: jest.fn((key: string) => (this[key] !== undefined ? this[key] : null)),
    });
    Object.defineProperty(this, 'setItem', {
      enumerable: false,
      value: jest.fn((key: string, val = '') => {
        this[key] = `${val}`;
      }),
    });
    Object.defineProperty(this, 'removeItem', {
      enumerable: false,
      value: jest.fn((key: string) => {
        delete this[key];
      }),
    });
    Object.defineProperty(this, 'clear', {
      enumerable: false,
      value: jest.fn(() => {
        Object.keys(this).map(key => delete this[key]);
      }),
    });
    Object.defineProperty(this, 'toString', {
      enumerable: false,
      value: jest.fn(() => {
        return '[object Storage]';
      }),
    });
    Object.defineProperty(this, 'key', {
      enumerable: false,
      value: jest.fn((idx: string) => Object.keys(this)[idx] || null),
    });
  } // end constructor

  clear(): void {
    throw new Error('Method not implemented.');
  }

  getItem(_key: string): string | null {
    throw new Error('Method not implemented.');
  }

  key(_index: number): string | null {
    throw new Error('Method not implemented.');
  }

  removeItem(_key: string): void {
    throw new Error('Method not implemented.');
  }

  setItem(_key: string, _value: string): void {
    throw new Error('Method not implemented.');
  }

  get length(): number {
    return Object.keys(this).length;
  }
}

import {defaultRequestHeaders} from 'src/api/config';
import {requestInit} from './requestInit';

describe('API properties composer', () => {
  describe('Get', () => {
    const {body, ...restProps} = {method: 'get', body: '{"test": "test"}'};
    test('should be without body key', () => {
      expect(requestInit({body, ...restProps})).not.toHaveProperty('body');
    });
    test('should have default headers', () => {
      expect(requestInit({body, ...restProps}).headers).toStrictEqual(defaultRequestHeaders);
    });
    test('should have default and specific headers', () => {
      const headers = {Authorization: 'Bearer 12345'};
      expect(requestInit({body, ...restProps}, headers).headers).toStrictEqual({...defaultRequestHeaders, ...headers});
    });
  });

  describe('Post | Put | Delete', () => {
    test('should transform body to json', () => {
      const mock = {method: 'post', body: {test: 'test'}};
      expect(requestInit(mock).body).toStrictEqual(JSON.stringify(mock.body));
    });
    test("shouldn't transform body to json", () => {
      const mock = {method: 'post', body: new Blob()};
      expect(typeof requestInit(mock).body).toStrictEqual(typeof mock.body);
    });
    test('should have default headers', () => {
      const mock = {method: 'post', body: {test: 'test'}};
      expect(requestInit(mock).headers).toStrictEqual(defaultRequestHeaders);
    });
    test("shouldn't have default headers", () => {
      const mock = {method: 'post', body: new Blob()};
      expect(requestInit(mock).headers).not.toHaveProperty('headers');
    });
    test('should have specific headers only', () => {
      const mock = {method: 'post', body: new Blob()};
      const headers = {Authorization: 'Bearer 12345'};
      expect(requestInit(mock, headers).headers).toStrictEqual(headers);
    });
    test('should have default and specific headers', () => {
      const mock = {method: 'post', body: {test: 'test'}};
      const headers = {Authorization: 'Bearer 12345'};
      expect(requestInit(mock, headers).headers).toStrictEqual({...defaultRequestHeaders, ...headers});
    });
  });
});

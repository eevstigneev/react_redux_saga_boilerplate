import {defaultRequestHeaders, defaultRequestOptions} from 'src/api/config';

type InitRequest = Omit<RequestInit, 'headers' | 'body'>;
export type RequestHeaders = Record<string, string>;
export type RequestBody<Body = void> = BodyInit extends Body ? BodyInit : Body;

export type RequestOptionsWoBody = InitRequest;

export interface RequestOptions<Body> extends InitRequest {
  body?: RequestBody<Body>;
}
export interface RequestProps<Body> extends InitRequest {
  body?: RequestBody<Body>;
  headers?: RequestHeaders;
}

/**
 * Returns true for serialized types
 * @param body
 * @returns boolean;
 */
const isBodyTypeLikeJson = <Body>(body?: RequestBody<Body>): boolean => {
  const isBodyFormData = body instanceof FormData;
  const isBodyBlob = body instanceof Blob || body instanceof File || body instanceof ArrayBuffer;
  return !isBodyFormData && !isBodyBlob;
};

/**
 * Converts body to json if possible
 * @param body
 * @returns BodyInit | null
 */
const serializeBody = <Body>(body?: RequestBody<Body>): BodyInit | null => {
  if (!body) return null;
  if (isBodyTypeLikeJson(body) && typeof body === 'object') {
    return JSON.stringify(body);
  }
  return body as BodyInit;
};

/**
 * Composes default headers with optional headers
 * @param defaultHeaders
 * @returns (body: RequestBody, headers: RequestHeaders): RequestHeaders
 */
const composeHeaders = (defaultHeaders: RequestHeaders) => <Body>(
  body?: RequestBody<Body>,
  headers?: RequestHeaders,
): RequestHeaders => {
  if (!headers) return defaultHeaders;
  return isBodyTypeLikeJson(body) ? {...defaultHeaders, ...headers} : headers;
};

/**
 *  Merges special request headers with default
 *  @param body
 *  @param headers
 *  @returns RequestHeaders
 */
export const withDefaultHeaders = composeHeaders(defaultRequestHeaders);

/**
 *  Merges special request options with default
 * @param options
 * @returns RequestOptionsWoBody
 */
export const withDefaultOptions = (options: RequestOptionsWoBody): RequestOptionsWoBody => ({
  ...defaultRequestOptions,
  ...options,
});

/**
 *
 * @param initOptions
 * @param initHeaders
 * @returns RequestInit
 */
export const requestInit = <Body>(initOptions: RequestOptions<Body>, initHeaders?: RequestHeaders): RequestInit => {
  const {body, method, ...restReq} = initOptions;
  const headers = withDefaultHeaders<Body>(body, initHeaders);
  const requestOptions = withDefaultOptions(restReq);
  switch (method) {
    case 'get':
      // without body
      return {
        ...requestOptions,
        method,
        headers,
      };
    default:
      return {
        ...requestOptions,
        method,
        headers,
        body: serializeBody<Body>(body),
      };
  }
};

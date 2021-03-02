type RequestOptions = Omit<RequestInit, 'headers'>;
type RequestHeaders = RequestInit['headers'];

export const defaultOptions: RequestOptions = {
  credentials: 'same-origin' as const,
}
export const defaultHeaders: RequestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export function requestInit(requestOptions: RequestOptions, requestHeaders?: RequestHeaders): RequestInit {
  return {
    ...defaultOptions,
    ...requestOptions,
    headers: {
      ...defaultHeaders,
      ...(requestHeaders || {}),

    }
  };
}

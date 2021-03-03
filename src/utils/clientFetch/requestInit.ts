type RequestInitWithoutBody = Omit<RequestInit, 'body'>;

export interface RequestProps<Payload> extends RequestInitWithoutBody {
  body?: FormData | Blob | Payload;
}

export type RequestOptions<Payload> = Omit<RequestProps<Payload>, 'headers'>;

export type RequestHeaders = RequestInit['headers'];

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const defaultOptions: RequestInitWithoutBody = {
  credentials: 'same-origin' as const,
};

export const requestInit = <Payload>(init: RequestOptions<Payload>, headers?: RequestHeaders): RequestInit => {
  const {body, ...restReq} = init;
  if (!body) {
    return {...defaultOptions, ...restReq, headers: {...jsonHeaders, ...headers}};
  }
  /** Don't use for files
    headers: {
       'Content-Type': 'multipart/form-data',
   } */
  if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer) {
    return {...defaultOptions, ...restReq, body, headers};
  }

  return {
    ...defaultOptions,
    ...restReq,
    body: (typeof body === 'object' ? JSON.stringify(body) : body) as string,
    headers: {...jsonHeaders, ...headers},
  };
};

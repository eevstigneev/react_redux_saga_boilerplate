import type {RequestHeaders, RequestOptionsWoBody} from 'src/utils/clientFetch/requestInit';

export const defaultRequestOptions: RequestOptionsWoBody = {
  credentials: 'same-origin' as const,
};

export const defaultRequestHeaders: RequestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

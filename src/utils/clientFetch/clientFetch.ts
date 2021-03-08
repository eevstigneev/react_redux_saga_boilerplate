import {requestInit} from './requestInit';
import type {RequestProps} from './requestInit';

export const clientFetch = async <Response>(url: string, requestProps: RequestProps): Promise<Response> => {
  const {headers, ...restProps} = requestProps;
  const res = await fetch(url, requestInit(restProps, headers));
  const data = await res.json();
  if (!res.ok) {
    return data;
  }
  throw Error(JSON.stringify({status: res.status, message: res.statusText}));
};

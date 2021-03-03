import {requestInit, RequestProps} from './requestInit';

// eslint-disable-next-line import/prefer-default-export
export const clientFetch = async <Response, Payload = undefined>(
  url: string,
  requestProps: RequestProps<Payload>,
): Promise<Response> => {
  const {headers, ...restProps} = requestProps;
  const res = await fetch(url, requestInit(restProps, headers));
  const data = await res.json();
  if (!res.ok) {
    return data;
  }
  throw Error(JSON.stringify({status: res.status, message: res.statusText}));
};

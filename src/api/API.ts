import {clientFetch} from 'src/utils/clientFetch/clientFetch';
import type {RequestBody, RequestOptionsWoBody} from 'src/utils/clientFetch/requestInit';

export class API {
  private static baseUrl(prefix: string): string {
    return `/api${prefix}`;
  }

  protected async get<Response>(url: string, init?: RequestOptionsWoBody): Promise<Response> {
    return clientFetch<Response>(API.baseUrl(url), {
      method: 'get',
      ...init,
    });
  }

  protected async post<Response, Payload>(
    url: string,
    body: RequestBody<Payload>,
    init?: RequestOptionsWoBody,
  ): Promise<Response> {
    return clientFetch<Response, Payload>(API.baseUrl(url), {
      method: 'post',
      body,
      ...init,
    });
  }

  protected async put<Response, Payload>(
    url: string,
    body: RequestBody<Payload>,
    init?: RequestOptionsWoBody,
  ): Promise<Response> {
    return clientFetch<Response, Payload>(API.baseUrl(url), {
      method: 'put',
      body,
      ...init,
    });
  }

  protected async delete<Response, Payload>(
    url: string,
    body?: RequestBody<Payload>,
    init?: RequestOptionsWoBody,
  ): Promise<Response> {
    return clientFetch<Response, Payload>(API.baseUrl(url), {
      method: 'delete',
      body,
      ...init,
    });
  }
}

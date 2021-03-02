import {SingInPayload, SingInResponse} from "../store/auth/auth.types";

export class Auth {
  private uri = '/api/auth'
  public singIn(payload: SingInPayload): Promise<SingInResponse> {
    return fetch(this.uri, {requestInit()})
  }
}

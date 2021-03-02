export interface UserData {
  username: string;
  roles: string[];
}

export interface Token {
  expires: number;
  key: string;
}

export interface SingInPayload {
  username: string;
  password: string;
}

export interface SingInResponse extends UserData {
  token: Token | null;
}

export interface InitialState extends SingInResponse {
  isFetching: boolean;
  error: unknown;
}

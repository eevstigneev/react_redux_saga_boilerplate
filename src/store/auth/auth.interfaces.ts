export interface InitialState {
  id: string | null;
  username: string;
  roles: string[];
  token: Token | null;
  isFetching: boolean;
  error: unknown;
}

export interface Token {
  expires: number;
  key: string;
}

export type UserData = Pick<InitialState, 'username' | 'roles'>;
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LoginDTO {
  export interface Request {
    username: string;
    password: string;
  }
  export interface Response {
    id: string;
    username: string;
    roles: string[];
    token: Token | null;
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LogoutDTO {
  export type Request = void;
}

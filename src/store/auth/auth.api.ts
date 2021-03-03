import {LoginDTO} from 'src/store/auth/auth.interfaces';
import {API} from 'src/api/API';

class Auth extends API {
  private static url(prefix: string): string {
    return `/auth/${prefix}`;
  }

  async login(payload: LoginDTO.Request) {
    return this.post<LoginDTO.Response, LoginDTO.Request>(Auth.url('login'), payload);
  }

  async logout() {
    return this.get(Auth.url('logout'));
  }
}

export default new Auth();

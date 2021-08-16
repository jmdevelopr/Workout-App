import { TNullable } from './common';

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUp {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  callback_url: string;
}

export interface ResetEmail {
  email: string;
  callback_url: string;
}

export interface ResetKey {
  reset_key: string;
}

export interface VerifyKey {
  verify_key: string;
}

export interface ResetPassword extends ResetKey {
  password: string;
  password_confirmation: string;
}

export interface User {
  first_name: string;
  last_name: string;
  id: number;
  address: string;
  birthday: string;
}

export interface Profile {
  id: number;
  user: number;
  phone: string;
  departament: string;
  position: string;
}

export interface ITokens {
  refresh: string;
  access: string;
}

export interface SignInResponse extends ITokens {
  user: User;
}

export interface RefreshResponse {
  access: string;
}

export interface AuthData {
  company: string;
  email: string;
  exp: number;
  jti: string;
  role: 1 | 2 | 3;
  token_type: 'access';
  user_id: number;
  profile: number;
}

export interface Auth {
  data: TNullable<AuthData>;
  isAuth: boolean;
  unauthorize: (redirect: string) => void;
  authorize: (access: string, refresh: string) => void;
  updateAccessToken: (access: string) => void;
}

export interface VerifyEmailResponse extends ITokens {
  info: string;
}

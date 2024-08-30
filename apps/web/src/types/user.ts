export interface ISignUp {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  referral: string;
}

export interface ISignUpEo {
  creator: string;
  email: string;
  password: string;
}

export interface UserLogin {
  data: string;
  password: string;
}

export interface EoLogin {
  data: string;
  password: string;
}

export interface UserState {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}

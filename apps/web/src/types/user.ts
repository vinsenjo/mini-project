export interface ISignUp {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  referral: string;
}

export interface UserLogin {
  data: string;
  password: string;
}
export interface CreateTweet {
  content: string;
  media?: File | null;
}

export interface UserState {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}

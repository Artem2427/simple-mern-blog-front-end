declare interface AuthSlice {
  user: IUser | null;
  loading: boolean;
}

declare interface LoginInfo {
  user: IUser;
  token: string;
}

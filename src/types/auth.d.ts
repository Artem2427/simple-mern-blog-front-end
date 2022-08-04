declare interface AuthServices {
  login: (params: LoginBody) => Promise<IUser>;
  authMe: () => Promise<IUser>;
  register: (params: LoginBody & { fullName: string }) => Promise<LoginInfo>;
}

declare interface LoginBody {
  email: string;
  password: string;
}

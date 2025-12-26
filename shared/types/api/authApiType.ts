export type registerRequestType = {
  email: string;
  password: string | undefined;
  firstName: string;
  lastName: string;
};

export type loginRequestType = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  role?: string;
};

export type AuthResponseType = {
  user: User;
  accessToken: string;
  refreshToken?: string;
};

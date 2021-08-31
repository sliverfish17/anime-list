export interface UserState {
  user: TUser | null;
  loggedIn: boolean;
}

export type TUser = {
  photoURL: string;
  displayName: string;
  email: string;
};

export interface UserLogin {
  user: any | null;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN",
  SET_USER_LOGGED_OUT = "SET_USER_LOGGED_OUT",
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: TUser;
}

interface FetchUserLoggedIn {
  type: UserActionTypes.SET_USER_LOGGED_IN;
  payload: boolean;
}

interface FetchUserLoggedOut {
  type: UserActionTypes.SET_USER_LOGGED_OUT;
}

export type UserAction = SetUserAction | FetchUserLoggedIn | FetchUserLoggedOut;

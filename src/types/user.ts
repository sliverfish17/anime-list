export interface UserState {
  user: TUser | null;
  loggedIn: boolean;
  isLoading: boolean;
}

export type TUser = {
  photoURL: string;
  displayName: string;
  email: string;
  uid: string;
};

export type TUserId = {
  uid: string;
};

export interface UserLogin {
  user: any | null;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN",
  SET_USER_LOGGED_OUT = "SET_USER_LOGGED_OUT",
  SET_USER_LOADING = "SET_USER_LOADING",
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

interface FetchSetUserLoading {
  type: UserActionTypes.SET_USER_LOADING;
  payload: boolean;
}

export type UserAction =
  | SetUserAction
  | FetchUserLoggedIn
  | FetchUserLoggedOut
  | FetchSetUserLoading;

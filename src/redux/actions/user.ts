import { UserState } from "../../types/user";

export const setLoggedIn = () => ({
  type: "SET_USER_LOGGED_IN",
  payload: true,
});

export const setUserData = (user: UserState | null) => ({
  type: "SET_USER",
  payload: user,
});

export const setLogOut = () => ({
  type: "SET_USER_LOGGED_OUT",
});

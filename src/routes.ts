import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { LOGIN_ROUTE, MAIN_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
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

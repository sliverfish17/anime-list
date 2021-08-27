import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useTypedSelector } from "../hooks/useTypedSelector";

function AppRouter() {
  const { user } = useTypedSelector((state) => state);

  console.log(user);

  return user.user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => {
        return (
          <Route
            path={path}
            component={Component}
            exact={true}
            key={path}
          ></Route>
        );
      })}
      <Redirect to={MAIN_ROUTE}></Redirect>
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => {
        return (
          <Route
            path={path}
            component={Component}
            exact={true}
            key={path}
          ></Route>
        );
      })}
      <Redirect to={LOGIN_ROUTE}></Redirect>
    </Switch>
  );
}
export default AppRouter;

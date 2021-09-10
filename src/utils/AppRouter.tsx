import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/app.module.scss";
import { useEffect } from "react";
import { loginAfterReload } from "./api";
import { useActions } from "../hooks/useAction";

function AppRouter() {
  const { setUserData, setLoggedIn, setUserLoading } = useActions();
  const { user, isLoading } = useTypedSelector((state) => state.userInfo);
  useEffect(() => {
    setUserLoading(true);
    loginAfterReload().then((data: any) => {
      setUserData(data);
      setLoggedIn();
      setUserLoading(false);
    });
  }, []);

  return user ? (
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
      {isLoading ? (
        <>
          <div className={style.loading}>
            <div className={style.loader}></div>
            Loading...
          </div>
        </>
      ) : (
        publicRoutes.map(({ path, Component }) => {
          return (
            <Route
              path={path}
              component={Component}
              exact={true}
              key={path}
            ></Route>
          );
        })
      )}
      <Redirect to={LOGIN_ROUTE}></Redirect>
    </Switch>
  );
}

export default AppRouter;

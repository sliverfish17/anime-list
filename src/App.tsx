import Header from "./components/Header";
import AppRouter from "./utils/AppRouter";
import style from "./styles/app.module.scss";
import { useActions } from "./hooks/useAction";
import { useEffect } from "react";
import { loginAfterReload } from "./utils/api";

function App() {
  const { setUserData, setLoggedIn, setUserLoading } = useActions();

  useEffect(() => {
    setUserLoading(true);
    loginAfterReload().then((data: any) => {
      setUserData(data);
      setLoggedIn();
      setUserLoading(false);
    });
  }, []);

  return (
    <div className={style.app}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;

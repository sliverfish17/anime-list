import Header from "./components/Header";
import AppRouter from "./utils/AppRouter";
import style from "./styles/app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;

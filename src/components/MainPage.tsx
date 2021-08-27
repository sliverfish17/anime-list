import { useActions } from "../hooks/useAction";
import style from "../styles/main.module.scss";

const MainPage: React.FC = () => {
  const { setLogOut } = useActions();

  const handleLogOut = () => {
    setLogOut();
  };

  return (
    <div className={style.wrapper}>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default MainPage;

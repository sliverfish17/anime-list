import style from "../styles/main.module.scss";

const MainPage: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.user}></div>
      </div>
    </div>
  );
};

export default MainPage;

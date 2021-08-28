import style from "../styles/main.module.scss";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const MainPage: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default MainPage;

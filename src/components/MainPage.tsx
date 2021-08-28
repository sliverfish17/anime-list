import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/main.module.scss";
import current from "../assets/img/current.png";
import planning from "../assets/img/planning.png";
import completed from "../assets/img/completed.png";
import paused from "../assets/img/paused.png";
import dropped from "../assets/img/dropped.png";
import { useState } from "react";

const MainPage: React.FC = () => {
  const { user } = useTypedSelector((state) => state);

  const [choice, setChoice] = useState(0);

  console.log(choice);
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.user}>
          <img
            src={user?.user?.photoURL}
            alt="user_photo"
            className={style.user__pic}
          />
          <span className={style.user__name}>{user?.user?.displayName}</span>
          <span className={style.user__email}>{user?.user?.email}</span>
          <ul className={style.list}>
            <div
              onClick={() => setChoice(0)}
              className={choice === 0 ? style.chosen__active : style.chosen}
            >
              <li className={style.list__link}>
                <img
                  src={current}
                  alt="current"
                  className={style.list__icons}
                />
                Current
              </li>
            </div>
            <div
              onClick={() => setChoice(1)}
              className={choice === 1 ? style.chosen__active : style.chosen}
            >
              <li className={style.list__link}>
                <img
                  src={planning}
                  alt="planning"
                  className={style.list__icons}
                />
                Planning
              </li>
            </div>
            <div
              onClick={() => setChoice(2)}
              className={choice === 2 ? style.chosen__active : style.chosen}
            >
              <li className={style.list__link}>
                <img
                  src={completed}
                  alt="completed"
                  className={style.list__icons}
                />
                Completed
              </li>
            </div>
            <div
              onClick={() => setChoice(3)}
              className={choice === 3 ? style.chosen__active : style.chosen}
            >
              <li className={style.list__link}>
                <img src={paused} alt="paused" className={style.list__icons} />
                Paused
              </li>
            </div>
            <div
              onClick={() => setChoice(4)}
              className={choice === 4 ? style.chosen__active : style.chosen}
            >
              <li className={style.list__link}>
                <img
                  src={dropped}
                  alt="dropped"
                  className={style.list__icons}
                />
                Dropped
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

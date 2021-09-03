import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

import style from "../styles/main.module.scss";
import current from "../assets/img/current.png";
import planning from "../assets/img/planning.png";
import completed from "../assets/img/completed.png";
import paused from "../assets/img/paused.png";
import dropped from "../assets/img/dropped.png";

const LeftBar = () => {
  const { user } = useTypedSelector((state) => state.user);

  const { setListNumber } = useActions();

  const [choice, setChoice] = useState("current");

  useEffect(() => {
    setListNumber(choice);
  }, [choice]);

  return (
    <div className={style.left}>
      <div className={style.user}>
        <img src={user?.photoURL} alt="userPhoto" className={style.user__pic} />

        <span className={style.user__name}>{user?.displayName}</span>
        <span className={style.user__email}>{user?.email}</span>
        <ul className={style.list}>
          <div
            onClick={() => setChoice("current")}
            className={
              choice === "current" ? style.chosen__active : style.chosen
            }
          >
            <li className={style.list__link}>
              <img src={current} alt="current" className={style.list__icons} />
              Current
            </li>
          </div>
          <div
            onClick={() => setChoice("planning")}
            className={
              choice === "planning" ? style.chosen__active : style.chosen
            }
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
            onClick={() => setChoice("completed")}
            className={
              choice === "completed" ? style.chosen__active : style.chosen
            }
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
            onClick={() => setChoice("paused")}
            className={
              choice === "paused" ? style.chosen__active : style.chosen
            }
          >
            <li className={style.list__link}>
              <img src={paused} alt="paused" className={style.list__icons} />
              Paused
            </li>
          </div>
          <div
            onClick={() => setChoice("dropped")}
            className={
              choice === "dropped" ? style.chosen__active : style.chosen
            }
          >
            <li className={style.list__link}>
              <img src={dropped} alt="dropped" className={style.list__icons} />
              Dropped
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;

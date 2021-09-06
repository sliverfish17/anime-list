import React from "react";
import trash from "../../assets/img/trash-can.png";
import { deleteAnime, setNewAnime } from "../../utils/api";
import style from "../../styles/modal-anime.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserState } from "../../types/user";
import { IUserLists } from "./AnimeModal";

interface AnimeSetProps {
  close: (newList: string) => void;
  id: number;
  userList?: IUserLists;
}

const AnimeSet: React.FC<AnimeSetProps> = ({ close, id, userList }) => {
  const { user }: UserState = useTypedSelector((state) => state.user);
  const { list } = useTypedSelector((state) => state.activeList);

  const findActiveList = (key: string): boolean => {
    if (userList) {
      return !!userList![key].find((e) => +e === id);
    }
    return false;
  };

  const activeCheck = (list) => {
    if (userList?.[list].filter((e) => e === id)) {
      console.log("found");
    } else console.log("not found");
  };

  return (
    <div className={style.options}>
      <button
        id="current"
        onClick={() => {
          setNewAnime(user?.uid, 0, id);
          close("current");
        }}
        className={`${style.options__btn} ${
          findActiveList("current") ? style.options__btn_active : ""
        }`}
      >
        Current
      </button>
      {/* <button
        onClick={() => transferAnime(id, list, list, user?.uid)}
      >
        Transfer
      </button> */}
      <button
        onClick={() => {
          activeCheck(1);
          setNewAnime(user?.uid, 1, id);

          close("planning");
        }}
        className={`${style.options__btn} ${
          findActiveList("planning") ? style.options__btn_active : ""
        }`}
      >
        Planning
      </button>
      <button
        id="completed"
        onClick={() => {
          setNewAnime(user?.uid, 2, id);
          close("completed");
        }}
        className={`${style.options__btn} ${
          findActiveList("completed") ? style.options__btn_active : ""
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 3, id);
          close("paused");
        }}
        className={`${style.options__btn} ${
          findActiveList("paused") ? style.options__btn_active : ""
        }`}
      >
        Paused
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 4, id);
          close("dropped");
        }}
        className={`${style.options__btn} ${
          findActiveList("dropped") ? style.options__btn_active : ""
        }`}
      >
        Dropped
      </button>
      <button
        className={style.options__btn}
        onClick={() => {
          deleteAnime(user?.uid, id, list);
        }}
      >
        <img src={trash} alt="trash" className={style.options__icon} />
      </button>
    </div>
  );
};

export default AnimeSet;

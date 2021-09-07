import React from "react";
import trash from "../../assets/img/trash-can.png";
import { deleteAnime, setNewAnime, transferAnime } from "../../utils/api";
import style from "../../styles/modal-anime.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TUser } from "../../types/user";
import { IUserLists } from "./AnimeModal";
import { useActions } from "../../hooks/useAction";

interface AnimeSetProps {
  close: (newList: string) => void;
  id: number;
  userList?: IUserLists;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
  user: TUser | null;
}

const AnimeSet: React.FC<AnimeSetProps> = ({
  outsideClick,
  close,
  id,
  userList,
  user,
}) => {
  const { list } = useTypedSelector((state) => state.activeList);
  const { removeAnime } = useActions();

  const findActiveList = (key: string): boolean => {
    if (userList) {
      return !!userList![key].find((e: number) => e === id);
    }
    return false;
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
        onClick={() => {
          removeAnime(id);
          transferAnime(id, list, "paused", user?.uid);
        }}
      >
        Transfer
      </button> */}
      <button
        onClick={() => {
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
          removeAnime(id);
          deleteAnime(user?.uid, id, list);
        }}
      >
        <img src={trash} alt="trash" className={style.options__icon} />
      </button>
    </div>
  );
};

export default AnimeSet;

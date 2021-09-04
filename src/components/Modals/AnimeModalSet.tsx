import React from "react";
import trash from "../../assets/img/trash-can.png";
import { setNewAnime } from "../../utils/api";
import style from "../../styles/modal-anime.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserState } from "../../types/user";

interface AnimeSetProps {
  close: (newList: string) => void;
  id: number;
}

const AnimeSet: React.FC<AnimeSetProps> = ({ close, id }) => {
  const { user }: UserState = useTypedSelector((state) => state.user);

  return (
    <div className={style.options}>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 0, id);

          close("current");
        }}
        className={style.options__btn}
      >
        Current
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 1, id);
          close("planning");
        }}
        className={style.options__btn}
      >
        Planning
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 2, id);
          close("completed");
        }}
        className={style.options__btn}
      >
        Completed
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 3, id);
          close("paused");
        }}
        className={style.options__btn}
      >
        Paused
      </button>
      <button
        onClick={() => {
          setNewAnime(user?.uid, 4, id);
          close("dropped");
        }}
        className={style.options__btn}
      >
        Dropped
      </button>
      <button className={style.options__btn}>
        <img src={trash} alt="trash" className={style.options__icon} />
      </button>
    </div>
  );
};

export default AnimeSet;

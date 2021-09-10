import React, { useEffect, useState } from "react";
import trash from "../../assets/img/trash-can.png";
import { deleteAnime, setNewAnime, transferAnime } from "../../utils/api";
import style from "../../styles/modal-anime.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TUser } from "../../types/user";
import { IUserLists } from "./AnimeModal";
import { useActions } from "../../hooks/useAction";

interface AnimeSetProps {
  closeAndAdd: (newList: string) => void;
  id: number;
  userList?: IUserLists;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
  user: TUser | null;
}

const AnimeSet: React.FC<AnimeSetProps> = ({
  outsideClick,
  closeAndAdd,
  id,
  userList,
  user,
}) => {
  const { list } = useTypedSelector((state) => state.activeList);
  const { removeAnime } = useActions();
  const [activeList, setActiveList] = useState<string>();

  const findActiveList = (key: string): boolean => {
    if (userList) {
      return !!userList![key].find((e: number) => e === id);
    }
    return false;
  };

  const addOrChange = () => {
    if (findActiveList("current")) {
      setActiveList("current");
    }
    if (findActiveList("planning")) {
      setActiveList("planning");
    }
    if (findActiveList("completed")) {
      setActiveList("completed");
    }
    if (findActiveList("paused")) {
      setActiveList("paused");
    }
    if (findActiveList("dropped")) {
      setActiveList("dropped");
    }
  };

  useEffect(() => {
    addOrChange();
  }, [findActiveList]);

  return (
    <div className={style.options}>
      <button
        id="current"
        onClick={() => {
          if (!activeList) {
            setNewAnime(user?.uid, 0, id);
            closeAndAdd("current");
          } else {
            removeAnime(id);
            transferAnime(id, activeList, "current", user?.uid);
          }
        }}
        className={
          findActiveList("current")
            ? `${style.options__btn} ${style.options__btn_active}`
            : style.options__btn
        }
      >
        Current
      </button>

      <button
        id="planning"
        onClick={() => {
          if (!activeList) {
            setNewAnime(user?.uid, 1, id);
            closeAndAdd("planning");
          } else {
            removeAnime(id);
            transferAnime(id, activeList, "planning", user?.uid);
          }
        }}
        className={
          findActiveList("planning")
            ? `${style.options__btn} ${style.options__btn_active}`
            : style.options__btn
        }
      >
        Planning
      </button>
      <button
        id="completed"
        onClick={() => {
          if (!activeList) {
            setNewAnime(user?.uid, 2, id);
            closeAndAdd("completed");
          } else {
            removeAnime(id);
            transferAnime(id, activeList, "completed", user?.uid);
          }
        }}
        className={
          findActiveList("completed")
            ? `${style.options__btn} ${style.options__btn_active}`
            : style.options__btn
        }
      >
        Completed
      </button>
      <button
        id="paused"
        onClick={() => {
          if (!activeList) {
            setNewAnime(user?.uid, 3, id);
            closeAndAdd("paused");
          } else {
            removeAnime(id);
            transferAnime(id, activeList, "paused", user?.uid);
          }
        }}
        className={
          findActiveList("paused")
            ? `${style.options__btn} ${style.options__btn_active}`
            : style.options__btn
        }
      >
        Paused
      </button>
      <button
        id="dropped"
        onClick={() => {
          if (!activeList) {
            setNewAnime(user?.uid, 4, id);
            closeAndAdd("dropped");
          } else {
            removeAnime(id);

            transferAnime(id, activeList, "dropped", user?.uid);
          }
        }}
        className={
          findActiveList("dropped")
            ? `${style.options__btn} ${style.options__btn_active}`
            : style.options__btn
        }
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

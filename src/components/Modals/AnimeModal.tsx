import React, { useEffect, useState } from "react";
import style from "../../styles/modal-anime.module.scss";
import { TAnime } from "../../types/anime";
import Portal from "./Portal";
import AnimeSet from "./AnimeModalSet";
import { getCurrentUser } from "../../utils/api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface AnimeModalProps {
  active: boolean;
  data: TAnime;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
  closeAndAdd: (newList: string) => void;
}

export interface IUserLists {
  current: number[];
  dropped: number[];
  paused: number[];
  planning: number[];
  completed: number[];
}

const AnimeModal: React.FC<AnimeModalProps> = ({
  data,
  active,
  outsideClick,
  closeAndAdd,
}) => {
  const { user } = useTypedSelector((state) => state.userInfo);

  const [userList, setUserList] = useState<IUserLists>();

  useEffect(() => {
    if (user?.uid) {
      getCurrentUser(user.uid)?.then((res) => {
        const listsData = {
          current: res?.current,
          dropped: res?.dropped,
          paused: res?.paused,
          planning: res?.planning,
          completed: res?.completed,
        };
        setUserList(listsData);
      });
    }
  }, [user]);

  return (
    <Portal>
      <div
        className={active ? style.modal__active : style.modal}
        onClick={outsideClick}
      >
        <div
          className={active ? style.modal_content__active : style.modal_content}
        >
          <div className={style.wrapper}>
            <div className={style.anime}>
              <div className={style.anime__poster_block}>
                <button className={style.anime__close_btn}>X</button>
                <img
                  className={style.anime__poster}
                  src={data.image_url}
                  alt={`${data.image_url} poster`}
                />
              </div>
              <div className={style.anime__info}>
                <div className={style.anime__title_line}>
                  <span className={style.anime__title}>{data.title}</span>
                </div>
                <span className={style.anime__start}>
                  {data.type === "Anime" || data.type === "TV"
                    ? data.airing
                      ? `Started on ${data.aired.from.slice(0, 10)}`
                      : `Were going from ${data.aired.from.slice(
                          0,
                          10
                        )} to ${data.aired.to.slice(0, 10)}`
                    : `Premiered on ${data.aired.from.slice(0, 10)}`}
                </span>
                <span className={style.anime__genres}>
                  {data.genres.length > 1
                    ? `Genres: ${data.genres.map((e) => e.name).join(", ")}. `
                    : `Genre: ${data.genres[0].name}.`}
                </span>
                <span className={style.anime__description}>
                  {data.synopsis}
                </span>
              </div>
            </div>
            <hr />
            <AnimeSet
              user={user}
              id={data.mal_id}
              closeAndAdd={closeAndAdd}
              userList={userList}
              outsideClick={outsideClick}
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default AnimeModal;

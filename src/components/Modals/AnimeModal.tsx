import React from "react";
import style from "../../styles/modal-anime.module.scss";
import { TAnime } from "../../types/anime";
import trash from "../../assets/img/trash-can.png";
import { setNewAnime } from "../../utils/api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserState } from "../../types/user";
import Portal from "./Portal";

interface AnimeModalProps {
  active: boolean;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
  data: TAnime;
}

const AnimeModal: React.FC<AnimeModalProps> = ({
  data,
  active,
  outsideClick,
}) => {
  const { user }: UserState = useTypedSelector((state) => state.user);

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
              <img
                className={style.anime__poster}
                src={data.image_url}
                alt={`${data.image_url} poster`}
              />
              <div className={style.anime__info}>
                <span className={style.anime__title}>{data.title}</span>
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
            <div className={style.options}>
              <button
                onClick={() => setNewAnime(user?.uid, 0, data.mal_id)}
                className={style.options__btn}
              >
                Current
              </button>
              <button
                onClick={() => setNewAnime(user?.uid, 1, data.mal_id)}
                className={style.options__btn}
              >
                Planning
              </button>
              <button
                onClick={() => setNewAnime(user?.uid, 2, data.mal_id)}
                className={style.options__btn}
              >
                Completed
              </button>
              <button
                onClick={() => setNewAnime(user?.uid, 3, data.mal_id)}
                className={style.options__btn}
              >
                Paused
              </button>
              <button
                onClick={() => setNewAnime(user?.uid, 4, data.mal_id)}
                className={style.options__btn}
              >
                Dropped
              </button>
              <button className={style.options__btn}>
                <img src={trash} alt="trash" className={style.options__icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default AnimeModal;

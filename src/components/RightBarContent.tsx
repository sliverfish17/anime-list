import axios from "axios";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useAction";
import style from "../styles/right-content.module.scss";
import { IAnimeChoice, TAnime } from "../types/anime";

interface RightContentProps {
  info: TAnime;
}

const RightBarContent: React.FC<RightContentProps> = ({ info }) => {
  const { showChosenAnime } = useActions();

  const [dispatchedAnime, setDispatchedAnime]: any[] = useState([]);
  const [chosenAnime, setChosenAnime] = useState<null | number>(null);

  useEffect(() => {
    if (chosenAnime) {
      axios
        .get(`https://api.jikan.moe/v3/anime/${chosenAnime}`)
        .then((response: IAnimeChoice) => {
          setDispatchedAnime(showChosenAnime(response.data).payload);
        });
    }
  }, [chosenAnime]);

  return (
    <div
      className={style.wrapper}
      key={info.mal_id}
      onClick={() => setChosenAnime(info.mal_id)}
    >
      <div className={style.anime}>
        <div className={style.anime__poster_block}>
          <img
            className={style.anime__poster}
            src={info.image_url}
            alt={`${info.image_url} poster`}
          />
        </div>
        <div className={style.anime__info}>
          <div className={style.anime__title_line}>
            <span className={style.anime__title}>{info.title}</span>
          </div>
          <span className={style.anime__start}>
            {info.type === "Anime" || info.type === "TV"
              ? info.airing
                ? `Started on ${info.aired.from.slice(0, 10)}`
                : `Were going from ${info.aired.from.slice(
                    0,
                    10
                  )} to ${info.aired.to.slice(0, 10)}`
              : `Premiered on ${info.aired.from.slice(0, 10)}`}
          </span>
          <span className={style.anime__genres}>
            {info.genres.length
              ? `Genres: ${info.genres.map((e) => e.name).join(", ")}. `
              : `Genre: ${info.genres[0].name}.`}
          </span>
          <span className={style.anime__description}>{info.synopsis}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RightBarContent;

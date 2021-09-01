import style from "../styles/right-content.module.scss";
import { TAnime } from "../types/anime";

interface RightContentProps {
  data: TAnime[];
}

const RightBarContent: React.FC<RightContentProps> = ({ data }) => {
  return (
    <>
      {data.map((info) => (
        <div className={style.wrapper} key={info.mal_id}>
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
                    ? `Started on ${info.aired?.from?.slice(0, 10)}`
                    : `Were going from ${info.aired?.from.slice(
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
      ))}
    </>
  );
};

export default RightBarContent;

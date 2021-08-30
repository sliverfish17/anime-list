import React, { useState, useEffect } from "react";
import axios from "axios";
import { ISearch, TResults } from "../types/service";
import style from "../styles/header.module.scss";
import { useActions } from "../hooks/useAction";
import { IAnimeChoice } from "../types/anime";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchArray, setSearchArray]: any[] = useState([]);
  const [chosenAnime, setChosenAnime] = useState<null | number>(null);
  const [dispatchedAnime, setDispatchedAnime]: any = useState([]);

  const { setAnime } = useActions();

  useEffect(() => {
    if (searchQuery.length > 2) {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}`)
        .then((response: ISearch) => {
          if (response.data.results.length > 5) {
            response.data.results.length = 5;
          }
          setSearchArray(response.data.results);
        });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (chosenAnime) {
      axios
        .get(`https://api.jikan.moe/v3/anime/${chosenAnime}`)
        .then((response: IAnimeChoice) => {
          setDispatchedAnime(setAnime(response.data).payload);
        });
    }
  }, [chosenAnime]);

  return (
    <div className={style.search}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search anime..."
        className={style.search__field}
      />
      <ul
        className={
          searchQuery.length < 3
            ? style.search_popup
            : style.search_popup__active
        }
      >
        {searchArray.map((obj: TResults) => (
          <li
            className={style.search_popup__li}
            key={obj.mal_id}
            onClick={() => {
              setChosenAnime(obj.mal_id);
              setSearchQuery("");
            }}
          >
            {obj.title}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
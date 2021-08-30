import React, { useState, useEffect } from "react";
import style from "../styles/header.module.scss";
import axios from "axios";
import { ISearch, TResults } from "../types/service";
const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchArray, setSearchArray]: any[] = useState([]);
  const [chosenAnime, setChosenAnime] = useState<null | number>(null);

  useEffect(() => {
    if (searchQuery.length > 2) {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}`)
        .then((response: ISearch) => {
          if (response.data.results.length > 5) {
            response.data.results.length = 5;
          }
          console.log(response);

          setSearchArray(response.data.results);
        });
    }
  }, [searchQuery]);

  return (
    <div className={style.search}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search..."
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

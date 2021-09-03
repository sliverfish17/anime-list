import { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/main.module.scss";
import { getAnime, getCurrentUser } from "../utils/api";
import RightBarContent from "./RightBarContent";

const RightBar: React.FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { items }: any = useTypedSelector((state) => state.displayedAnime);
  const { list } = useTypedSelector((state) => state.activeList);

  const { setNewAnime } = useActions();

  console.log(items.map((e) => e));

  useEffect(() => {
    (async () => {
      if (user) {
        const data = await getCurrentUser(user.uid);
        if (!data) return;
        const animes = await getAnime(data[list]);
        if (animes) {
          setNewAnime(animes);
        }
      } else return;
    })();
  }, [list]);

  return (
    <div className={style.right}>
      <div className={style.sort}>
        <div className={style.search}>
          Search
          <input type="text" name="search" className={style.search__field} />
        </div>
        <div className={style.search}>
          Year
          <input type="text" name="search" className={style.search__field} />
        </div>
        <div className={style.search}>
          Sort by
          <select defaultValue="" className={style.search__field}>
            <option disabled></option>
            <option>Name (A-z)</option>
            <option>Name (Z-a)</option>
            <option>Date added</option>
          </select>
        </div>
      </div>
      {items.map((data) => data.map((info) => <RightBarContent info={info} />))}
    </div>
  );
};

export default RightBar;

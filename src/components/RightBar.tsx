import { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/main.module.scss";
import { getAnime, getCurrentUser } from "../utils/api";
import RightContent from "./RightContent";

const RightBar = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { items }: any = useTypedSelector((state) => state.displayedAnime);
  const { list } = useTypedSelector((state) => state.activeList);

  const { setNewAnime } = useActions();

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
          <select defaultValue="" className={style.search__field} name="" id="">
            <option disabled></option>
            <option value="Name (A-z)">Name (A-z)</option>
            <option value="Name (Z-a)">Name (Z-a)</option>
            <option value="Date added">Date added</option>
          </select>
        </div>
      </div>

      {items.length
        ? items.map((data) => <RightContent data={data} key={data} />)
        : null}
    </div>
  );
};

export default RightBar;

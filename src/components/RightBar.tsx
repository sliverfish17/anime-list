import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/main.module.scss";
import { UserState } from "../types/user";
import { getUserInfo } from "../utils/api";

const RightBar = () => {
  const { user }: UserState = useTypedSelector((state) => state.user);

  console.log(getUserInfo(user?.uid).then((e) => e));

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
    </div>
  );
};

export default RightBar;

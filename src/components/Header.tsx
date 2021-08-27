import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/header.module.scss";

const Header = () => {
  const { user } = useTypedSelector((state) => state);

  return (
    <div className={style.header}>
      {
        <>
          {!user.user ? (
            <div className={style.logoBlock}>
              <div className={style.logo}></div>
              <span>AniList</span>
            </div>
          ) : (
            <div className={style.logoBlock__logged}>
              <div className={style.logo}></div>
              <span>AniList</span>
              <div className={style.search}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className={style.search__field}
                />
              </div>

              <img
                src={user.user.photoURL}
                alt="userPhoto"
                className={style.picture}
              />
            </div>
          )}
        </>
      }
    </div>
  );
};

export default Header;

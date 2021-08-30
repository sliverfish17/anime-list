import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import style from "../styles/header.module.scss";
import SearchBar from "./SearchBar";

const Header = () => {
  const { user } = useTypedSelector((state) => state);
  const { setLogOut } = useActions();

  const handleLogOut = () => {
    setLogOut();
  };

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
              <SearchBar />
              <img
                src={user.user.photoURL}
                alt="userPhoto"
                className={style.picture}
              />
              <button onClick={handleLogOut} className={style.logout}>
                Logout
              </button>
            </div>
          )}
        </>
      }
    </div>
  );
};

export default Header;

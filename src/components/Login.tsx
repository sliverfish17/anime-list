import firebase from "firebase";
import { useActions } from "../hooks/useAction";
import style from "../styles/main.module.scss";
import { UserLogin } from "../types/user";
import girl from "../assets/img/zeroTwo.svg";
import { useState } from "react";
import LoginModal from "./Modal/LoginModal";

const Login: React.FC = () => {
  const auth = firebase.auth();

  const { setUserData, setLoggedIn } = useActions();

  const [modal, setModalActive] = useState(false);

  const outsideClick = (e: any) => {
    if (e.target.className === "modal active") {
      setModalActive(false);
    }
  };

  const toggleModal = () => {
    setModalActive((store) => !store);
  };

  const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user }: UserLogin = await auth.signInWithPopup(provider);
    setLoggedIn();
    setUserData(user);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.content__left}>
          <p className={style.title}>A new level of anime lists</p>
          <span className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            ea numquam laboriosam saepe consequatur in exercitationem, assumenda
            velit voluptates sunt ex suscipit ipsum quia esse repudiandae autem
            provident! Ad, molestiae.
          </span>
          <button className={style.btn} onClick={toggleModal}>
            Start now!
          </button>
        </div>
        <div className={style.content__right}>
          <img src={girl} alt="girl" className={style.girl} />
          <div className={style.round}></div>
        </div>
      </div>
      {modal && (
        <LoginModal active={modal} outsideClick={outsideClick}></LoginModal>
      )}
    </div>
  );
};

export default Login;

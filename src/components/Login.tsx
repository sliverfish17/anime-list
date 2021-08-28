import { useState } from "react";

import LoginModal from "./Modal/LoginModal";

import style from "../styles/main.module.scss";
import modalStyle from "../styles/modal.module.scss";

import girl from "../assets/img/zeroTwo.svg";

const Login: React.FC = () => {
  const [modal, setModalActive] = useState(false);

  const outsideClick = (e: any) => {
    if (e.target.className === modalStyle.modal_active) {
      setModalActive(false);
    }
  };

  const toggleModal = () => {
    setModalActive((store) => !store);
  };

  return (
    <div className={style.wrapper_login}>
      {modal && (
        <LoginModal active={modal} outsideClick={outsideClick}></LoginModal>
      )}
      <div className={style.content}>
        <div className={style.content__left}>
          <p className={style.title}>A new level of anime lists</p>
          <span className={style.description}>
            This is a unique website where you can manage lists with you
            favourite anime, sort it and find some new titles to enjoy! Share
            your list with friends and compare how bigger and cooler your list
            is!
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
    </div>
  );
};

export default Login;

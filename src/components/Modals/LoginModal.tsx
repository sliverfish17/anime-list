import React from "react";
import { firebase } from "../../firebase";
import { auth } from "../../firebase";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/modal-login.module.scss";
import googleLogo from "../../assets/img/googleLogo.svg";
import githubLogo from "../../assets/img/githubLogo.svg";
import { UserLogin } from "../../types/user";
import { loginCheck } from "../../utils/api";
import Portal from "./Portal";

interface LoginModalProps {
  active: boolean;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  active,
  outsideClick,
}) => {
  const { setLoggedIn, setUserData } = useActions();

  const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user }: UserLogin = await auth.signInWithPopup(provider);
    loginCheck(user?.displayName, user?.email, user?.photoURL, user?.uid);
    setLoggedIn();
  };

  const loginGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const { user }: UserLogin = await auth.signInWithPopup(provider);
    setUserData(user);
    loginCheck(user?.displayName, user?.email, user?.photoURL, user?.uid);
    setLoggedIn();
  };

  return (
    <Portal>
      <div
        className={active ? style.modal__active : style.modal}
        onClick={outsideClick}
      >
        <div
          className={active ? style.modal_content__active : style.modal_content}
        >
          <div>
            <h1>Sign in</h1>
            <hr />
            <div className={style.methods} onClick={loginGoogle}>
              <div className={style.round}>
                <img
                  src={googleLogo}
                  alt="googleLogo"
                  className={style.logos}
                />
              </div>

              <span>Login with Google</span>
            </div>
            <div className={style.methods} onClick={loginGithub}>
              <div>
                <div className={style.round}>
                  <img
                    src={githubLogo}
                    alt="googleLogo"
                    className={style.logos}
                  />
                </div>
              </div>
              <span>Login with GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default LoginModal;

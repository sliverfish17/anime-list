import firebase from "firebase";
import { useActions } from "../hooks/useAction";
import style from "../styles/main.module.scss";
import { UserLogin } from "../types/user";

const Login = () => {
  const auth = firebase.auth();
  const { setUserData, setLoggedIn } = useActions();

  const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user }: UserLogin = await auth.signInWithPopup(provider);
    setLoggedIn();
    setUserData(user);
  };

  return (
    <div className={style.wrapper}>
      <button onClick={loginGoogle}>login</button>
    </div>
  );
};

export default Login;

import Header from "./components/Header";
import AppRouter from "./utils/AppRouter";
import "./styles/app.scss";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "anime-8d4be.firebaseapp.com",
  projectId: "anime-8d4be",
  storageBucket: "anime-8d4be.appspot.com",
  messagingSenderId: "810152201336",
  appId: "1:810152201336:web:202fbd0424f291456b718d",
  measurementId: "G-PRK95M5GMV",
});

function App() {
  return (
    <div className="app">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;

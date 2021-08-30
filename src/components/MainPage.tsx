import { useEffect, useState } from "react";
import style from "../styles/main.module.scss";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import modalStyle from "../styles/modal-anime.module.scss";
import AnimeModal from "./Modals/AnimeModal";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TAnime } from "../types/anime";
import { useActions } from "../hooks/useAction";

const MainPage: React.FC = () => {
  const { chosenAnime }: TAnime = useTypedSelector((state) => state.anime);
  const { hideChosenAnime } = useActions();

  const [modal, setModalActive] = useState(false);

  const outsideClick = (e: any) => {
    if (e.target.className === modalStyle.modal__active) {
      setModalActive(false);
      hideChosenAnime();
    }
  };

  const toggleModal = () => {
    setModalActive((store) => !store);
  };

  useEffect(() => {
    if (chosenAnime.title) {
      toggleModal();
    }
  }, [chosenAnime]);

  return (
    <div className={style.wrapper}>
      {modal && (
        <AnimeModal
          data={chosenAnime}
          active={modal}
          outsideClick={outsideClick}
        ></AnimeModal>
      )}
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default MainPage;

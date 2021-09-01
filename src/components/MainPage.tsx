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
  const { chosen }: TAnime = useTypedSelector((state) => state.shownAnime);

  const { hideChosenAnime, addNewAnime } = useActions();

  const [modal, setModalActive] = useState(false);

  useEffect(() => {
    if (chosen.title) {
      toggleModal();
    }
  }, [chosen]);

  const outsideClick = (e: any) => {
    if (
      e.target.className === modalStyle.modal__active ||
      e.target.className === modalStyle.anime__close_btn
    ) {
      setModalActive(false);
      hideChosenAnime();
    }
  };

  const close = () => {
    console.log("log", chosen);

    setModalActive(false);
    hideChosenAnime();
    addNewAnime(chosen);
  };

  const toggleModal = () => {
    setModalActive((store) => !store);
  };

  return (
    <div className={style.wrapper}>
      {modal && (
        <AnimeModal
          data={chosen}
          active={modal}
          outsideClick={outsideClick}
          close={close}
        ></AnimeModal>
      )}
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default MainPage;

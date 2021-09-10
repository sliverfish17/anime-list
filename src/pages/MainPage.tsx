import { useEffect, useState } from "react";
import style from "../styles/main.module.scss";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import modalStyle from "../styles/modal-anime.module.scss";
import AnimeModal from "../components/Modals/AnimeModal";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import { TList } from "../types/list";

const MainPage: React.FC = () => {
  const { chosen }: any = useTypedSelector((state) => state.shownAnime);
  const { list }: TList = useTypedSelector((state) => state.activeList);

  const { hideChosenAnime, addNewAnime } = useActions();

  const [modal, setModalActive] = useState(false);

  useEffect(() => {
    if (chosen.title) {
      toggleModal();
    }
  }, [chosen]);

  const outsideClick = (e) => {
    if (
      e.target.className === modalStyle.modal__active ||
      e.target.className === modalStyle.anime__close_btn ||
      e.target.className === modalStyle.options__icon ||
      e.target.className === modalStyle.options__btn
    ) {
      setModalActive(false);
      hideChosenAnime();
    }
  };

  const closeAndAdd = (newList: string) => {
    setModalActive(false);
    hideChosenAnime();
    if (newList === list) addNewAnime(chosen);
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
          closeAndAdd={closeAndAdd}
        ></AnimeModal>
      )}
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default MainPage;

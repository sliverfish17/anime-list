import React from "react";
import style from "../../styles/modal.module.scss";
interface AnimeModalProps {
  active: boolean;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
}

const AnimeModal: React.FC<AnimeModalProps> = ({ active, outsideClick }) => {
  return (
    <div
      className={active ? style.modal_active : style.modal}
      onClick={outsideClick}
    >
      <div
        className={active ? style.modal_content_active : style.modal_content}
      >
        <div>
          <h1>Sign in</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AnimeModal;

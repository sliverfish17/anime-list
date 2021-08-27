import React from "react";
import "../../styles/modal.scss";

interface ModalMapProps {
  active: boolean;
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
}

export const ModalMap: React.FC<ModalMapProps> = ({ active, outsideClick }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={outsideClick}>
      <div className={active ? "modal_content active" : "modal_content"}>
        <div></div>
      </div>
    </div>
  );
};

export default ModalMap;

import React from "react";
import { useActions } from "../hooks/useAction";

const MainPage = () => {
  const { setLogOut } = useActions();

  const handleLogOut = () => {
    setLogOut();
  };

  return (
    <div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default MainPage;

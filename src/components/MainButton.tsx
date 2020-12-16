import React from "react";

//types
import { MainButtonProps } from "./Types";

//constants
import { START } from "../constants";

const MainButton: React.FC<MainButtonProps> = ({
  isStop,
  events,
}): JSX.Element => {
  return (
    <div
      className={`button ${isStop ? "start-button" : "stop-button"}`}
      onClick={() => events(START)}
    >
      {isStop ? "START" : "STOP"}
    </div>
  );
};

export default MainButton;

import React from "react";

//types
import { WaitButtonProps } from "./Types";

//constants
import { WAIT } from "../constants";

const WaitButton: React.FC<WaitButtonProps> = ({ events }): JSX.Element => {
  return (
    <div className="button secondary-button" onClick={() => events(WAIT)}>
      WAIT
    </div>
  );
};

export default WaitButton;

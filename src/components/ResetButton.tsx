import React from "react";

//types
import { ResetButtonProps } from "./Types";

//constants
import { RESET } from "../constants";

const ResetButton: React.FC<ResetButtonProps> = ({ events }): JSX.Element => {
  return (
    <div className="button secondary-button" onClick={() => events(RESET)}>
      RESET
    </div>
  );
};

export default ResetButton;

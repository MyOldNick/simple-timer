import React from "react";

//types
import { TimerProps } from "./Types";

const Timer: React.FC<TimerProps> = ({ timer }): JSX.Element => {
  return <div className="timer">{timer.toLocaleTimeString()}</div>;
};

export default Timer;

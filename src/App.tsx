import React, { useState, useEffect } from "react";

//components
import Timer from "./components/Timer";
import MainButton from "./components/MainButton";
import WaitButton from "./components/WaitButton";
import ResetButton from "./components/ResetButton";

//constants
import { START, WAIT, RESET } from "./constants";

//styles
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const [isStop, setIsStop] = useState<boolean>(true); //для остановки/старта
  const [timer, setTimer] = useState<Date>(new Date("0")); //таймер
  const [click, setClick] = useState<Date>(); //для отслеживания когда сделали клик
  const [isWait, setIsWait] = useState<boolean>(false); //чтобы знать, нужно ли сбрасывать таймер при нажатии start/stop

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isStop) {
        //обновление таймера, можно все разу пихнуть в setTimer, но тогда не очень читабельно
        const updateTimer: Date = new Date(
          timer.setSeconds(timer.getSeconds() + 1)
        );
        setTimer(updateTimer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isStop]);


  //можно здесь юзать MobX/Redux и раскидать все по файлам и папочкам, но кода не оч много
  const events = (action: string): void => {
    switch (action) {
      case START:
        start();
        break;
      case WAIT:
        wait();
        break;
      case RESET:
        reset();
        break;
    }
  };

  const start = (): void => {
    setIsStop(!isStop);
    !isWait && setTimer(new Date("0"));
    isWait && setIsWait(false)
  };

  const wait = (): void => {
    //первый костыль который пришел в голову, не юзая DoubleClick
    if (!click) {
      setClick(new Date());
    } else if (click) {
      const time: Date = new Date();
      const interval: number = time.getTime() - click.getTime();
      setClick(undefined);

      if (interval <= 300) {
        setIsStop(true);
        setIsWait(true);
      }
    }
  };

  const reset = (): void => {
    setTimer(new Date("0"));
  };

  return (
    <div className="container">
      <Timer timer={timer} />
      <MainButton isStop={isStop} events={events} />
      <WaitButton events={events} />
      <ResetButton events={events} />
    </div>
  );
};

export default App;

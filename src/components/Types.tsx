export type TimerProps = {
  timer: Date;
};

export type MainButtonProps = {
  isStop: boolean;
  events: (action: string) => void;
};

export type WaitButtonProps = {
  events: (action: string) => void;
};

export type ResetButtonProps = {
  events: (action: string) => void;
};

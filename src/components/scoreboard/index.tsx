import { useEffect, useState } from "react";

interface Params {
  count: number;
  isComplete: boolean;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function Scoreboard({ count, isComplete, setTime }: Params) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = `${minutes >= 10 ? minutes : "0" + minutes}:${
    seconds >= 10 ? seconds : "0" + seconds
  }`;

  useEffect(() => {
    setTime(time);
    if (isComplete) return;
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
    const timeout = setTimeout(() => {
      setSeconds((cur) => cur + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds, minutes, isComplete]);

  return (
    <div className="countBox">
      <p>Количество ходов: {count}</p>
      <p>Время: {time}</p>
    </div>
  );
}

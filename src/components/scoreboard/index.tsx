import useTimer from "@/utils/useTimer";

interface Params {
  count: number;
}

export default function Scoreboard({ count }: Params) {
  return (
    <div className="countBox">
      <h2>Количество ходов: {count}</h2>
      <h2>Время: {useTimer()}</h2>
    </div>
  );
}

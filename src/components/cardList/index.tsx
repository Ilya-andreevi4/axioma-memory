import { useState, useCallback, useMemo, useEffect } from "react";
import Settings from "../setting";
import { Link } from "react-router-dom";
import cards from "@/utils/cardsData";
import { ICard } from "@/models/ICard";
import randomizeCards from "@/utils/randomize";
import "./cardList.css";
import Scoreboard from "../scoreboard";

interface Props {
  className: string;
}

export default function CardsList({ className }: Props) {
  const cardsData: ICard[] = useMemo(() => randomizeCards(cards), []);
  const [isComplete, setIsComplete] = useState(false);
  const [openedCards, setOpenedCards] = useState(new Map());
  const [resolvedCards, setResolvedCards] = useState(new Map());
  const [modalActive, setModalActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    if (openedCards.size === 2) {
      setIsLoading(true);

      setTimeout(() => {
        const openedCardsKeys = Array.from(openedCards.keys());
        if (
          cardsData[openedCardsKeys[0]].name ===
          cardsData[openedCardsKeys[1]].name
        ) {
          let resolvedCardsUpdated = resolvedCards.set(
            openedCardsKeys[0],
            true,
          );
          resolvedCardsUpdated = resolvedCardsUpdated.set(
            openedCardsKeys[1],
            true,
          );
          setResolvedCards(new Map(resolvedCardsUpdated));
          setIsComplete(resolvedCardsUpdated.size === 18);
          setCount(count + 1);
          setOpenedCards(new Map());
          setIsLoading(false);
        } else {
          setCount(count + 1);
          setOpenedCards(new Map());
          setIsLoading(false);
        }
      }, 1000);
    }
  }, [openedCards, cardsData, resolvedCards, setOpenedCards, count]);

  const openCard = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>, idx: number) => {
      if (openedCards.size > 1) {
        return e.stopPropagation();
      }
      if (isLoading) {
        return e.stopPropagation();
      } else if (openedCards.size < 2) {
        setOpenedCards(new Map(openedCards.set(idx, true)));
      }
    },
    [setOpenedCards, openedCards, isLoading],
  );

  return (
    <>
      <Scoreboard count={count} isComplete={isComplete} setTime={setTime} />
      <div className="table">
        {!isComplete ? (
          <div className={className}>
            {cardsData.map((card, idx) => {
              return (
                <div key={idx}>
                  <img
                    alt=""
                    src={openedCards.get(idx) ? card.imgSrc : card.back}
                    className={"cardImg"}
                    draggable="false"
                    style={{
                      display: resolvedCards.get(idx) ? "none" : "block",
                    }}
                    onClick={(e) => openCard(e, idx)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Settings active={modalActive} setActive={setModalActive}>
            <>
              <h2>Поздравляю! Вы открыли все пары карт!</h2>
              <p>Всего ходов: {count}</p>
              <p>Время прохождения: {time}</p>
              <Link to="/" className="quitButton">
                <span className="textQuit">Повторить</span>
              </Link>
            </>
          </Settings>
        )}
      </div>
    </>
  );
}

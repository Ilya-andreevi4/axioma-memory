import { Link } from "react-router-dom";
import "./startPage.css";
import { useState } from "react";
import Settings from "@/components/setting";
const StartPage = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <div className="start-page">
      <header>
        <button
          onClick={() => setOpenInfo((prev) => !prev)}
          className="button-info"
        >
          <p className="title-info">?</p>
        </button>
      </header>
      <div className="content">
        <h1 className="name-game">Аксиома Мемори</h1>
        <Link to="/GamePage" className="button-start">
          <p className="title-start">Начать игру</p>
        </Link>
      </div>
      {openInfo && (
        <Settings active={openInfo} setActive={setOpenInfo}>
          <>
            <h2>Правила игры</h2>
            <p>
              Перед вами будет четное количество парных карточек, рубашками
              наверх.
            </p>
            <p>
              Цель игры — как можно быстрее закончить ее, собрав все пары
              карточек, открывая по две карточки сразу.
            </p>
            <p>
              Забрать пару карточек получиться только открыв две одинаковые.
              Открыв карточки с разными картинками, они перевернуться обратно,
              оставаясь в игре.
            </p>
            <p>Открытие карточек происходит нажатием левой кнопкой мыши.</p>
            <button
              onClick={() => setOpenInfo((prev) => !prev)}
              className="button-info"
            >
              <p className="title-info quit">Х</p>
            </button>
          </>
        </Settings>
      )}
    </div>
  );
};

export default StartPage;

import Settings from "../../components/setting";
import { useState } from "react";
import CardsList from "@/components/cardList";
import { Link } from "react-router-dom";
import SettingsLogo from "@/assets/images/setting.png";
import "./gamePage.css";

const GamePage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="gamePage">
      <div className="playersScores">
        <button className="settingsImg" onClick={() => setModalActive(true)}>
          <img
            src={SettingsLogo}
            alt="Settings"
            draggable="false"
            className="settingIcon"
          />
        </button>
      </div>

      <CardsList className="cardsList" />

      <Settings active={modalActive} setActive={setModalActive}>
        <>
          <h1>Настройки</h1>
          <Link to="/" className="quitButton">
            <p className="textQuit">Выход</p>
          </Link>
        </>
      </Settings>
    </div>
  );
};

export default GamePage;

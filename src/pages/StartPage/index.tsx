import { Link } from "react-router-dom";
import "./startPage.css";
const StartPage = () => {
  return (
    <div className="start-page">
      <header></header>
      <div className="content">
        <h1 className="name-game">Аксиома Мемори</h1>
        <Link to="/GamePage" className="button-start">
          <p className="title-start">Начать игру</p>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;

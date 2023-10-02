import { Link } from "react-router-dom";
import "../StartPage/startPage.css";

const NotFound = () => {
  return (
    <div className="start-page">
      <div className="content">
        <h1 className="name-game">Такой страницы не существует</h1>
        <Link to="/" className="button-start">
          <p className="title-start">На Главную</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

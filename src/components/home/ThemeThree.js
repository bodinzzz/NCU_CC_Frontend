import ThemeThreeImg from "../../assets/image/Home/ThemeThreeImg.svg";
import "./Theme.scss";
import { Link } from "react-router-dom";

function ThemeThree() {
  return (
    <div className="home-theme-3">
      <div className="home-theme__info">
        <div>
          <div className="home-theme__title">職務類型大比拚</div>
          <div className="home-theme__intro">
            決定升學的我該選擇哪個領域進修?
            <br /> 走入職場的我又該如何選擇職位?
            <br /> 各個系所有什麼差別呢?
          </div>
        </div>
        <Link className="home-theme__nav-btn" to="/Career">
          <span>看看畢業生各類職務資訊</span>
        </Link>
      </div>
      <img src={ThemeThreeImg} className="home-theme__image" alt="theme-img" />
    </div>
  );
}

export default ThemeThree;

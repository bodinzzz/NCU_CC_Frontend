import ThemeTwoImg from "../../assets/image/Home/ThemeTwoImg.svg";
import "./Theme.scss";
import { Link } from "react-router-dom";

function ThemeTwo() {
  return (
    <div className="home-theme-2">
      <img src={ThemeTwoImg} className="home-theme__image" alt="theme-img" />
      <div className="home-theme__info">
        <div>
          <div className="home-theme__title">畢業後在做什麼</div>
          <div className="home-theme__intro">
            決定升學的我該選擇哪個領域進修?
            <br />
            走入職場的我又該如何選擇職位?
            <br />
            各個系所有什麼差別呢?
          </div>
        </div>
        <Link className="home-theme__nav-btn" to="/Graduated">
          <span>看看學長姐都在做什麼</span>
        </Link>
      </div>
    </div>
  );
}

export default ThemeTwo;

import ThemeOneImg from "../../assets/image/Home/ThemeOneImg.svg";
import "./Theme.scss";
import { Link } from "react-router-dom";

function ThemeOne() {
  return (
    <div className="home-theme-1">
      <img src={ThemeOneImg} className="home-theme__img" alt="theme-img" />
      <div className="home-theme__info">
        <div>
          <div className="home-theme__title">未來道路選擇</div>
          <div className="home-theme__intro">
            繼續升學增進自我?
            <br /> 開始工作走進社會?
            <br /> 畢業後我該選擇往哪個道路走呢?
          </div>
        </div>
        <Link className="home-theme__nav-btn" to="/Future">
          <span>看看學長姐如何選擇</span>
        </Link>
      </div>
    </div>
  );
}

export default ThemeOne;

import ThemeTwoImg from "../../assets/image/Home/ThemeTwoImg.svg";
import "./Theme.scss";

function ThemeTwo() {
  return (
    <div className="theme-2">
      <div className="theme-info">
        <div>
          <div className="theme-title">畢業後在做什麼</div>
          <div className="theme-intro">
            決定升學的我該選擇哪個領域進修?
            <br />
            走入職場的我又該如何選擇職位?
            <br />
            各個系所有什麼差別呢?
          </div>
        </div>
        <div className="nav-button">看看學長姐都在做什麼</div>
      </div>
      <img src={ThemeTwoImg} className="theme-img" alt="theme-img" />
    </div>
  );
}

export default ThemeTwo;

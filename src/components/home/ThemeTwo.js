import ThemeTwoImg from "../../assets/image/Home/ThemeTwoImg.svg";
import "./Theme.scss";

function ThemeTwo() {
  return (
    <div className="theme-2">
      <div className="theme__info">
        <div>
          <div className="theme__title">畢業後在做什麼</div>
          <div className="theme__intro">
            決定升學的我該選擇哪個領域進修?
            <br />
            走入職場的我又該如何選擇職位?
            <br />
            各個系所有什麼差別呢?
          </div>
        </div>
        <div className="theme__nav-button">看看學長姐都在做什麼</div>
      </div>
      <img src={ThemeTwoImg} className="theme__img" alt="theme-img" />
    </div>
  );
}

export default ThemeTwo;

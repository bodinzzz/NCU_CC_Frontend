import ThemeOneImg from "../../assets/image/Home/ThemeOneImg.svg";
import "./Theme.scss";

function ThemeOne() {
  return (
    <div className="theme-1">
      <img src={ThemeOneImg} className="theme__img" alt="theme-img" />
      <div className="theme__info">
        <div>
          <div className="theme__title">未來道路選擇</div>
          <div className="theme__intro">
            繼續升學增進自我?
            <br /> 開始工作走進社會?
            <br /> 畢業後我該選擇往哪個道路走呢?
          </div>
        </div>
        <div className="theme__nav-button">看看學長姐如何選擇</div>
      </div>
    </div>
  );
}

export default ThemeOne;

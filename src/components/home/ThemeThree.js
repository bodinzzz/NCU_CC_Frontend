import ThemeThreeImg from "../../assets/image/Home/ThemeThreeImg.svg";
import "./Theme.scss";

function ThemeThree() {
  return (
    <div className="theme-3">
      <img src={ThemeThreeImg} className="theme-img" alt="theme-img" />
      <div className="theme-info">
        <div>
          <div className="theme-title">未來道路選擇</div>
          <div className="theme-intro">
            繼續升學增進自我?
            <br /> 開始工作走進社會?
            <br /> 畢業後我該選擇往哪個道路走呢?
          </div>
        </div>
        <div className="nav-button">看看學長姐如何選擇</div>
      </div>
    </div>
  );
}

export default ThemeThree;

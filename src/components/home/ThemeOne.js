import ThemeOneImg from "../../assets/image/Home/ThemeOneImg.svg";
import "./Theme.scss";

function ThemeOne() {
  return (
    <>
      <img src={ThemeOneImg} className="themeImg" alt="themeImg" />
      <div className="themeInfo">
        <div>
          <div className="themeTitle">未來道路選擇ㄚㄚㄚㄚㄚ</div>
          <div className="themeIntro">
            繼續升學增進自我?
            <br /> 開始工作走進社會?
            <br /> 畢業後我該選擇往哪個道路走呢?
          </div>
        </div>
        <div className="navButton">看看學長姐如何選擇</div>
      </div>
    </>
  );
}

export default ThemeOne;

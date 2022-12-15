import "./ScrollSection.css";

// secondary container in home page
function ScrollSection({ backgroundColor }) {
  return (
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <div className="themeInfo">
        <div>
          <div className="themeTitle">未來道路選擇</div>
          <div className="themeIntro">
            繼續升學增進自我?
            <br /> 開始工作走進社會?
            <br /> 畢業後我該選擇往哪個道路走呢?
          </div>
        </div>
        <div className="navButton">看看學長姐如何選擇</div>
      </div>
    </div>
  );
}

export default ScrollSection;

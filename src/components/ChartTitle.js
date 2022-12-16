import "./ChartTitle.css";

function ChartTitle({ text }) {
  return (
    <div>
      <div className="chartTitle">
        <img src={InfoThemeOneIcon} alt="InfoThemeOneIcon" />
        <div className="chartTitleText">工學院 軟體工程研究所 學士 在畢滿一年後 : </div>
      </div>
    </div>
  );
}

export default ChartTitle;

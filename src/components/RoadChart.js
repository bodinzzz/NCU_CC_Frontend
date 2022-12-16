import "./RoadChart.css";
import StudyRoadImg from "../assets/image/Future/StudyRoadImg.svg";
import WorkRoadImg from "../assets/image/Future/WorkRoadImg.svg";
import OtherRoadImg from "../assets/image/Future/OtherRoadImg.svg";
import InfoThemeOneIcon from "../assets/icon/InfoThemeOneIcon.svg";
function RoadChart() {
  return (
    <div className="roadChart">
      <div className="chartTitle">
        <img src={InfoThemeOneIcon} alt="InfoThemeOneIcon" />
        <div className="chartTitleText">工學院 軟體工程研究所 學士 在畢滿一年後 : </div>
      </div>
      <div className="items">
        <div className="item">
          <img src={StudyRoadImg} className="roadImg" alt="StudyRoadImg" />
          <div>
            <div className="data" style={{ color: "#E37464" }}>
              60%
            </div>
            <div className="text">選擇繼續升學</div>
          </div>
        </div>
        <div className="item">
          <img src={WorkRoadImg} className="roadImg" alt="WorkRoadImg" />
          <div>
            <div className="data" style={{ color: "#F5CA60" }}>
              60%
            </div>
            <div className="text">選擇就業</div>
          </div>
        </div>
        <div className="item">
          <img src={OtherRoadImg} className="roadImg" alt="OtherRoadImg" />
          <div>
            <div className="data" style={{ color: "#6C8264" }}>
              60%
            </div>
            <div className="text">選擇其他道路</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadChart;

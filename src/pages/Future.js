import "./Future.css";
import RoadChart from "../components/RoadChart.js";

function Future() {
  return (
    <div className="container">
      <div className="sectionContainer">
        <div className="section" style={{ backgroundColor: "white" }}>
          <div className="themeTitle">未來道路選擇</div>
          <div className="inputLabel">院所</div>
        </div>
        <div className="section">
          <RoadChart />
        </div>
        <div className="section" style={{ backgroundColor: "red" }}></div>
      </div>
    </div>
  );
}

export default Future;

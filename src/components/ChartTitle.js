import "./ChartTitle.css";
import InfoThemeOneIcon from "../assets/icon/InfoThemeOneIcon.svg";
import { Colors } from "../utils";
const { textPrimary } = Colors;

function ChartTitle({ text }) {
  return (
    <div>
      <div className="chartTitle">
        <img src={InfoThemeOneIcon} alt="InfoThemeOneIcon" />
        <div className="chartTitleText" style={{ color: textPrimary }}>
          {text}
        </div>
      </div>
    </div>
  );
}

export default ChartTitle;

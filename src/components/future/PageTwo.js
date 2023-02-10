import StudyRoadImg from "../../assets/image/Future/StudyRoadImg.svg";
import WorkRoadImg from "../../assets/image/Future/WorkRoadImg.svg";
import OtherRoadImg from "../../assets/image/Future/OtherRoadImg.svg";
import InfoThemeOneIcon from "../../assets/icon/InfoThemeOneIcon.svg";
import "./PageTwo.scss";
import SourceTooltip from "../elements/SourceTooltip";

const element = [
  { image: StudyRoadImg, title: "選擇繼續升學" },
  { image: WorkRoadImg, title: "選擇就業" },
  { image: OtherRoadImg, title: "選擇其他道路" },
];

const workingStatusData = [
  {
    id: "a",
    name: "繼續升學",
    percentage: 60,
  },
  {
    id: "b",
    name: "就業",
    percentage: 30,
  },
  {
    id: "c",
    name: "其他道路",
    percentage: 10,
  },
];

const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士畢滿一有效問卷200份(回收率70%)\n學士畢滿三有效問卷200份(回收率70%)\n學士畢滿五有效問卷200份(回收率70%)\n學士畢滿一有效問卷200份(回收率70%)\n學士畢滿三有效問卷200份(回收率70%)\n學士畢滿五有效問卷200份(回收率70%)\n學士畢滿一有效問卷200份(回收率70%)\n學士畢滿三有效問卷200份(回收率70%)`;

// ChartElement: Contains image/percentage/title
/*
  Parameters:
    data: object
    index: string
*/
function ChartElement({ data, index, element }) {
  return (
    <div
      className="future-page-2__chart__element"
      key={"future-page-2__chart__element" + index}
    >
      <img
        src={element.image}
        className="future-page-2__chart__element__image"
        alt={data.name}
      />
      <div className="future-page-2__chart__element__info">
        {/* Declare different classes by index */}
        <div
          className={
            "future-page-2__chart__element__info__percentage--" + index
          }
        >{`${data.percentage}%`}</div>
        <div className="future-page-2__chart__element__info__title">
          {element.title}
        </div>
      </div>
    </div>
  );
}

function PageTwo({ data }) {
  return (
    <div className="future-page-2">
      <div className="future-page-2__title">
        <SourceTooltip icon={InfoThemeOneIcon} text={tooltipText} />
        <span>
          工學院 軟體工程研究所 學士 <br />
          在畢滿一年後 :
        </span>
      </div>
      <div className="future-page-2__chart">
        {workingStatusData.map((data, index) => (
          <ChartElement
            data={data}
            index={(index + 1).toString()}
            element={element[index]}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;

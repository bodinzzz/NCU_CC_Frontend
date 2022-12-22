import { useEffect } from "react";
import StudyRoadImg from "../../assets/image/Future/StudyRoadImg.svg";
import WorkRoadImg from "../../assets/image/Future/WorkRoadImg.svg";
import OtherRoadImg from "../../assets/image/Future/OtherRoadImg.svg";
import "./PageTwo.scss";

// ChartElement: Contains image/percentage/title
/*
  Parameters:
    data: object
    index: string
*/
function ChartElement({ data, index }) {
  return (
    <div
      className="future-page-2__chart__element"
      key={"future-page-2__chart__element" + index}
    >
      <img
        src={data.image}
        className="future-page-2__chart__element__image"
        alt={data.title}
      />
      <div className="future-page-2__chart__element__info">
        {/* Declare different classes by index */}
        <div
          className={
            "future-page-2__chart__element__info__percentage--" + index
          }
        >
          {`${data.percentage}%`}
        </div>
        <div className="future-page-2__chart__element__info__title">
          {data.title}
        </div>
      </div>
    </div>
  );
}

function PageTwo() {
  // const [chartData, setChartData] = useState([
  //   { image: StudyRoadImg },
  //   { image: WorkRoadImg },
  //   { image: OtherRoadImg },
  // ]);
  const chartData = [
    { image: StudyRoadImg, percentage: 60, title: "選擇繼續升學" },
    { image: WorkRoadImg, percentage: 30, title: "選擇就業" },
    { image: OtherRoadImg, percentage: 10, title: "選擇其他道路" },
  ];

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="future-page-2">
      <div className="future-page-2__title">
        工學院 軟體工程研究所 學士 在畢滿一年後 :
      </div>
      <div className="future-page-2__chart">
        {chartData.map((data, index) => (
          <ChartElement data={data} index={(index + 1).toString()} />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;

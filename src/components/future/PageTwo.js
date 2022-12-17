import { useEffect } from "react";
import StudyRoadImg from "../../assets/image/Future/StudyRoadImg.svg";
import WorkRoadImg from "../../assets/image/Future/WorkRoadImg.svg";
import OtherRoadImg from "../../assets/image/Future/OtherRoadImg.svg";
import "./PageTwo.scss";

function ChartElement({ data }) {
  return (
    <div className="future-page-2__chart__element">
      <img
        src={data.image}
        className="future-page-2__chart__element__img"
        alt="StudyRoadImg"
      />
      <div className="future-page-2__chart__element__info">
        <div className="future-page-2__chart__element__percentage">
          {data.percentage}
        </div>
        <div className="future-page-2__chart__element__title">{data.title}</div>
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
        {chartData.map((data) => (
          <ChartElement data={data} />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;

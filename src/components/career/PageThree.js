import { useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import "./PageThree.scss";
import Tooltip from "../elements/Tooltip";

function PageThree() {
  //   const chartData = [
  //     { image: StudyRoadImg, percentage: 60, title: "選擇繼續升學" },
  //     { image: WorkRoadImg, percentage: 30, title: "選擇就業" },
  //     { image: OtherRoadImg, percentage: 10, title: "選擇其他道路" },
  //   ];

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="future-page-2">
      <div className="future-page-2__title">
        <Tooltip icon={InfoThemeThreeIcon} text={tooltipText} />
        <span>建築營造類 國內 職務男女比 與 職場新鮮人月薪中位數 級距(畢滿一年)</span>
      </div>
    </div>
  );
}

export default PageThree;

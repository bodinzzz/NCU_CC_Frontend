import React from "react";
import "./PageThree.scss";
import InfoThemeTwoIcon from "../../assets/icon/InfoThemeTwoIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";
import ScrollableBarChart from "./ScrollableBarChart.js";

function PageThree({ data, topRef }) {
  /* DATA */
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n畢業滿1.3.5年合併統計`;

  return (
    <div className="graduated-page-3">
      <div className="graduated-page-3__title">
        <SourceTooltip icon={InfoThemeTwoIcon} text={tooltipText} />
        <span>
          <strong>工學院 軟體工程研究所</strong>
          <br /> 各系所畢業生職務類型 :
        </span>
      </div>
      <ScrollableBarChart data={data} />
      <ScrollToTopBtn theme={"2"} themeName={"graduated"} topRef={topRef} />
    </div>
  );
}

export default PageThree;

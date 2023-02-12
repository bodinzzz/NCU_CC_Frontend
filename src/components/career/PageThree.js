import React from "react";
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import MaleImg from "../../assets/image/Career/MaleImg.svg";
import FemaleImg from "../../assets/image/Career/FemaleImg.svg";
import "./PageThree.scss";
import SourceTooltip from "../elements/SourceTooltip";
// import ChartTooltip from "../elements/ChartTooltip.js";
// import ScrollPageNav from "../elements/ScrollPageNav";
// import RadioBtnGroup from "../elements/RadioBtnGroup";

function PageThree({ data }) {
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  useEffect(() => {
    const malePercentageDomestic = data[0].percentage[0] + "%";
    const femalePercentageDomestic = data[1].percentage[0] + "%";
    const malePercentageForeign = data[0].percentage[1] + "%";
    const femalePercentageForeign = data[1].percentage[1] + "%";

    // Set bar width
    document.getElementById("male-bar-domestic").style.width =
      malePercentageDomestic;
    document.getElementById("female-bar-domestic").style.width =
      femalePercentageDomestic;
    document.getElementById("male-bar-foreign").style.width =
      malePercentageForeign;
    document.getElementById("female-bar-foreign").style.width =
      femalePercentageForeign;
  }, []);

  return (
    <div className="career-page-3">
      {/* GENDER CHART */}
      <div className="career-page-3__chart-container">
        <div className="career-page-3__chart-container__title">
          <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
          <span>建築營造類 職務男女比</span>
        </div>
        <div className="career-page-3__gender-chart">
          <div className="career-page-3__gender-chart__label">
            <img src={MaleImg} />
            <span>男</span>
          </div>
          <div className="career-page-3__gender-chart__bar-container">
            <div className="career-page-3__gender-chart__bar-container__label">
              <span>{data[0].percentage[0]}%</span>
              <span>國內</span>
              <span>{data[1].percentage[0]}%</span>
            </div>
            <div className="career-page-3__gender-chart__bar">
              <div
                className="career-page-3__gender-chart__bar--male"
                id="male-bar-domestic"
              />
              <div
                className="career-page-3__gender-chart__bar--female"
                id="female-bar-domestic"
              />
            </div>
            <div className="career-page-3__gender-chart__bar-container__label">
              <span>{data[0].percentage[1]}%</span>
              <span>國外</span>
              <span>{data[1].percentage[1]}%</span>
            </div>
            <div className="career-page-3__gender-chart__bar">
              <div
                className="career-page-3__gender-chart__bar--male"
                id="male-bar-foreign"
              />
              <div
                className="career-page-3__gender-chart__bar--female"
                id="female-bar-foreign"
              />
            </div>
          </div>
          <div className="career-page-3__gender-chart__label">
            <img src={FemaleImg} />
            <span>女</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThree;

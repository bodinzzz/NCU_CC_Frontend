import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import MaleImg from "../../assets/image/Career/MaleImg.svg";
import FemaleImg from "../../assets/image/Career/FemaleImg.svg";
import "./PageThree.scss";
import SourceTooltip from "../elements/SourceTooltip";
import ChartTooltip from "../elements/ChartTooltip.js";
import ScrollPageNav from "../elements/ScrollPageNav";
import RadioBtnGroup from "../elements/RadioBtnGroup";

function PageThree() {
  const [selectedCareer, setSelectedCareer] = useState(0);
  const [selectedArea, setSelectedArea] = useState(0);

  const genderData = [
    {
      name: "男",
      percentage: [65, 25],
      fillColor: "#00BCD4",
    },
    {
      name: "女",
      percentage: [35, 75],
      fillColor: "#40FFFF",
    },
  ];

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  function setGenderChart() {
    const malePercentage = genderData[0].percentage + "%";
    const femalePercentage = genderData[1].percentage + "%";

    // SET BAR COLOR
    document.getElementById("male-bar").style.backgroundColor = genderData[0].fillColor;
    document.getElementById("female-bar").style.backgroundColor = genderData[1].fillColor;

    // SET BAR WIDTH
    document.getElementById("male-bar").style.width = malePercentage;
    document.getElementById("female-bar").style.width = femalePercentage;
  }

  // API Call
  useEffect(() => {
    setGenderChart();
  }, []);

  return (
    <div className="career-page-3">
      {/* <ScrollPageNav nowPage={3} /> */}
      {/* GENDER CHART */}
      <div className="career-page-3__chart-container">
        <div className="career-page-3__chart-container__title">
          <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
          <span>建築營造類</span>
          <RadioBtnGroup options={[{ name: "國內" }, { name: "國外" }]} selectedValue={selectedArea} setSelectedValue={setSelectedArea} type="" />
          <span>職務男女比</span>
        </div>
        <div className="career-page-3__gender-chart">
          <div className="career-page-3__gender-chart__items">
            <div className="career-page-3__gender-chart__items__item">
              <img src={MaleImg} />
              <span>男</span>
              <div className="career-page-3__gender-chart__items__item__percentage">{genderData[0].percentage}%</div>
            </div>
            <div className="career-page-3__gender-chart__items__item">
              <img src={FemaleImg} />
              <span>女</span>
              <div className="career-page-3__gender-chart__items__item__percentage">{genderData[1].percentage}%</div>
            </div>
          </div>
          <div className="career-page-3__gender-chart__bar">
            <div className="career-page-3__gender-chart__bar--male" id="male-bar" />
            <div className="career-page-3__gender-chart__bar--female" id="female-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThree;

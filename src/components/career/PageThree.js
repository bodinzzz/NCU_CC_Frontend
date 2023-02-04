import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import MaleImg from "../../assets/image/Career/MaleImg.svg";
import FemaleImg from "../../assets/image/Career/FemaleImg.svg";
import "./PageThree.scss";
import SourceTooltip from "../elements/SourceTooltip";
import ChartTooltip from "../elements/ChartTooltip.js";

function Chart({ data }) {
  return (
    <ResponsiveContainer width="70%" height={300}>
      <BarChart data={data} layout={"vertical"} barSize={50}>
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          hide={true}
        />
        <XAxis type="number" hide />
        <Tooltip content={<ChartTooltip />} cursor={false} />
        <Bar dataKey="range[1]">
          {data.map((entry, index) => (
            <Cell fill="#F5CA60" key={index} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function PageThree() {
  const [selectedCareer, setSelectedCareer] = useState(1);
  const genderData1 = [
    {
      careerName: "建築營造類",
      data: [
        { gender: "male", percentage: 65 },
        { gender: "female", percentage: 35 },
      ],
    },
    {
      careerName: "製造類",
      data: [
        { gender: "male", percentage: 20 },
        { gender: "female", percentage: 80 },
      ],
    },
  ];

  const genderData = [
    {
      name: "男",
      percentage: 65,
      fillColor: "#00BCD4",
    },
    {
      name: "女",
      percentage: 35,
      fillColor: "#40FFFF",
    },
  ];

  const data = [
    {
      id: "salary-bachelor",
      name: "學士",
      percentage: 2000,
      range: [31, 34],
    },
    {
      id: "salary-master",
      name: "碩士",
      percentage: 3000,
      range: [100, 110],
    },
    {
      id: "salary-doctor",
      name: "博士",
      percentage: 1000,
      range: [500, 1000],
    },
  ];

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  function setGenderChart() {
    // const malePercentage = genderData[selectedCareer].data[0].percentage;
    // const femalePercentage = genderData[selectedCareer].data[1].percentage;
    // SET BAR COLOR
    // if (malePercentage >= femalePercentage) {
    //   document.getElementById("male-bar").style.backgroundColor = "#00BCD4";
    //   document.getElementById("female-bar").style.backgroundColor = "#40FFFF";
    // } else {
    //   document.getElementById("male-bar").style.backgroundColor = "#00BCD4";
    //   document.getElementById("female-bar").style.backgroundColor = "#40FFFF";
    // }
    // SET BAR WIDTH
    // document.getElementById("male-bar").style.width = malePercentage + "%";
    // document.getElementById("female-bar").style.width = femalePercentage + "%";

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
      {/* GENDER CHART */}
      <div className="career-page-3__chart-container">
        <div className="career-page-3__chart-container__title">
          <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
          <span>建築營造類 國內 職務男女比</span>
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
          <div className="career-page-3__gender-chart__bars">
            <div className="career-page-3__gender-chart__bars__male-bar" id="male-bar" />
            <div className="career-page-3__gender-chart__bars__female-bar" id="female-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThree;

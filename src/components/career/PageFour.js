import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import MaleImg from "../../assets/image/Career/MaleImg.svg";
import FemaleImg from "../../assets/image/Career/FemaleImg.svg";
import "./PageFour.scss";
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

function PageFour() {
  const [selectedCareer, setSelectedCareer] = useState(1);

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

  return (
    <div className="career-page-4">
      {/* SALARY CHART */}
      <div className="career-page-4__chart-container">
        <div className="career-page-4__chart-container__title">
          <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
          <span>建築營造類 國內 職場新鮮人月薪中位數 級距(畢滿一年)</span>
        </div>
        <div className="career-page-4__salary-chart">
          <div className="career-page-4__salary-chart__labels">
            {data.map((salary, index) => (
              <div className="career-page-4__salary-chart__labels__label" key={salary.id}>
                <div className="career-page-4__salary-chart__labels__label__name">{salary.name}</div>
                <div className="career-page-4__salary-chart__labels__label__range">
                  {salary.range[0]}K-{salary.range[1]}K
                </div>
              </div>
            ))}
          </div>
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
}

export default PageFour;

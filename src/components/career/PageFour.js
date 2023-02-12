import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  LabelList,
} from "recharts";
import { useState, useEffect } from "react";
import InfoThemeThreeIcon from "../../assets/icon/InfoThemeThreeIcon.svg";
import MoneyBagImg from "../../assets/image/Career/MoneyBagImg.svg";
import "./PageFour.scss";
import SourceTooltip from "../elements/SourceTooltip";
import ChartTooltip from "../elements/ChartTooltip.js";
import ScrollPageNav from "../elements/ScrollPageNav";

// function Chart({ data }) {
//   return (
//     <ResponsiveContainer width="70%" height={300}>
//       <BarChart data={data} layout={"vertical"} barSize={50} margin={{ right: 50 }}>
//         <YAxis
//           type="category"
//           dataKey="name"
//           axisLine={false}
//           tickLine={false}
//           tickMargin={10}
//           style={{
//             fontSize: "1rem",
//             fontWeight: "bold",
//           }}
//           hide={true}
//         />
//         <XAxis type="number" hide />
//         <Tooltip content={<ChartTooltip />} cursor={false} />
//         <Bar dataKey="range[0][1]">
//           {data.map((entry, index) => (
//             <Cell fill="#FFDB83" key={index} />
//           ))}
//           <LabelList dataKey="percentage" position="right" formatter={(value) => value + "%"} />
//         </Bar>
//         <Bar dataKey="range[1][1]">
//           {data.map((entry, index) => (
//             <Cell fill="#FFC63B" key={index} />
//           ))}
//           <LabelList dataKey="percentage" position="right" formatter={(value) => value + "%"} />
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

function PageFour({ data }) {
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  return (
    <div className="career-page-4">
      {/* <ScrollPageNav nowPage={4} /> */}
      {/* SALARY CHART */}
      <div className="career-page-4__chart-container">
        <div className="career-page-4__chart-container__title">
          <SourceTooltip icon={InfoThemeThreeIcon} text={tooltipText} />
          <span>
            建築營造類
            <br /> 職場新鮮人月薪中位數 級距(畢滿一年)
          </span>
        </div>
        <div className="career-page-4__salary-chart">
          {data.map((salaryInfo) => (
            <div
              className="career-page-4__salary-chart__element"
              key={salaryInfo.id}
            >
              <div className="career-page-4__salary-chart__element__title">
                <img src={MoneyBagImg} alt="MoneyBagImg" />
                <span>{salaryInfo.name}</span>
              </div>
              <div className="career-page-4__salary-chart__element__data">
                <div className="career-page-4__salary-chart__element__label">
                  國內
                </div>
                <div className="career-page-4__salary-chart__element__range">
                  {salaryInfo.range[0][0]}K - {salaryInfo.range[0][0]}K
                </div>
              </div>
              <div className="career-page-4__salary-chart__element__data">
                <div className="career-page-4__salary-chart__element__label">
                  國外
                </div>
                <div className="career-page-4__salary-chart__element__range">
                  {salaryInfo.range[1][0]}K - {salaryInfo.range[1][0]}K
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="career-page-4__salary-chart">
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
        </div> */}
      </div>
    </div>
  );
}

export default PageFour;

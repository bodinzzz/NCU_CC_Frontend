import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import LearnerImg from "../../assets/image/Future/LearnerImg.svg";
import SoldierImg from "../../assets/image/Future/SoldierImg.svg";
import UnemployedImg from "../../assets/image/Future/UnemployedImg.svg";
import HousekeeperImg from "../../assets/image/Future/HousekeeperImg.svg";
import RetireesImg from "../../assets/image/Future/RetireesImg.svg";
import "./PageThree.scss";
import InfoThemeOneIcon from "../../assets/icon/InfoThemeOneIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";
import ChartTooltip from "../elements/ChartTooltip.js";
import { ReactComponent as LearnerImgTest } from "../../assets/image/Future/LearnerImg.svg";

const CustomizedTick = ({ x, y, payload }) => {
  return (
    // <g>
    //   <svg src={LearnerImgTest} x={x - 60} y={y - 12} width="24" height="24">
    //     <LearnerImgTest width={24} height={24} />
    //   </svg>
    //   <text type="category" x={x} y={y} className="future-page-3__chart__custom-tick" textAnchor="end">
    //     <tspan x="52" dy="0.355em">
    //       {payload.value}
    //     </tspan>
    //   </text>
    // </g>
    <text type="category" x={x} y={y} className="future-page-3__chart__custom-tick" textAnchor="end">
      <tspan x="52" dy="0.355em">
        {payload.value}
      </tspan>
    </text>
  );
};

function Chart({ data }) {
  return (
    <ResponsiveContainer width="60%" height={300}>
      <BarChart data={data} layout={"vertical"} barSize={24} margin={{ right: 50 }}>
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tick={<CustomizedTick />}
          tickLine={false}
          // tickSize={2}
          // tickMargin={10}
        />
        <XAxis type="number" hide />
        <Tooltip content={<ChartTooltip />} cursor={false} />
        <Bar dataKey="percentage" className="bar-style">
          <LabelList dataKey="percentage" position="right" formatter={(value) => value + "%"} className="future-page-3__chart__custom-label" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function PageThree({ data, topRef }) {
  const otherData = [
    {
      id: "f3-1",
      name: "備考",
      percentage: 16,
    },
    {
      id: "f3-2",
      name: "服役",
      percentage: 18,
    },
    {
      id: "f3-3",
      name: "待業",
      percentage: 15,
    },
    {
      id: "f3-4",
      name: "家管",
      percentage: 9,
    },
    {
      id: "f3-5",
      name: "其他",
      percentage: 24,
    },
  ];

  const elements = [
    { id: "learner", image: LearnerImg, title: "備考" },
    { id: "soldier", image: SoldierImg, title: "服役" },
    { id: "unemployed", image: UnemployedImg, title: "待業" },
    { id: "housekeeper", image: HousekeeperImg, title: "家管" },
    { id: "retirees", image: RetireesImg, title: "其他" },
  ];
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)`;

  return (
    <div className="future-page-3">
      <div className="future-page-3__title">
        <SourceTooltip icon={InfoThemeOneIcon} text={tooltipText} />
        <span>
          <strong>工學院 軟體工程研究所 學士</strong> <br />
          在畢滿一年後 其他現況分布
        </span>
        :
      </div>
      <div className="future-page-3__chart">
        <div className="future-page-3__chart__icons">
          {elements.map((element, index) => {
            return <img src={element.image} className="future-page-3__chart__icons__icon" alt={element.title} key={element.id} />;
          })}
        </div>
        <Chart data={data} />
      </div>
      <ScrollToTopBtn theme={"1"} topRef={topRef} />
    </div>
  );
}

export default PageThree;

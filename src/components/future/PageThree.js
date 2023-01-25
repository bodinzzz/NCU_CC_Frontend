import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LearnerImg from "../../assets/image/Future/LearnerImg.svg";
import SoldierImg from "../../assets/image/Future/SoldierImg.svg";
import UnemployedImg from "../../assets/image/Future/UnemployedImg.svg";
import HousekeeperImg from "../../assets/image/Future/HousekeeperImg.svg";
import RetireesImg from "../../assets/image/Future/RetireesImg.svg";
import "./PageThree.scss";
import InfoThemeOneIcon from "../../assets/icon/InfoThemeOneIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <span className="label">{`${label} : ${payload[0].value}`}%</span>
      </div>
    );
  }

  return null;
};

function Chart({ data }) {
  return (
    <ResponsiveContainer width="60%" height={300}>
      <BarChart data={data} layout={"vertical"} barSize={24}>
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
        />
        <XAxis type="number" hide />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Bar dataKey="percentage" fill="#96B48B" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function PageThree() {
  const elements = [
    { image: LearnerImg, title: "備考" },
    { image: SoldierImg, title: "服役" },
    { image: UnemployedImg, title: "待業" },
    { image: HousekeeperImg, title: "家管" },
    { image: RetireesImg, title: "其他" },
  ];
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

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)`;

  return (
    <div className="future-page-3">
      <div className="future-page-3__title">
        <SourceTooltip icon={InfoThemeOneIcon} text={tooltipText} />
        <span>工學院 軟體工程研究所 學士 在畢滿一年後 其他現況分布</span>:
      </div>
      <div className="future-page-3__chart">
        <div className="future-page-3__chart__icons">
          {elements.map((element, index) => {
            return <img src={element.image} className="future-page-3__chart__icons__icon" alt={element.title} />;
          })}
        </div>
        <Chart data={otherData} />
      </div>
      <ScrollToTopBtn theme={"1"} />
    </div>
  );
}

export default PageThree;

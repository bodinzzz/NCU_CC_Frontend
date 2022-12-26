import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LearnerImg from "../../assets/image/Future/LearnerImg.svg";
import SoldierImg from "../../assets/image/Future/SoldierImg.svg";
import UnemployedImg from "../../assets/image/Future/UnemployedImg.svg";
import HousekeeperImg from "../../assets/image/Future/HousekeeperImg.svg";
import RetireesImg from "../../assets/image/Future/RetireesImg.svg";
import TravelerImg from "../../assets/image/Future/TravelerImg.svg";
import "./PageThree.scss";
import InfoThemeOneIcon from "../../assets/icon/InfoThemeOneIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";

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
    <ResponsiveContainer width="60%" height={400}>
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
  const data = [
    {
      name: "備考",
      percentage: 16,
    },
    {
      name: "服役",
      percentage: 18,
    },
    {
      name: "待業",
      percentage: 15,
    },
    {
      name: "家管",
      percentage: 9,
    },
    {
      name: "退休",
      percentage: 24,
    },
    {
      name: "其他",
      percentage: 15,
    },
  ];

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)`;

  return (
    <div className="future-page-3">
      <div className="future-page-3__title">
        <SourceTooltip icon={InfoThemeOneIcon} text={tooltipText} />
        <span>工學院 軟體工程研究所 學士 </span>在<span>畢滿一年後 其他現況分布</span>:
      </div>
      <div className="future-page-3__chart">
        <div className="future-page-3__chart__icons">
          <img src={LearnerImg} className="future-page-3__chart__icons__icon" alt={LearnerImg} />
          <img src={SoldierImg} className="future-page-3__chart__icons__icon" alt={SoldierImg} />
          <img src={UnemployedImg} className="future-page-3__chart__icons__icon" alt={UnemployedImg} />
          <img src={HousekeeperImg} className="future-page-3__chart__icons__icon" alt={HousekeeperImg} />
          <img src={RetireesImg} className="future-page-3__chart__icons__icon" alt={RetireesImg} />
          <img src={TravelerImg} className="future-page-3__chart__icons__icon" alt={TravelerImg} />
        </div>
        <Chart data={data} />
      </div>
    </div>
  );
}

export default PageThree;

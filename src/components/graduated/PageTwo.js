import React from "react";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import "./PageTwo.scss";
import InfoThemeTwoIcon from "../../assets/icon/InfoThemeTwoIcon.svg";
import LinkIcon from "../../assets/icon/LinkIcon.svg";
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
    <ResponsiveContainer width="75%" height={300}>
      <BarChart data={data} layout={"vertical"} barSize={20} reverseStackOrder="false">
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          width={250}
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        />
        <XAxis type="number" hide />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Bar dataKey="percentage">
          {data.map((entry, index) => (
            <Cell fill={entry.color} key={index} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function sortData(data) {
  data.sort((a, b) => (a.percentage < b.percentage ? 1 : -1));
  const barColor = ["#789EE7", "#AAC7FF", "#D4E2FC", "#E4E4E4"];
  const sortedData = data.map((data, index) => {
    return {
      name: data.name,
      percentage: data.percentage,
      color: index > 2 ? barColor[3] : barColor[index],
    };
  });
  return sortedData;
}

function PageTwo() {
  // SELECTED DATA (College、Department)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n畢業滿1.3.5年合併統計\n\n學門參考至 https://ulist.moe.gov.tw/Query/Discipline `;

  const data = [
    {
      name: "商業及管理學門",
      percentage: 16,
    },
    {
      name: "社會及行為科學學門",
      percentage: 18,
    },
    {
      name: "物理、化學及地球科學學門",
      percentage: 15,
    },
    {
      name: "資訊通訊科技學門",
      percentage: 9,
    },
    {
      name: "新聞學及圖書資訊學門",
      percentage: 24,
    },
  ];

  const sortedData = sortData(data);
  // console.log(data);
  console.log(sortedData);

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="graduated-page-2">
      <div className="graduated-page-2__title">
        <SourceTooltip icon={InfoThemeTwoIcon} text={tooltipText} />
        <span>工學院 軟體工程研究所 畢業生繼續升學的領域 :</span>
        <a className="graduated-page-2__title__ref-link" href="https://ulist.moe.gov.tw/Query/Discipline">
          <span>學門參考</span>
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </div>
      <Chart data={sortedData} />
    </div>
  );
}

export default PageTwo;

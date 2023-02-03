import React from "react";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, Brush } from "recharts";
import "./PageTwo.scss";
import InfoThemeTwoIcon from "../../assets/icon/InfoThemeTwoIcon.svg";
import LinkIcon from "../../assets/icon/LinkIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";
import ChartTooltip from "../elements/ChartTooltip.js";

function Chart({ data }) {
  const size = Object.keys(data).length;
  console.log(size);
  return (
    <div className="scroll-wrapper">
      <ResponsiveContainer width="100%" height={size > 15 ? 1200 : 700}>
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
          <Tooltip content={<ChartTooltip />} cursor={false} />
          <Bar dataKey="percentage">
            {data.map((entry, index) => (
              <Cell fill={entry.fillColor} key={index} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// function sortData(data) {
//   data.sort((a, b) => (a.percentage < b.percentage ? 1 : -1));
//   const barColor = ["#789EE7", "#AAC7FF", "#D4E2FC", "#E4E4E4"];
//   const sortedData = data.map((data, index) => {
//     return {
//       name: data.name,
//       percentage: data.percentage,
//       color: index > 2 ? barColor[3] : barColor[index],
//     };
//   });
//   return sortedData;
// }

function PageTwo() {
  // SELECTED DATA (College、Department)
  // const [selectedCollege, setSelectedCollege] = useState(0);
  // const [selectedDepartment, setSelectedDepartment] = useState(0);

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n畢業滿1.3.5年合併統計\n\n學門參考至 https://ulist.moe.gov.tw/Query/Discipline `;

  const [disciplineData, setDisciplineData] = useState([
    {
      name: "商業及管理學門",
      percentage: 24,
      fillColor: "#789EE7",
    },
    {
      name: "社會及行為科學學門",
      percentage: 20,
      fillColor: "#AAC7FF",
    },
    {
      name: "物理、化學及地球科學學門",
      percentage: 18,
      fillColor: "#D4E2FC",
    },
    {
      name: "資訊通訊科技學門",
      percentage: 16,
      fillColor: "#E4E4E4",
    },
    {
      name: "新聞學及圖書資訊學門",
      percentage: 12,
      fillColor: "#E4E4E4",
    },
    {
      name: "安全服務學門",
      percentage: 5,
      fillColor: "#E4E4E4",
    },
  ]);

  let arr = Array.from(new Array(10), (val, index) => index + 1);

  console.log(arr);

  arr.map(() => {
    disciplineData.push({
      name: "其他學門",
      percentage: 3,
      fillColor: "#E4E4E4",
    });

    console.log("YES");
  });

  console.log(disciplineData);

  // const sortedData = sortData(data);

  // API Call
  // useEffect(() => {}, []);

  return (
    <div className="graduated-page-2">
      <div className="graduated-page-2__title">
        <SourceTooltip icon={InfoThemeTwoIcon} text={tooltipText} />
        <span>工學院 軟體工程研究所 畢業生繼續升學的領域 :</span>
        <a className="graduated-page-2__title__ref-link" href="https://ulist.moe.gov.tw/Query/Discipline" target="_blank">
          <span>學門參考</span>
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </div>
      <div className="scroll-wrapper">
        <Chart data={disciplineData} />
      </div>
    </div>
  );
}

export default PageTwo;

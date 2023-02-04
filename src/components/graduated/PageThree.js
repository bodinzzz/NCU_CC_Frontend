import React from "react";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import "./PageThree.scss";
import InfoThemeTwoIcon from "../../assets/icon/InfoThemeTwoIcon.svg";
import SourceTooltip from "../elements/SourceTooltip";
import ScrollToTopBtn from "../elements/ScrollToTopBtn";
import ScrollableBarChart from "./ScrollableBarChart.js";

// NOT USE
// function sortData(data) {
//   data.sort((a, b) => (a.percentage < b.percentage ? 1 : -1));
//   const barColor = ["#789EE7", "#AAC7FF", "#D4E2FC", "#E4E4E4"];
//   const sortedData = data.map((data, index) => {
//     return {
//       name: data.name,
//       percentage: data.percentage,
//       fillColor: index > 2 ? barColor[3] : barColor[index],
//     };
//   });
//   return sortedData;
// }

function PageThree() {
  /* SELECTED DATA (College、Department)*/
  // const [selectedCollege, setSelectedCollege] = useState(0);
  // const [selectedDepartment, setSelectedDepartment] = useState(0);

  /* DATA */
  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n畢業滿1.3.5年合併統計`;
  const jobData = [
    {
      name: "資訊科技類",
      percentage: 40,
      fillColor: "#789EE7",
    },
    {
      name: "科學、技術、工程、數學類",
      percentage: 30,
      fillColor: "#AAC7FF",
    },
    {
      name: "製造類",
      percentage: 10,
      fillColor: "#D4E2FC",
    },
    {
      name: "藝文與影音傳播類",
      percentage: 5,
      fillColor: "#E4E4E4",
    },
    {
      name: "行銷與銷售類",
      percentage: 5,
      fillColor: "#E4E4E4",
    },
  ];

  // const sortedData = sortData(jobData);
  // console.log(data);
  // console.log(sortedData);

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="graduated-page-3">
      <div className="graduated-page-3__title">
        <SourceTooltip icon={InfoThemeTwoIcon} text={tooltipText} />
        <span>
          工學院 軟體工程研究所
          <br /> 各系所畢業生職務類型 :
        </span>
      </div>
      <ScrollableBarChart data={jobData} />
      <ScrollToTopBtn theme={"2"} themeName={"graduated"} />
    </div>
  );
}

export default PageThree;

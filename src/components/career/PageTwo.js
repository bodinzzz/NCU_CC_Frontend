import { useState, useEffect } from "react";
import CareerInfoImg from "../../assets/image/Career/CareerInfoImg.svg";
import "./PageTwo.scss";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function PageTwo() {
  const [selectedCareer, setSelectedCareer] = useState(0);
  const careerInfos = [
    {
      name: "建築營造類",
      description:
        "針對建築物及其實質環境，進行生產及作業之調查測量、規劃、組織、指導、協調、管制及考核等管理，並代辦申請建築許可、拆除執照、招商投標、擬定施工契約及其他工程上接洽事項之相關建築或營造工作。",
      subTypes: ["建築規劃設計", "營造及維護"],
    },
  ];

  const tooltipText = `資料來源 : 中央大學民國109至111年畢業流向調查結果\n學士有效問卷200份(回收率70%)\n碩士有效問卷200份(回收率70%)\n博士有效問卷200份(回收率70%)\n地區分布與男女比為學碩博綜合統計\n畢業滿1.3.5年合併統計`;

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="career-page-2">
      <div className="career-page-2__subTypes">
        {careerInfos[selectedCareer].subTypes.map((subType, index) => (
          <div className="career-page-2__subTypes__subType">{subType}</div>
        ))}
      </div>
      <div className="career-page-2__title">
        <img src={CareerInfoImg} alt="CareerInfoImg" />
        <span>{careerInfos[selectedCareer].name}</span>
      </div>
      <div className="career-page-2__description">
        <span className="career-page-2__description__text">{careerInfos[selectedCareer].description}</span>
      </div>
    </div>
  );
}

export default PageTwo;

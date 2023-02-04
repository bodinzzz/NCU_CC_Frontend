import { useState, useEffect } from "react";
import CareerInfoImg from "../../assets/image/Career/CareerInfoImg.svg";
import "./PageTwo.scss";
import ScrollPageNav from "../elements/ScrollPageNav";

function PageTwo() {
  const [selectedCareer, setSelectedCareer] = useState(0);
  const careerInfos = [
    {
      name: "建築營造類",
      description:
        "針對建築物及其實質環境，進行生產及作業之調查測量、規劃、組織、指導、協調、管制及考核等管理，並代辦申請建築許可、拆除執照、招商投標、擬定施工契約及其他工程上接洽事項之相關建築或營造工作。",
      subTypes: [
        { id: "c1-t1", name: "建築規劃設計" },
        { id: "c1-t2", name: "營造及維護" },
      ],
    },
  ];

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="career-page-2">
      <div className="career-page-2__subTypes">
        {careerInfos[selectedCareer].subTypes.map((subType, index) => (
          <div className="career-page-2__subTypes__subType" key={subType.id}>
            {subType.name}
          </div>
        ))}
      </div>
      <div className="career-page-2__title">
        <img src={CareerInfoImg} alt="CareerInfoImg" />
        <span>{careerInfos[selectedCareer].name}</span>
      </div>
      <div className="career-page-2__description">
        <span className="career-page-2__description__text">{careerInfos[selectedCareer].description}</span>
      </div>
      <ScrollPageNav />
    </div>
  );
}

export default PageTwo;

import { useState, useEffect } from "react";
import QImg from "../../assets/image/Career/QImg.svg";
import QReverseImg from "../../assets/image/Career/QReverseImg.svg";
import "./PageTwo.scss";
import ScrollPageNav from "../elements/ScrollPageNav";
import InputLabel from "../elements/InputLabel";

function PageTwo() {
  /* SELECTED DATA */
  // const [selectedCareer, setSelectedCareer] = useState(0);

  /* FETCHING DATA */
  const careerInfos = {
    name: "藝文與影音傳播類",
    description:
      "規劃設計、製作、展出表演和出版藝文及影音相關作品，包括視覺設計、通訊傳播、表演藝術、印刷出版、新聞電視廣播及電影、包裝說明、工藝設計等。",
    subTypes: [
      { id: "c1-t1", name: "影視傳播" },
      { id: "c1-t2", name: "印刷出版" },
      { id: "c1-t3", name: "視覺藝術" },
      { id: "c1-t4", name: "表演藝術" },
      { id: "c1-t5", name: "新聞傳播" },
      { id: "c1-t6", name: "通訊傳播" },
      { id: "c1-t7", name: "設計產業阿阿阿阿阿" },
    ],
    areas: [
      { id: "areaDomestic", name: "國內", percentage: 75 },
      { id: "areaForeign", name: "國外", percentage: 25 },
    ],
  };

  // API Call
  // useEffect(() => {}, []);

  return (
    <div className="career-page-2">
      {/* <ScrollPageNav nowPage={2} /> */}
      <div className="career-page-2__title">
        <span>什麼是</span>
        <div>{careerInfos.name}</div>
      </div>
      <div className="career-page-2__description">
        <InputLabel text={"職類說明"} theme={"3"} />
        <div className="career-page-2__description__info">{careerInfos.description}</div>
      </div>
      <div className="career-page-2__sub-types">
        {careerInfos.subTypes.map((subType, index) => (
          <div className="career-page-2__sub-types__sub-type" key={subType.id}>
            {subType.name}
          </div>
        ))}
      </div>
      {/* AREA CHART */}
      <div className="career-page-2__chart-container">
        <div className="career-page-2__chart-container__title">
          有{careerInfos.areas[0].percentage}%的人在國內發展、{careerInfos.areas[1].percentage}%的人在國外發展
        </div>
        <div className="career-page-2__chart-container__bar">
          <div className="career-page-2__chart-container__bar--left" style={{ width: `${careerInfos.areas[0].percentage}%` }} />
          <div className="career-page-2__chart-container__bar--right" style={{ width: `${careerInfos.areas[1].percentage}%` }} />
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <img className="career-page-2__background-image--left" src={QImg} />
      <img className="career-page-2__background-image--right" src={QReverseImg} />
    </div>
  );
}

export default PageTwo;

import { useState, useEffect } from "react";
import QImg from "../../assets/image/Career/QImg.svg";
import QReverseImg from "../../assets/image/Career/QReverseImg.svg";
import "./PageTwo.scss";
import ScrollPageNav from "../elements/ScrollPageNav";
import InputLabel from "../elements/InputLabel";

function PageTwo() {
  const [selectedCareer, setSelectedCareer] = useState(0);
  const careerInfos = [
    {
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
    },
  ];

  // API Call
  useEffect(() => {}, []);

  return (
    <div className="career-page-2">
      {/* <ScrollPageNav nowPage={2} /> */}
      <div className="career-page-2__title">
        <span>什麼是</span>
        <div>{careerInfos[selectedCareer].name}</div>
      </div>
      <div className="career-page-2__description">
        <InputLabel text={"職類說明"} theme={"3"} />
        <div className="career-page-2__description__info">{careerInfos[selectedCareer].description}</div>
      </div>
      <div className="career-page-2__subTypes">
        {careerInfos[selectedCareer].subTypes.map((subType, index) => (
          <div className="career-page-2__subTypes__subType" key={subType.id}>
            {subType.name}
          </div>
        ))}
      </div>
      <img className="career-page-2__background-img--left" src={QImg} />
      <img className="career-page-2__background-img--right" src={QReverseImg} />
    </div>
  );
}

export default PageTwo;

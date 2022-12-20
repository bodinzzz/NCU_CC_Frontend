import { useState } from "react";
import "./PageOne.scss";
import labelThemeThreeIcon from "../../assets/icon/labelThemeThreeIcon.svg";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import RadioBtnGroup from "../elements/RadioBtnGroup";

function PageOne() {
  const [selectedJob, setSelectedJob] = useState(0);
  const [selectedArea, setSelectedArea] = useState(0);

  //   DATA
  const jobTags = [
    "建築營造類",
    "製造類",
    "科學、技術、工程、數學類",
    "物流運輸類",
    "天然資源、食品與農業類",
    "醫療保險類",
    "藝文與影音傳播類",
    "資訊科技類",
    "金融財務類",
    "企業經營管理類",
    "行銷與銷售類",
    "政府公共事務類",
    "教育與訓練類",
    "個人及社會服務類",
    "休閒與觀光旅遊類",
    "司法、法律與公共安全類",
  ].map((jobName, index) => {
    return {
      id: "jobID-" + index.toString(),
      name: jobName,
      areas: [
        { name: "國內", percentage: 75 },
        { name: "國外", percentage: 25 },
      ],
    };
  });

  return (
    <div className="career-page-1">
      <div className="career-page-1__title">職位類型大比拚</div>
      <div className="career-page-1__inputContainer">
        <InputLabel text={"職務類型"} icon={labelThemeThreeIcon} />
        <RadioBtnGroup options={jobTags} selectedValue={selectedJob} setSelectedValue={setSelectedJob} type="Career" />
      </div>
      <div className="career-page-1__inputContainer">
        <InputLabel text={"國內外"} icon={labelThemeThreeIcon} />
        <RadioBtnGroup options={jobTags[0].areas} selectedValue={selectedArea} setSelectedValue={setSelectedArea} type="Area" />
      </div>
      <SubmitBtn theme={"3"} />
    </div>
  );
}

export default PageOne;

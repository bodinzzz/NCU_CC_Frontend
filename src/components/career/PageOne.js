import { useState } from "react";
import "./PageOne.scss";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import RadioBtnGroup from "../elements/RadioBtnGroup";
import Dropdown from "../elements/Dropdown";

/* CONSTANT DATA */
const careerTags = [
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
].map((name, index) => {
  return {
    name,
    id: "careerID-" + index.toString(),
  };
});

function PageOne({ selectedCareer, setSelectedCareer, onSubmit }) {
  return (
    <div className="career-page-1">
      <div className="career-page-1__title">職務類型大比拚</div>
      {/* Display on desktop */}
      <div className="career-page-1__input-container--desktop">
        <InputLabel text={"職務類型"} theme={"3"} />
        <RadioBtnGroup
          options={careerTags}
          selectedValue={selectedCareer}
          setSelectedValue={setSelectedCareer}
          type="Career"
        />
      </div>
      {/* Display on tablet & mobile */}
      <div className="career-page-1__input-container--mobile">
        <InputLabel text={"職務類型"} theme={"3"} />
        <Dropdown
          options={careerTags}
          selectedValue={selectedCareer}
          setSelectedValue={setSelectedCareer}
        />
      </div>
      <SubmitBtn theme={"3"} onSubmit={onSubmit} />
    </div>
  );
}

export default PageOne;

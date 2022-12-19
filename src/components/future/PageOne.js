import { useState } from "react";
import "./PageOne.scss";
// import BachelorHatSelectedImg from "../../assets/image/Future/BachelorHatSelectedImg.svg";

// DROPDOWN USING SELECT
function Dropdown({ options, setSelectedValue }) {
  return (
    <select
      className="future-page-1__chooser__dropdown__btn"
      name="select"
      onChange={(e) => {
        setSelectedValue(e.target.value);
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

function PageOne() {
  // SELECTED DATA (College、Department、Degree、Year)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  // DATA
  const colleges = [
    {
      id: "i1",
      name: "文學院",
      departments: [
        { id: "i1-d1", name: "文學院學士班" },
        { id: "i1-d2", name: "亞際文化研究國際碩士學位學程(台聯大系統)" },
      ],
    },
    {
      id: "i2",
      name: "理學院",
      departments: [
        { id: "i1-d1", name: "理學院學士班" },
        { id: "i1-d2", name: "光電科學與工程學系" },
      ],
    },
  ];

  return (
    <div className="future-page-1">
      <div className="future-page-1__title">未來道路選擇</div>

      <div>
        {colleges[selectedCollege].name}
        {colleges[selectedCollege].departments[selectedDepartment].name}
      </div>
      {/* CHOOSER 1 - COLLEGES AND DEPARTMENT */}
      <div className="future-page-1__label">院所</div>
      <div className="future-page-1__chooser">
        <Dropdown options={colleges} setSelectedValue={setSelectedCollege} />
        <Dropdown options={colleges[selectedCollege].departments} setSelectedValue={setSelectedDepartment} />
      </div>

      {/* CHOOSER 3 - DEGREE */}
      {/* <div className="future-page-1__label">學位哇哇哇</div>
      <div className="future-page-1__chooser">
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
      </div> */}

      {/* SUBMIT BUTTON */}
      {/* <div className="future-page-1__btn">
        <div>看數據</div>
      </div> */}
    </div>
  );
}

export default PageOne;

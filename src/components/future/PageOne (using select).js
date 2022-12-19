import { useState } from "react";
import "./PageOne.scss";
import BachelorDegreeSelectedImg from "../../assets/image/Future/BachelorDegreeSelectedImg.svg";
import BachelorDegreeUnselectedImg from "../../assets/image/Future/BachelorDegreeUnselectedImg.svg";
import MasterDegreeSelectedImg from "../../assets/image/Future/MasterDegreeSelectedImg.svg";
import MasterDegreeUnselectedImg from "../../assets/image/Future/MasterDegreeUnselectedImg.svg";
import DoctorDegreeSelectedImg from "../../assets/image/Future/DoctorDegreeSelectedImg.svg";
import DoctorDegreeUnselectedImg from "../../assets/image/Future/DoctorDegreeUnselectedImg.svg";
import submitIcon from "../../assets/icon/submitIcon.svg";

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
  const [selectedDegree, setSelectedDegree] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

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

  const degrees = [
    {
      name: "學士",
      selectedImg: BachelorDegreeSelectedImg,
      unselectedImg: BachelorDegreeUnselectedImg,
    },
    {
      name: "碩士",
      selectedImg: MasterDegreeSelectedImg,
      unselectedImg: MasterDegreeUnselectedImg,
    },
    {
      name: "博士",
      selectedImg: DoctorDegreeSelectedImg,
      unselectedImg: DoctorDegreeUnselectedImg,
    },
  ];

  const years = ["畢滿1年", "畢滿3年", "畢滿5年"];

  return (
    <div className="future-page-1">
      <div className="future-page-1__title">未來道路選擇</div>

      {/* CHOOSER 1 - COLLEGES AND DEPARTMENT */}
      <div className="future-page-1__chooserBox">
        <div className="future-page-1__label">院所</div>
        <div className="future-page-1__chooser">
          <Dropdown options={colleges} setSelectedValue={setSelectedCollege} />
          <Dropdown options={colleges[selectedCollege].departments} setSelectedValue={setSelectedDepartment} />
        </div>
      </div>

      {/* CHOOSER 2 - DEGREE */}
      <div className="future-page-1__chooserBox">
        <div className="future-page-1__label">學位</div>
        <div className="future-page-1__chooser">
          {degrees.map((degree, index) => (
            <div className="future-page-1__chooser__degree" onClick={() => setSelectedDegree(index)}>
              <img
                src={selectedDegree === index ? degree.selectedImg : degree.unselectedImg}
                alt={degree.name}
                className="future-page-1__chooser__degree"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CHOOSER 2 - YEAR */}
      <div className="future-page-1__chooserBox">
        <div className="future-page-1__label">畢業年份</div>
        <div className="future-page-1__chooser">
          {years.map((year, index) => (
            <div
              className={index === selectedYear ? "future-page-1__chooser__year__selected" : "future-page-1__chooser__year__unselected"}
              onClick={() => setSelectedYear(index)}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="future-page-1__btn">
        <div>看數據</div>
        <img src={submitIcon} alt="submitIcon" />
      </div>
    </div>
  );
}

export default PageOne;

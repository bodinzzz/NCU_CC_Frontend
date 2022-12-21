import { useState, useEffect } from "react";
import "./PageOne.scss";
import BachelorDegreeSelectedImg from "../../assets/image/Future/BachelorDegreeSelectedImg.svg";
import BachelorDegreeUnselectedImg from "../../assets/image/Future/BachelorDegreeUnselectedImg.svg";
import MasterDegreeSelectedImg from "../../assets/image/Future/MasterDegreeSelectedImg.svg";
import MasterDegreeUnselectedImg from "../../assets/image/Future/MasterDegreeUnselectedImg.svg";
import DoctorDegreeSelectedImg from "../../assets/image/Future/DoctorDegreeSelectedImg.svg";
import DoctorDegreeUnselectedImg from "../../assets/image/Future/DoctorDegreeUnselectedImg.svg";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import RadioBtnGroup from "../elements/RadioBtnGroup";
import Dropdown from "../elements/Dropdown";

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

  const years = [{ name: "畢滿1年" }, { name: "畢滿3年" }, { name: "畢滿5年" }];

  // API Call
  useEffect(() => {
    setSelectedDepartment(0);
  }, [selectedCollege]);

  return (
    <div className="future-page-1">
      <div className="future-page-1__title">未來道路選擇</div>

      <div className="future-page-1__inputContainers">
        {/* INOUT 1 - COLLEGES */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"學院"} theme={"1"} />
          <Dropdown options={colleges} selectedValue={selectedCollege} setSelectedValue={setSelectedCollege} />
        </div>

        {/* INOUT 2 - DEPARTMENT */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"系所"} theme={"1"} />
          <Dropdown options={colleges[selectedCollege].departments} selectedValue={selectedDepartment} setSelectedValue={setSelectedDepartment} />
        </div>

        {/* INOUT 3 - DEGREE */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"學位"} theme={"1"} />
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

        {/*  INOUT 4 - YEAR */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"畢業年份"} theme={"1"} />
          <RadioBtnGroup options={years} selectedValue={selectedYear} setSelectedValue={setSelectedYear} type="Year" />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <SubmitBtn theme={"1"} />
    </div>
  );
}

export default PageOne;

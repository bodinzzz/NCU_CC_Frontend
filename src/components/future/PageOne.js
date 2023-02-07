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
import Colleges from "../../constant/Colleges.json";

function PageOne() {
  // SELECTED DATA (College、Department、Degree、Year)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [selectedDegree, setSelectedDegree] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  // DATA

  const degrees = [
    {
      id: "bachelor",
      name: "學士",
      selectedImg: BachelorDegreeSelectedImg,
      unselectedImg: BachelorDegreeUnselectedImg,
    },
    {
      id: "master",
      name: "碩士",
      selectedImg: MasterDegreeSelectedImg,
      unselectedImg: MasterDegreeUnselectedImg,
    },
    {
      id: "doctor",
      name: "博士",
      selectedImg: DoctorDegreeSelectedImg,
      unselectedImg: DoctorDegreeUnselectedImg,
    },
  ];

  // const years = ["畢滿1年", "畢滿3年", "畢滿5年"];
  const years = [
    { id: "y1", name: "畢滿1年" },
    { id: "y2", name: "畢滿3年" },
    { id: "y3", name: "畢滿5年" },
  ];

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
          <Dropdown options={Colleges} selectedValue={selectedCollege} setSelectedValue={setSelectedCollege} />
        </div>

        {/* INOUT 2 - DEPARTMENT */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"系所"} theme={"1"} />
          <Dropdown options={Colleges[selectedCollege].departments} selectedValue={selectedDepartment} setSelectedValue={setSelectedDepartment} />
        </div>

        {/* INOUT 3 - DEGREE */}
        <div className="future-page-1__inputContainer">
          <InputLabel text={"學位"} theme={"1"} />
          <div className="future-page-1__chooser">
            {degrees.map((degree, index) => (
              <div className="future-page-1__chooser__degree" onClick={() => setSelectedDegree(index)} key={degree.id}>
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

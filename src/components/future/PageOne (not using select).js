import { useState } from "react";
import "./PageOne.scss";
import BachelorHatSelectedImg from "../../assets/image/Future/BachelorHatSelectedImg.svg";

function PageOne() {
  // DROPDOWN TOGGLE DATA
  const [isCollegeDropdownOpen, toggleCollegeDropdown] = useState(false);
  const [isDepartmentDropdownOpen, toggleDepartmentDropdown] = useState(false);

  // SELECTED DATA (College、Department、Degree、Year)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  // TOGGLE DROPDOWN
  const clickCollege = (index) => {
    setSelectedCollege(index);
    toggleCollegeDropdown(!isCollegeDropdownOpen);
  };

  const clickDepartment = (index) => {
    setSelectedDepartment(index);
    toggleDepartmentDropdown(!isDepartmentDropdownOpen);
  };

  // DATA
  const colleges = [
    {
      id: "i1",
      name: "文學院",
      departments: [
        { id: "i1-d1", name: "中文系" },
        { id: "i1-d2", name: "外文系挖EEEE" },
      ],
    },
    {
      id: "i2",
      name: "理學院",
      departments: [
        { id: "i1-d1", name: "嗚嗚嗚嗚系" },
        { id: "i1-d2", name: "挖挖挖挖系" },
      ],
    },
  ];

  return (
    <div className="future-page-1">
      <div className="future-page-1__title">
        未來道路選擇 : {colleges[selectedCollege].name} 、 {colleges[selectedCollege].departments[selectedDepartment].name}
      </div>
      <div className="future-page-1__title">{selectedCollege}</div>

      {/* CHOOSER 1 - COLLEGES AND DEPARTMENT */}
      <div className="future-page-1__label">院所</div>
      <div className="future-page-1__chooser">
        <div className="future-page-1__chooser__dropdown">
          <div className="future-page-1__chooser__dropdown__btn" onClick={() => toggleCollegeDropdown(!isCollegeDropdownOpen)}>
            {colleges[selectedCollege].name}
          </div>
          {isCollegeDropdownOpen && (
            <div className="future-page-1__chooser__dropdown__items">
              {colleges.map((college, index) => (
                <div className="future-page-1__chooser__dropdown__items__item" onClick={() => clickCollege(index)}>
                  {college.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="future-page-1__chooser__dropdown">
          <div className="future-page-1__chooser__dropdown__btn" onClick={() => toggleDepartmentDropdown(!isDepartmentDropdownOpen)}>
            {colleges[selectedCollege].departments[selectedDepartment].name}
          </div>
          {isDepartmentDropdownOpen && (
            <div className="future-page-1__chooser__dropdown__items">
              {colleges[selectedCollege].departments.map((department, index) => (
                <div className="future-page-1__chooser__dropdown__items__item" onClick={() => clickDepartment(index)}>
                  {department.name}
                </div>
              ))}
            </div>
          )}
        </div>
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

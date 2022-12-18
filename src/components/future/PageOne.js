import { useState } from "react";
import "./PageOne.scss";
import BachelorHatSelectedImg from "../../assets/image/Future/BachelorHatSelectedImg.svg";

// function Dropdown({ data }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedData, setSelectedData] = useState(0);

//   return (
//     <div className="future-page-1__chooser">
//       <div className="future-page-1__chooser__dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//         {data[selectedData].text}
//       </div>
//       {isDropdownOpen && (
//         <div className="future-page-1__chooser__dropdown__items">
//           {data.map((data, index) => (
//             <div className="future-page-1__chooser__dropdown__items__item" onClick={() => setSelectedData(index)}>
//               {data.text}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

function PageOne() {
  const [isCollegeDropdownOpen, toggleCollegeDropdown] = useState(false);
  const [isDepartmentDropdownOpen, toggleDepartmentDropdown] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  const clickCollege = (index) => {
    setSelectedCollege(index);
    toggleCollegeDropdown(!isCollegeDropdownOpen);
  };

  const clickDepartment = (index) => {
    setSelectedDepartment(index);
    toggleDepartmentDropdown(!isDepartmentDropdownOpen);
  };

  const colleges = [
    {
      id: "i1",
      name: "文學院",
      departments: [
        { id: "i1-d1", name: "中文系" },
        { id: "i1-d2", name: "外文系" },
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

      <div className="future-page-1__label">學位</div>
      <div className="future-page-1__chooser">
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
        <img src={BachelorHatSelectedImg} className="future-page-1__chooser__degree" alt="BachelorHatSelectedImg" />
      </div>
      <div className="future-page-1__btn">
        <div>看數據</div>
      </div>
    </div>
  );
}

export default PageOne;

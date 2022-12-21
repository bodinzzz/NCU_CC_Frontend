import { useState, useEffect } from "react";
import "./PageOne.scss";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import Dropdown from "../elements/Dropdown";

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

  // API Call
  useEffect(() => {
    setSelectedDepartment(0);
  }, [selectedCollege]);

  return (
    <div className="graduated-page-1">
      <div className="graduated-page-1__title">畢業後在做什麼</div>

      <div className="graduated-page-1__inputContainers">
        {/* INOUT 1 - COLLEGES */}
        <div className="graduated-page-1__inputContainer">
          <InputLabel text={"學院"} theme={"2"} />
          <Dropdown options={colleges} selectedValue={selectedCollege} setSelectedValue={setSelectedCollege} />
        </div>

        {/* INOUT 2 - DEPARTMENT */}
        <div className="graduated-page-1__inputContainer">
          <InputLabel text={"系所"} theme={"2"} />
          <Dropdown options={colleges[selectedCollege].departments} selectedValue={selectedDepartment} setSelectedValue={setSelectedDepartment} />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <SubmitBtn theme={"2"} />
    </div>
  );
}

export default PageOne;

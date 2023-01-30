import { useState, useEffect } from "react";
import "./PageOne.scss";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import Dropdown from "../elements/Dropdown";
import Colleges from "../../constant/Colleges.json";

function PageOne() {
  // SELECTED DATA (College、Department、Degree、Year)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

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
          <Dropdown options={Colleges} selectedValue={selectedCollege} setSelectedValue={setSelectedCollege} />
        </div>

        {/* INOUT 2 - DEPARTMENT */}
        <div className="graduated-page-1__inputContainer">
          <InputLabel text={"系所"} theme={"2"} />
          <Dropdown options={Colleges[selectedCollege].departments} selectedValue={selectedDepartment} setSelectedValue={setSelectedDepartment} />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <SubmitBtn theme={"2"} />
    </div>
  );
}

export default PageOne;

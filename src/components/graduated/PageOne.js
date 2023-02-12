import "./PageOne.scss";
import InputLabel from "../elements/InputLabel";
import SubmitBtn from "../elements/SubmitBtn";
import Dropdown from "../elements/Dropdown";
import Colleges from "../../constant/Colleges.json";

function PageOne({
  selectedCollege,
  selectedDepartment,
  setSelectedCollege,
  setSelectedDepartment,
  onSubmit,
}) {
  return (
    <div className="graduated-page-1">
      <div className="graduated-page-1__title">畢業後在做什麼</div>

      <div className="graduated-page-1__inputContainers">
        {/* Input for college */}
        <div className="graduated-page-1__inputContainer">
          <InputLabel text={"學院"} theme={"2"} />
          <Dropdown
            options={Colleges}
            selectedValue={selectedCollege}
            setSelectedValue={setSelectedCollege}
          />
        </div>

        {/* Input for department */}
        <div className="graduated-page-1__inputContainer">
          <InputLabel text={"系所"} theme={"2"} />
          <Dropdown
            options={Colleges[selectedCollege].departments}
            selectedValue={selectedDepartment}
            setSelectedValue={setSelectedDepartment}
          />
        </div>
      </div>

      {/* Submit button */}
      <SubmitBtn theme={"2"} onSubmit={onSubmit} />
    </div>
  );
}

export default PageOne;

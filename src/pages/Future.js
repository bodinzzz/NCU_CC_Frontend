import { useEffect, useState, useRef } from "react";
import "./Future.scss";
import PageOne from "../components/future/PageOne";
import PageTwo from "../components/future/PageTwo";
import PageThree from "../components/future/PageThree";
import useFetch from "../hooks/useFetch";

function Future() {
  // Data
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [selectedDegree, setSelectedDegree] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const scrollRef = useRef(null);
  const topRef = useRef(null);

  // Reset shouldFetch to false after submit
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  // Fetch data after submit
  const { data, isLoading } = useFetch(
    shouldFetch
      ? // ? "http://localhost:5000/future/" +
        //     selectedCollege +
        //     "/" +
        //     selectedDepartment +
        //     "/" +
        //     selectedDegree +
        //     "/" +
        //     selectedYear
        "http://localhost:5000/future/"
      : null
  );

  // Reset department when college changes
  useEffect(() => {
    setSelectedDepartment(0);
  }, [selectedCollege]);

  // Scroll to page2 after data is fetched
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, [data]);

  return (
    <div className="future scroll-container">
      <div className="future__section-1" id="future__section-1" ref={topRef}>
        <PageOne
          selectedCollege={selectedCollege}
          selectedDepartment={selectedDepartment}
          selectedDegree={selectedDegree}
          selectedYear={selectedYear}
          setSelectedCollege={setSelectedCollege}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedDegree={setSelectedDegree}
          setSelectedYear={setSelectedYear}
          onSubmit={() => {
            setShouldFetch(true);
          }}
        />
      </div>
      {/* Show PageTwo & PageThree after submit */}
      {data && !isLoading && (
        <>
          <div
            className="future__section-2"
            id="future__section-2"
            ref={scrollRef}
          >
            <PageTwo
              selectedCollege={selectedCollege}
              selectedDepartment={selectedDepartment}
              selectedDegree={selectedDegree}
              data={data.workingStatusData}
            />
          </div>
          {/* Show PageThree only if graduate year equals to 1 */}
          {selectedYear === 0 && (
            <div className="future__section-3" id="future__section-3">
              <PageThree
                selectedCollege={selectedCollege}
                selectedDepartment={selectedDepartment}
                selectedDegree={selectedDegree}
                data={data.otherData}
                topRef={topRef}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Future;

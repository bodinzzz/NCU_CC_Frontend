import { useEffect, useState, useRef } from "react";
import "./Future.scss";
import PageOne from "../components/future/PageOne";
import PageTwo from "../components/future/PageTwo";
import PageThree from "../components/future/PageThree";
import useFetch from "../hooks/useFetch";
import FutureBgOneImg from "../assets/image/Future/FutureBgOneImg.svg";
import FutureBgTwoImg from "../assets/image/Future/FutureBgTwoImg.svg";
import FutureBgThreeImg from "../assets/image/Future/FutureBgThreeImg.svg";
import FutureBgFourImg from "../assets/image/Future/FutureBgFourImg.svg";
import FutureBgFiveImg from "../assets/image/Future/FutureBgFiveImg.svg";
import FutureBgSixImg from "../assets/image/Future/FutureBgSixImg.svg";
import FutureBgSevenImg from "../assets/image/Future/FutureBgSevenImg.svg";
import data from "../db.json";

function Future() {
  const futureData = data.future;
  // Data
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [selectedDegree, setSelectedDegree] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const scrollRef = useRef(null);
  const topRef = useRef(null);

  // Reset shouldFetch to false after submit
  // const [shouldFetch, setShouldFetch] = useState(false);
  // useEffect(() => {
  //   if (shouldFetch) {
  //     setShouldFetch(false);
  //   }
  // }, [shouldFetch]);

  // Fetch data after submit
  // const { data, isLoading } = useFetch(
  //   shouldFetch
  //     ? // ? "http://localhost:5000/future/" +
  //       //     selectedCollege +
  //       //     "/" +
  //       //     selectedDepartment +
  //       //     "/" +
  //       //     selectedDegree +
  //       //     "/" +
  //       //     selectedYear
  //       "http://localhost:5000/future/"
  //     : null
  // );

  // Reset department when college changes
  useEffect(() => {
    setSelectedDepartment(0);
  }, [selectedCollege]);

  // Scroll to page2 after data is fetched
  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollIntoView();
  //   }
  // }, [data]);

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
            scrollRef.current.scrollIntoView();
          }}
        />
      </div>
      {/* Show PageTwo & PageThree after submit */}
      <div className="future__section-2" id="future__section-2" ref={scrollRef}>
        <PageTwo
          selectedCollege={selectedCollege}
          selectedDepartment={selectedDepartment}
          selectedDegree={selectedDegree}
          data={futureData.workingStatusData}
        />
      </div>
      <div className="future__section-3" id="future__section-3">
        <PageThree
          selectedCollege={selectedCollege}
          selectedDepartment={selectedDepartment}
          selectedDegree={selectedDegree}
          data={futureData.otherData}
          topRef={topRef}
        />
      </div>
      <img src={FutureBgOneImg} className="future__background--1" />
      <img src={FutureBgTwoImg} className="future__background--2" />
      <img src={FutureBgThreeImg} className="future__background--3" />
      <img src={FutureBgFourImg} className="future__background--4" />
      <img src={FutureBgFiveImg} className="future__background--5" />
      <img src={FutureBgSixImg} className="future__background--6" />
      <img src={FutureBgSevenImg} className="future__background--7" />
    </div>
  );
}

export default Future;

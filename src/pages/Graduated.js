import { useState, useEffect, useRef } from "react";
import "./Graduated.scss";
import PageOne from "../components/graduated/PageOne";
import PageTwo from "../components/graduated/PageTwo";
import PageThree from "../components/graduated/PageThree";
import useFetch from "../hooks/useFetch";
import GraduatedBgOneImg from "../assets/image/Graduated/GraduatedBgOneImg.svg";
import GraduatedBgTwoImg from "../assets/image/Graduated/GraduatedBgTwoImg.svg";
import BackgroundImg from "../assets/image/BackgroundImg.png";

function Graduated() {
  // SELECTED DATA (College、Department)
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const scrollRef = useRef(null);
  const topRef = useRef(null);

  // Reset department when college changes
  useEffect(() => {
    setSelectedDepartment(0);
  }, [selectedCollege]);

  // Reset shouldFetch to false after submit
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  // Fetch data after submit
  const { data, isLoading } = useFetch(shouldFetch ? "http://localhost:5000/graduated/" : null);

  // Scroll to page2 after data is fetched
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, [data]);

  // const fillColors = ["#FF8E27", "#FFAE63", "#FFC590", "#FFEAD7"];
  // const setFillColor = (data) => {
  //   data.map((data, index) => {
  //     data.fillColor = "red";
  //   });
  //   console.log(data);
  // };
  // const testData = data;
  // setFillColor(testData);
  // console.log(testData);

  return (
    <div className="graduated scroll-container">
      <div className="graduated__section-1" id="graduated__section-1" ref={topRef}>
        <PageOne
          selectedCollege={selectedCollege}
          selectedDepartment={selectedDepartment}
          setSelectedCollege={setSelectedCollege}
          setSelectedDepartment={setSelectedDepartment}
          onSubmit={() => {
            setShouldFetch(true);
          }}
        />
      </div>
      {data && !isLoading && (
        <>
          <div className="graduated__section-2" id="graduated__section-2" ref={scrollRef}>
            <PageTwo data={data.disciplineData} />
          </div>
          <div className="graduated__section-3" id="graduated__section-3">
            <PageThree data={data.jobData} topRef={topRef} />
          </div>
        </>
      )}
      <img src={GraduatedBgOneImg} className="graduated__background--1" />
      <img src={GraduatedBgOneImg} className="graduated__background--2" />
      <img src={GraduatedBgOneImg} className="graduated__background--3" />
      <img src={GraduatedBgTwoImg} className="graduated__background--4" />
    </div>
  );
}

export default Graduated;

import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Career.scss";
import PageOne from "../components/career/PageOne";
import PageTwo from "../components/career/PageTwo";
import PageThree from "../components/career/PageThree";
import PageFour from "../components/career/PageFour";
import PageFive from "../components/career/PageFive";
import CareerBgOneImg from "../assets/image/Career/CareerBgOneImg.svg";
import CareerBgQuestionImg from "../assets/image/Career/CareerBgQuestionImg.svg";
import CareerBgDotsImg from "../assets/image/Career/CareerBgDotsImg.svg";
import data from "../db.json";

function Career() {
  const careerData = data.career;
  console.log(careerData);
  const [selectedCareer, setSelectedCareer] = useState(0);
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
  // const { data, isLoading } = useFetch(shouldFetch ? "http://localhost:5000/career/" : null);

  // Scroll to page2 after data is fetched
  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollIntoView();
  //   }
  // }, [data]);

  return (
    <div className="career scroll-container">
      {/* <ScrollPageNav nowPage={1} /> */}
      <div className="career__section-1" id="career__section-1" ref={topRef}>
        <PageOne
          selectedCareer={selectedCareer}
          setSelectedCareer={setSelectedCareer}
          onSubmit={() => {
            scrollRef.current.scrollIntoView();
          }}
        />
      </div>
      <div className="career__section-2" id="career__section-2" ref={scrollRef}>
        <PageTwo data={careerData.careerInfo} />
      </div>
      <div className="career__section-3" id="career__section-3">
        <PageThree data={careerData.genderData} />
      </div>
      <div className="career__section-4" id="career__section-4">
        <PageFour data={careerData.salaryData} />
      </div>
      <div className="career__section-5" id="career__section-5">
        <PageFive data={careerData.mapData} topRef={topRef} />
      </div>
      <img src={CareerBgOneImg} className="career__background--1" />
      <img src={CareerBgDotsImg} className="career__background--2" />
      <img src={CareerBgQuestionImg} className="career__background--3" />
      <img src={CareerBgQuestionImg} className="career__background--4" />
      {/* <img src={CareerBgQuestionImg} className="career__background--5" /> */}
    </div>
  );
}

export default Career;

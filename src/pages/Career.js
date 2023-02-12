import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Career.scss";
import PageOne from "../components/career/PageOne";
import PageTwo from "../components/career/PageTwo";
import PageThree from "../components/career/PageThree";
import PageFour from "../components/career/PageFour";
import PageFive from "../components/career/PageFive";

function Career() {
  const [selectedCareer, setSelectedCareer] = useState(0);
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
    shouldFetch ? "http://localhost:5000/career/" : null
  );

  // Scroll to page2 after data is fetched
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, [data]);

  return (
    <div className="career scroll-container">
      <div className="career__section-1" id="career__section-1" ref={topRef}>
        <PageOne
          selectedCareer={selectedCareer}
          setSelectedCareer={setSelectedCareer}
          onSubmit={() => {
            setShouldFetch(true);
          }}
        />
      </div>
      {data && !isLoading && (
        <>
          <div
            className="career__section-2"
            id="career__section-2"
            ref={scrollRef}
          >
            <PageTwo data={data.careerInfo} />
          </div>
          <div className="career__section-3" id="career__section-3">
            <PageThree data={data.genderData} />
          </div>
          <div className="career__section-4" id="career__section-4">
            <PageFour data={data.salaryData} />
          </div>
          <div className="career__section-5" id="career__section-5">
            <PageFive data={data.mapData} topRef={topRef} />
          </div>
        </>
      )}
    </div>
  );
}

export default Career;

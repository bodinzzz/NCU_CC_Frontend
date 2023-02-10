import useFetch from "../hooks/useFetch";
import "./Career.scss";
import PageOne from "../components/career/PageOne";
import PageTwo from "../components/career/PageTwo";
import PageThree from "../components/career/PageThree";
import PageFour from "../components/career/PageFour";
import PageFive from "../components/career/PageFive";
import { useEffect, useState } from "react";

function Career() {
  // Reset shouldFetch to false after submit
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  // fetch data after submit
  const { data, isLoading } = useFetch(
    shouldFetch ? "http://localhost:5000/careerInfo/" : null
  );

  return (
    <div className="career scroll-container">
      <div className="career__section-1" id="career__section-1">
        <PageOne />
      </div>
      <div className="career__section-2" id="career__section-2">
        <PageTwo />
      </div>
      <div className="career__section-3" id="career__section-3">
        <PageThree />
      </div>
      <div className="career__section-4" id="career__section-4">
        <PageFour />
      </div>
      <div className="career__section-5" id="career__section-5">
        <PageFive />
      </div>
    </div>
  );
}

export default Career;

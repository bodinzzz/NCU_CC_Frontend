import { useState, useEffect } from "react";
import "./Graduated.scss";
import PageOne from "../components/graduated/PageOne";
import PageTwo from "../components/graduated/PageTwo";
import PageThree from "../components/graduated/PageThree";
import useFetch from "../hooks/useFetch";

function Graduated() {
  // Reset shouldFetch to false after submit
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  // fetch data after submit
  const { data, isLoading } = useFetch(
    shouldFetch ? "http://localhost:5000/disciplineData/" : null
  );

  return (
    <div className="graduated scroll-container">
      <div className="graduated__section-1" id="graduated__section-1">
        <PageOne />
      </div>
      <div className="graduated__section-2" id="graduated__section-2">
        <PageTwo />
      </div>
      <div className="graduated__section-3" id="graduated__section-3">
        <PageThree />
      </div>
    </div>
  );
}

export default Graduated;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    if (url) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Resource not found");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err.message);
          console.error(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

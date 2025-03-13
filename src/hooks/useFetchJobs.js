import { useState, useEffect } from "react";
import jobsData from "../../assets/data.json";

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setJobs(jobsData);
    } catch (error) {
      setError("Failed to load jobs data");
    }
  }, []);

  return { jobs, error };
};

export default useFetchJobs;

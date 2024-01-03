import { useEffect, useState } from "react";
import remotive from "../api/remotive";
import {
  CHARACTERS,
  JOBS_API_LIMIT,
  // JOBS_LISTING,
  // LAST_API_CALL,
} from "../utils/constants";
import { modifyApiData } from "../utils/utilityFunctions";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(CHARACTERS.EMPTY_STRING);
  const [category, setCategory] = useState('software-dev');
  const [errorMessage, setErrorMessage] = useState(CHARACTERS.EMPTY_STRING);

  const searchJobs = () => {
    setIsLoading(true);

    const params = {
      limit: 200,
    };

    if (search?.length !== 0) params.search = search;
    if (category?.length !== 0) params.category = category;

    remotive
      .get(CHARACTERS.EMPTY_STRING, {
        params,
      })
      .then((res) => {
        setIsLoading(false);
        setJobs(modifyApiData(res?.data?.jobs))
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage("Something went wrong!");
      });
  };

  // const loadApiDetails = async () => {
  //   const storedTimestamp = await AsyncStorage.getItem(LAST_API_CALL);
  //   let jobsListing = await AsyncStorage.getItem(JOBS_LISTING);

  //   jobsListing = safelyParseJSON(jobsListing) || [];

  //   // Check if the last API call was more than a 12 hours
  //   const twelveFourHoursAgo = new Date();
  //   twelveFourHoursAgo.setHours(twelveFourHoursAgo.getHours() - 12);

  //   if (
  //     !jobsListing ||
  //     jobsListing?.length === 0 ||
  //     !storedTimestamp ||
  //     new Date(storedTimestamp) < twelveFourHoursAgo
  //   ) {
  //     const currentTimestamp = new Date().toISOString();
  //     await AsyncStorage.setItem(LAST_API_CALL, currentTimestamp);
  //     searchJobs();
  //   } else {
  //     setIsLoading(false);
  //     setJobs(jobsListing);

  //     if (jobsListing?.length === 0) {
  //       setErrorMessage("Something went wrong!");
  //     }
  //   }
  // };

  useEffect(() => {
    searchJobs();
  }, []);

  return [jobs, errorMessage, isLoading, search, setSearch, category, setCategory, searchJobs];
};

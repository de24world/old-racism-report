import React, { useState, useEffect } from "react";
import axios from "axios";

import { IDataProps } from "../interfaces/interfaces";

// interface Props {}

function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);

  // async function fetchUrl() {
  //   await axios.get(url).then((response) => {
  //     setData(response.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   fetchUrl;
  // }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data, "res.data in useFetch");
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [data, isLoading];
}

export default useFetch;

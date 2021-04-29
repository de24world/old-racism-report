import React, { useState, useEffect } from "react";
import Axios from "axios";

interface Props {}

const useFetch = (props: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/api").then((res) => {
      // console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  return [data, isLoading];
};

export default useFetch;

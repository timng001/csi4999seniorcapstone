import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "f63646f9b54540d191a6b8189720bc50";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2021-03-13&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
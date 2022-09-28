import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import Personal from "../components/Personal/Personal";
import Properties from "../components/Properties/Properties";
import Articles from "../components/Articles/Articles";
const MainPage = () => {
  return (
    <>
      <Main />
      <Properties />
      <Personal />
      <Articles />
    </>
  );
};

export default MainPage;

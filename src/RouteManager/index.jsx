import React from "react";
import { Routes, Route } from "react-router-dom";
import InfoPages from "../Pages/InfoPages";

import MainPage from "../Pages/MainPage";

export const RouteManager = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/info" element={<InfoPages />} />
    </Routes>
  );
};

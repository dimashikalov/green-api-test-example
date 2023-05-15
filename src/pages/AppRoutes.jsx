import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./404Page.jsx/ErrorPage";
import MainPage from "./MainPage/MainPage";
import { MAIN_ROUTE } from "../utils/constsPath";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

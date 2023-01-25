import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  //   const checkLogin = sessionStorage.getItem("memberinfo");

  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/SignUp" element={<SignUp />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default Router;

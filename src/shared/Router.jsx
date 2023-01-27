import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
// 모달로 만들예정
import AddPost from "../pages/components/AddPost";
import AddPost2 from "../pages/components/AddPost2";

const Router = () => {
  //   const checkLogin = sessionStorage.getItem("memberinfo");

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/addpost2" element={<AddPost2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

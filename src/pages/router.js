import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import SignIn from "./SignIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
};

export default Router;

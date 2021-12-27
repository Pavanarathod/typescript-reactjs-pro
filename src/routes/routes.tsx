import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutpage, Homepage } from "crust/pages";

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

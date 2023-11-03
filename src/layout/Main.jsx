// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const Main = () => {
  return (
    <div className="font-Inter">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

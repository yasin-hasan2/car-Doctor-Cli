// import React from 'react';

import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/signIn">Log In</Link>
      </li>
      <li>
        <Link to="/signUp"> Register </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 h-28 mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline text-[#FFFFFF]   hover:border-[#FF3811] hover:text-textWhite  hover:bg-[#FF3811]  border-[#FF3811] ">
            Appointment{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

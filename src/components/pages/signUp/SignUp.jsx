// import React from 'react';
import { Link } from "react-router-dom";

import logo from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero  text-textWhite min-h-screen bg-base-200">
        <div className=" flex gap-10 lg:gap-28 flex-col lg:flex-row ">
          <div className=" w-1/2   text-center lg:text-left">
            <img src={logo} alt="" />
          </div>
          <div className="   text-center  w-1/2    shadow-md">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-textWhite btn-ghost bg-bgred ">
                  Sign Up{" "}
                </button>
              </div>
            </form>
            <p>
              Already have an account in Car Doctor{" "}
              <Link className="text-textRed" to="/signIn">
                {" "}
                Sign In{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

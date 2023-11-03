// import React from 'react';
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative ">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className=" absolute right-5 top-1/2  w-1/2 border-8 border-white  rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-3">
            <h3 className="text-textRed text-lg font-bold">About Us</h3>
            <h1 className="text-5xl font-bold text-textWhite ">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 text-base font-normal space-y-1 text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which look even slightly
              believable.
              <br />
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which look even slightly believable.
            </p>
            <button className="btn btn-ghost bg-bgred text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

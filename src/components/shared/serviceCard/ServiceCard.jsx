// import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card card-compact h-[21rem]  bg-base-100 shadow-xl">
        <figure>
          <img className="w-[20.625rem]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <p>Price : ${price} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {" "}
              <AiOutlineArrowRight className="text-lg font-bold"></AiOutlineArrowRight>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

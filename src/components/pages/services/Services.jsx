// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "../../shared/serviceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-10">
      <div className="text-center space-y-3 ">
        <h3 className="text-lg font-bold text-textRed">Our services</h3>
        <h3 className="text-5xl font-bold text-textWhite">Our Service Area</h3>
        <p className="text-base font-normal text-[#737373] ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

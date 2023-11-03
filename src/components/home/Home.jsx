// import React from 'react';

import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Banner from "../shared/banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;

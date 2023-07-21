import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner-Resort/Banner";

const Home = () => {
  return (
    <div>
      <div class="nav-bar">
        <Navbar />
      </div>
      <div class="banner">
        <Banner />
      </div>
    </div>
  );
};

export default Home;

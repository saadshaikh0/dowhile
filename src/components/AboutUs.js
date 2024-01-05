import React from "react";
import AboutUsCard from "./AboutUsCard";
const AboutUs = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h2>About Us</h2>
          <p> Meet Our Founders</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import react from "react";
import AboutUsCard from "./AboutUsCard";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#12100E] to-[#2B4162]">
      <h2 className="text-center font-bold text-white  text-4xl py-5">
        Our Services
      </h2>
      <div className="grid grid-cols-3">
        <AboutUsCard />
        <AboutUsCard />
        <AboutUsCard />
      </div>
    </div>
  );
};
export default Services;

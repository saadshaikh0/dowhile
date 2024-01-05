import react from "react";
import Person from "../assets/person.jpg";
const AboutUsCard = () => {
  return (
    <div className="shadow h-[400px] border-slate-200">
      <img src={Person} />
      <div className="h-full justify-end items-center flex-col">Saif</div>
    </div>
  );
};

export default AboutUsCard;

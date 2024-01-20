import React from "react";
import AboutUsImage from "../assets/aboutus.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 px-4">
        <div className="flex flex-col justify-center px-10">
          <h2 className="text-center font-bold text-4xl">About Us</h2>
          <p className="mt-4">
            Welcome to DoWhile Technologies, where innovation meets expertise!
            At DoWhile, we pride ourselves on being at the forefront of
            cutting-edge technology, specializing in bespoke website and app
            development solutions. Our seasoned team brings years of collective
            experience in the software industry, with proficiency across a
            spectrum of technologies, including Python, Java, and more. We
            understand that every project is unique, and our dedicated
            professionals leverage their diverse skill sets to deliver
            tailor-made solutions that not only meet but exceed our clients'
            expectations. From conceptualization to deployment, we are committed
            to crafting robust, scalable, and user-centric applications that
            empower businesses and elevate digital experiences. At DoWhile
            Technologies, we don't just build software; we forge partnerships
            and pave the way for your digital success.
          </p>
        </div>
        <div>
          <img src={AboutUsImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

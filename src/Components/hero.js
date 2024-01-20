import react from "react";
import HERO_BG from "../assets/hero_bg.jpg";
import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div
        className=" w-full bg-center bg-gray-500 bg-blend-multiply"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      >
        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fixed inset-x-0 top-0 flex items-center flex-row justify-between px-10 z-10 h-16">
              <div className="flex items-center">
                <div
                  className={`${
                    !isOpen ? "block" : "hidden"
                  } md:block font-extrabold text-white tracking-widest text-xl`}
                >
                  <a
                    style={{
                      fontFamily: "Dancing Script, cursive",
                    }}
                    href="#"
                    className=" transition duration-500 hover:text-blue-800 "
                  >
                    do While
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 text-white flex-row justify-between font-bold space-x-4">
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-800 transition duration-500 px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-800 transition duration-500 px-3 py-2"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-800 transition duration-500 px-3 py-2"
                  >
                    What we do
                  </a>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-800 transition duration-500 px-3 py-2"
                  >
                    What we have offered
                  </a>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-800 transition duration-500 px-3 py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleNavbar}
                  className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg> */}

                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-900`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                What we do
              </a>
              <a
                href="#"
                className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                What we have offered
              </a>
              <a
                href="#"
                className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h3 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Empowering Growth: Our Code, Your Success.
          </h3>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            Do While we Deliver Success.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Chase Success
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

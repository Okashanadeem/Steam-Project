import React from "react";
import Image from "next/image";
import subheadingcar from "../public/subheadingcar.jpg";
import Aboutimage from "../public/Aboutimage.jpg";
import Abouticon from "../public/Abouticon.jpg";
import Aboutimage2 from "../public/Aboutimage2.jpg";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header Section */}
      <header
        className="w-full text-white text-center flex items-center"
        style={{ backgroundColor: "#1c3e9d" }}
      >
        <div className="text-start md:ml-40 ml-10">
          <h1 className="md:mt-20 mt-10 font-bold md:text-5xl text-2xl">
            ABOUT US
          </h1>
          <div className="flex mt-4">
            <h1 className="font-semibold md:text-xl text-sm">Home &gt;&gt;</h1>
            <h1 className="text-black font-bold md:text-xl text-sm ml-2">
              About us
            </h1>
          </div>
        </div>
        <Image
          src={subheadingcar}
          alt="Subheading Car"
          className="md:w-2/4 w-2/5 md:h-96 h-40 md:ml-28 ml-10 md:pr-10 mr-6"
        />
      </header>

      {/* About Section */}
      <div className="md:py-24 py-12 md:flex md:ml-28 md:mr-28 ml-8">
        <Image
          src={Aboutimage2}
          alt="Mobile About Image"
          className="md:hidden w-11/12"
        />
        <Image
          src={Aboutimage}
          alt="About Image"
          className="rounded-lg h-auto w-11/12 md:block hidden"
        />
        <div className="md:ml-12 mt-10 mr-6">
          <h1 className="text-blue-600 font-bold text-lg">About CarBaazar</h1>
          <p className="font-bold mt-2" style={{ fontSize: 34 }}>
            Redefining the Car Showroom Experience
          </p>
          <p className="mt-5 text-sm">
            At our showroom, we redefine the car buying experience with
            exceptional service, cutting-edge vehicles, and customer-focused
            solutions tailored to your needs.
          </p>
          <div className="mt-5 md:flex">
            <div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex mt-3">
                  <Image src={Abouticon} alt="About Icon" className="w-6 h-6" />
                  <h1 className="mt-1 ml-1 text-xs">
                    {[
                      "Customer-Centric Approach",
                      "Comprehensive Vehicle Selection",
                      "Test Drive Convenience",
                    ][index]}
                  </h1>
                </div>
              ))}
            </div>
            <div className="md:ml-4 mt-3 md:mt-0">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex mt-3">
                  <Image src={Abouticon} alt="About Icon" className="w-6 h-6" />
                  <h1 className="mt-1 ml-1 text-xs">
                    {[
                      "Customer-Centric Approach",
                      "Comprehensive Vehicle Selection",
                      "Test Drive Convenience",
                    ][index]}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-8">
            <Link href="/about">
              <button
                className="w-32 h-9 rounded-3xl text-blue-600 border-blue-600 border-2 font-semibold flex justify-center items-center hover:bg-blue-600 hover:text-white hover:animate-pulse"
                style={{ fontSize: 11 }}
              >
                About CarBazaar
                <Image
                  src={Abouticon}
                  alt="Car Icon"
                  width={16}
                  height={16}
                  className="ml-2 hover:mix-blend-color-burn"
                />
              </button>
            </Link>
            <Link href="/contactus">
              <button className="flex hover:animate-pulse ml-4 items-center">
                <Image
                  src={Abouticon}
                  alt="Call Icon"
                  width={32}
                  height={32}
                  className="rounded-full hover:animate-spin"
                />
                <h1 className="ml-2 text-sm">+1 234 567 890</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

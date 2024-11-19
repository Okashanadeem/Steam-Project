import React from "react";
import Image from "next/image";
import Abouticon from "../public/tick.png";
import Link from "next/link";

const About: React.FC = () => {
  const bannerImg = "https://i.ibb.co/bdDtPCd/slider51.png";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="relative flex flex-col items-center text-center w-full px-6 py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">ABOUT US</h1>
        <p className="mt-4 text-sm md:text-lg max-w-3xl">
          Discover what makes CarBaazar your trusted destination for exceptional vehicles
          and an unmatched car-buying experience.
        </p>
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full md:w-2/3 mt-8 rounded-lg animate-zoom"
        />
      </header>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center px-6 py-12 md:py-24 max-w-6xl w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-blue-600 font-semibold text-lg">About CarBaazar</h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
            Redefining the Car Showroom Experience
          </p>
          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
            At CarBaazar, we strive to provide a seamless and enjoyable car-buying
            journey. With a wide selection of vehicles, customer-first services, and
            modern facilities, we aim to redefine your expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              "Customer-Centric Approach",
              "Comprehensive Vehicle Selection",
              "Test Drive Convenience",
              "Affordable Pricing Plans",
              "Easy Financing Options",
              "Trusted By Thousands",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <Image src={Abouticon} alt="Feature Icon" className="w-6 h-6" />
                <p className="ml-3 text-sm text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-12">
          <img
            src="https://i.pinimg.com/originals/36/f9/76/36f97663a6a4a6e7a9547e1b5f9d4087.gif"
            alt="About Us Image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-20 w-full gap-2">
        <Link href="/about">
          <button className="w-40 h-10 rounded-full text-white bg-blue-600 font-semibold flex justify-center items-center hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
        <Link href="/contactus">
          <button className="w-40 h-10 rounded-full text-white bg-blue-600 font-semibold flex justify-center items-center hover:bg-blue-700 transition">
            Contact Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

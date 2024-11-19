import React from "react";
import Image from "next/image";
import Aboutimage from "../public/Aboutimage.gif";
import Abouticon from "../public/tick.png";
import picture1 from "../public/person1.jpeg";
import picture2 from "../public/person2.webp";
import carhome from "../public/header.png";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Header Section */}
      <header className="w-full text-white bg-black md:flex md:pl-10 pl-10 pr-10" style={{ backgroundColor: "#1c3e9d" }}>
        <div className="md:ml-32 md:mt-20 mt-10">
          <h1 className="md:text-base text-sm">New In Stock</h1>
          <h1 className="text-white font-bold md:text-5xl text-3xl text-start md:mt-3">
            Explore The Next{" "}
            <span className="hover:text-black transition duration-300">Generation</span> Of Cars
          </h1>
          <p className="md:text-sm text-xs md:mt-6 mt-3">
            Discover cutting-edge innovation and exceptional performance with the latest models crafted for tomorrow's roadways.
          </p>
          <div className="flex md:mb-20 md:mt-4 mt-3 gap-2 mb-4">
            <div className="flex md:w-40 w-32 bg-black md:h-12 h-8 rounded-3xl items-center hover:bg-gray-900 hover:scale-105 transition-transform">
              <Link href="/car-listing" className="md:ml-6 ml-5 text-white hover:text-blue-600 font-semibold md:text-base text-xs transition duration-300">
                Buy This Car
              </Link>
            </div>
            <div className="flex md:w-40 w-32 bg-black md:h-12 h-8 rounded-3xl items-center hover:bg-gray-900 hover:scale-105 transition-transform">
              <Link href="/about" className="md:ml-6 ml-5 text-white hover:text-blue-600 font-semibold md:text-base text-xs transition duration-300">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <Image
  src={carhome}
  alt="Car Home"
  className="hidden md:block lg:w-1/2 lg:h-auto md:w-1/2 md:h-auto md:ml-20 mb-10 mt-2 md:pr-10 md:mt-32 md:mb-10"
/>
</header>

      <div className="md:py-24 py-12 md:flex md:ml-28 md:mr-28 mx-5">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={Aboutimage}
            alt="About Image"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full md:ml-12 mt-10 mr-6">
          <h1 className="text-blue-600 font-bold text-lg">About CarBaazar</h1>
          <p className="font-bold mt-2" style={{ fontSize: 34 }}>
            Redefining the Car Showroom Experience
          </p>
          <p className="mt-5 text-sm">
            At our showroom, we redefine the car buying experience with exceptional service, cutting-edge vehicles, and customer-focused solutions tailored to your needs.
          </p>

          {/* Action Button */}
          <div className="mt-6 flex">
            <Link
              href="/about"
              className="w-40 h-12 bg-blue-600 text-white rounded-3xl flex justify-center items-center hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>


      {/* Why Choose Us Section */}
      <section className="bg-white py-16 w-full">
        <h2 className="text-center text-3xl font-bold text-blue-600">Why Choose Us</h2>
        <p className="text-center text-sm mt-2 text-gray-600">
          Discover what sets CarBaazar apart from the competition.
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          {[
            {
              title: "Wide Range of Cars",
              description: "From luxury to economy, we offer vehicles to suit every preference and budget.",
              icon: Abouticon,
            },
            {
              title: "Transparent Pricing",
              description: "No hidden costs or surprises. Our pricing is clear and fair.",
              icon: Abouticon,
            },
            {
              title: "Excellent Support",
              description: "Our team is here to assist you every step of the way.",
              icon: Abouticon,
            },
            {
              title: "Certified Vehicles",
              description: "All our cars are thoroughly inspected for quality and reliability.",
              icon: Abouticon,
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg w-72 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Image src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue-600">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 w-full">
        <h2 className="text-center text-3xl font-bold text-blue-600">Testimonials</h2>
        <p className="text-center text-sm mt-2 text-gray-600">Here's what our happy customers have to say</p>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          {[picture1, picture2].map((pic, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg w-80 hover:scale-105 transition-transform">
              <Image src={pic} alt={`Customer ${index + 1}`} className="w-20 h-20 rounded-full mx-auto" />
              <h3 className="mt-4 text-center font-bold text-lg">John Doe</h3>
              <p className="text-center text-gray-600 text-sm">
                "CarBaazar is the best! I found the perfect car and the staff was incredibly helpful."
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

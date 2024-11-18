// src/page.tsx
import React from 'react';
import Image from 'next/image';
import Aboutimage from "../public/Aboutimage.jpg";
import Abouticon from "../public/tick.png";
import Aboutimage2 from "../public/Aboutimage2.jpg";
import picture1 from "../public/person1.jpeg";
import picture2 from "../public/person2.webp";
import carhome from "../public/header.png";
import Link from 'next/link';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">

      <header
        className="w-full text-white bg-black md:flex md:pl-10 pl-10 pr-10"
        style={{ backgroundColor: "#1c3e9d" }}
      >
        <div className="md:ml-32 md:mt-20 mt-10">
          <h1 className="md:text-base text-sm">New In Stock</h1>
          <h1 className="text-white font-bold md:text-5xl text-3xl text-start md:mt-3">
            Explore The Next <span className='hover:text-black transition duration-300'>Generation</span> Of Cars
          </h1>
          <p className="md:text-sm text-xs md:mt-6 mt-3">
            Discover cutting-edge innovation and exceptional performance with the latest models crafted for tomorrow roadways.
          </p>
          <div className="flex md:mb-20 md:mt-4 mt-3">
            <div className="flex md:w-40 w-32 bg-black md:h-12 h-8 rounded-3xl items-center hover:bg-gray-900 transition duration-300">
              <Link
                href="/car-listing"
                className="md:ml-6 ml-5 text-white hover:text-blue-600 font-semibold md:text-base text-xs transition duration-300"
              >
                Buy This Car
              </Link>
            </div>
            <Link
              href="/about"
              className="md:ml-10 ml-5 md:text-base text-xs md:mt-3 hover:text-black mt-1"
            >
              Explore More
            </Link>
          </div>
        </div>
        <Image
          src={carhome}
          alt="carhome"
          className="lg:w-1/2 lg:h-auto md:w-1/2 md:h-auto md:ml-20 mb-10 mt-2 md:pr-10 md:mt-32 md:mb-10"
        />
      </header>

      <div className='md:py-24 py-12  md:flex  md:ml-28 md:mr-28 ml-8 '>
        <Image
          src={Aboutimage2}
          alt='mobile about image'
          className='md:hidden w-11/12' />
        <Image
          src={Aboutimage}
          alt='AboutImage'
          className='rounded-lg h-auto w-11/12 md:block hidden '
        />
        <div className='md:ml-12 mt-10 mr-6'>
          <h1 className='text-blue-600 font-bold text-lg '>
            About CarBaazar
          </h1>
          <p className='font-bold mt-2' style={{ fontSize: 34 }}>Redefining the Car Showroom Experience</p>

          <p className='mt-5 text-sm'>At our showroom, we redefine the car buying experience with exceptional service, cutting-edge vehicles, and customer-focused solutions tailored to your needs.</p>

          <div className='mt-5 md:flex'>
            <div>
              <div className='flex'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className=' mt-1 ml-1' style={{ fontSize: 11 }}> Customer-Centric Approach</h1>
              </div>
              <div className='flex mt-3'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className='mt-1 ml-1' style={{ fontSize: 11 }}> Comprehensive Vehicle Selection</h1>
              </div>
              <div className='flex mt-3'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className='mt-1 ml-1' style={{ fontSize: 11 }}> Test Drive Convenience</h1>
              </div>
            </div>
            <div className='md:ml-4 mt-3 md:mt-0'>
              <div className='flex'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className='mt-1 ml-1' style={{ fontSize: 11 }}> Customer-Centric Approach</h1>
              </div>
              <div className='flex mt-3'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className='mt-1 ml-1' style={{ fontSize: 11 }}> Comprehensive Vehicle Selection</h1>
              </div>
              <div className='flex mt-3'>
                <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                <h1 className='mt-1 ml-1' style={{ fontSize: 11 }}> Test Drive Convenience</h1>
              </div>
            </div>

          </div>
          <div className='flex mt-8'>
            <Link className=' w-32 h-9 rounded-3xl text-blue-600 border-blue-600 border-2 font-semibold  flex justify-center pt-2 hover:bg-blue-600 hover:text-white hover:animate-pulse' style={{ fontSize: 11 }}
              href={"/about"}>About CarBazaar
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gm7gfAhbhp2Piir60pmfMYNxMfJnsOxevg&s" alt="car icon" className='w-3 h-4 ml-2 hover:mix-blend-color-burn ' />
            </Link>
            <Link className='flex hover:animate-pulse' href="/contactus">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90fMqy14E9QB4_M4gdKijq6yscvqRa1uMcw&s" alt="callicon" className='w-8 h-8 ml-8 rounded-full hover:animate-spin '
              />
              <h1 className='mt-1 text-sm ml-1'>+1 234 567 890</h1>
            </Link>
            <br /><br />
          </div>
        </div>

      </div>
      <div className='border-b-2 border-t-2 border-slate-100'>
        <div className='md:flex md:ml-48 ml-12 md:mr-48 mr-14 md:mt-16 mt-10 mb-10 md:mb-16'>
          <div className="bg-gray-100 py-12">
            <h2 className="text-center text-blue-600 font-bold text-lg">Why Choose CarBaazar</h2>
            <p className="text-center font-bold text-2xl mt-2">Our Key Benefits</p>

            <div className="grid md:grid-cols-3 gap-8 mt-10 px-8">
              {/* Card 1 */}
              <div className="group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src={Abouticon}
                  alt="Customer-Centric Approach"
                  className="w-12 h-12 mb-4 group-hover:scale-110 transition duration-300"
                />
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition duration-300">Customer-Centric Approach</h3>
                <p className="text-sm mt-2 opacity-80">
                  Experience unmatched customer service with solutions tailored to your needs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src={Abouticon}
                  alt="Comprehensive Vehicle Selection"
                  className="w-12 h-12 mb-4 group-hover:scale-110 transition duration-300"
                />
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition duration-300">Comprehensive Selection</h3>
                <p className="text-sm mt-2 opacity-80">
                  Choose from a diverse range of vehicles that meet every need and budget.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src={Abouticon}
                  alt="Test Drive Convenience"
                  className="w-12 h-12 mb-4 group-hover:scale-110 transition duration-300"
                />
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition duration-300">Test Drive Convenience</h3>
                <p className="text-sm mt-2 opacity-80">
                  Schedule test drives effortlessly to ensure you make the right choice.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="text-center">
          <h1 className="text-blue-600 text-lg font-bold">Testimonials</h1>
          <h2 className="text-3xl font-bold mt-2">What Our Clients Say</h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with CarBaazar.
            We take pride in delivering exceptional service and ensuring customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10 px-8 md:px-44">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <Image
              src={picture1}
              alt="Client 1"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-sm text-gray-600 mt-2 italic">
              "CarBaazar made my car buying experience seamless and enjoyable. The team was incredibly helpful and professional!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <Image
              src={picture2}
              alt="Client 2"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="font-bold text-lg">Jane Smith</h3>
            <p className="text-sm text-gray-600 mt-2 italic">
              "The diverse range of cars and the test drive convenience made choosing my dream car a breeze. Highly recommend!"
            </p>
          </div>
        </div>
      </div>



    </div>

  );
};

export default Home;


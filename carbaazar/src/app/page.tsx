// src/page.tsx
import React from 'react';
import Image from 'next/image';
import Aboutimage from "../public/Aboutimage.jpg";
import Abouticon from "../public/Abouticon.jpg";
import Aboutimage2 from "../public/Aboutimage2.jpg";
import picture1 from "../public/picture1.jpg";
import picture2 from "../public/picture2.jpg";
import Capture from "../public/Capture.jpg";
import Capture2 from "../public/Capture2.jpg";
import Capture3 from "../public/Capture3.jpg";
import carhome from "../public/carhome.jpg";
import Link from 'next/link';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
     <header className="w-full   text-white  bg-black md:flex md:pl-10 pl-10 pr-10"  style={{backgroundColor: "#1c3e9d"}}>
            <div className=" md:ml-32 md:mt-20 mt-10">
              <h1 className='md:text-base text-sm '>New In Stock</h1>
          <h1 className="text-white  font-bold md:text-5xl  text-3xl text-start  md:mt-3 " >Explore The Next Generation Of Cars</h1>
         <p className='md:text-sm text-xs md:mt-6 mt-3'>Discover cutting-edge innovation and exceptional performance the latest models crafted for tomorrow’s roadways.</p>
          <br />
          <div className='flex md:mb-20  md:mt-4'>
          <div className='flex md:w-40 w-32 bg-blue-600 md:h-12 h-8 rounded-3xl items-center justify-items-center'>
          <Link href={"/car-listing"}
          className='md:ml-6 ml-5 hover:text-black font-semibold md:text-base text-xs'
          >Buy This Car
          </Link>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gm7gfAhbhp2Piir60pmfMYNxMfJnsOxevg&s" alt="car icon" className='md:w-4 md:h-5 w-3 h-4 ml-2 mt-1 mix-blend-color-burn '  />
          </div>
          <Link href={"/about"} className='md:ml-10 ml-5 md:text-base text-xs md:mt-3 hover:text-black mt-1'>Explore More</Link>
          </div>
          </div>
         <Image
         src={carhome}
         alt='carhome'
         className="md:w-3/5 md:h-80 h-40  md:ml-20 mb-10  mt-5 md:pr-10 md:mt-32 md:mb-10 "/>
         
        </header>

     
            <div className='md:py-24 py-12  md:flex  md:ml-28 md:mr-28 ml-8 '>
              <Image
              src={Aboutimage2}
              alt='mobile about image'
              className='md:hidden w-11/12'/>
               <Image
               src={Aboutimage}
               alt='AboutImage'
               className='rounded-lg h-auto w-11/12 md:block hidden '
               />
               <div className='md:ml-12 mt-10 mr-6'>
                <h1 className='text-blue-600 font-bold text-lg '>
                About CarBaazar
                </h1>
                <p className='font-bold mt-2' style={{fontSize: 34}}>Redefining the Car Showroom Experience</p>

                <p className='mt-5 text-sm'>At our showroom, we redefine the car buying experience with exceptional service, cutting-edge vehicles, and customer-focused solutions tailored to your needs.</p>
                
                <div className='mt-5 md:flex'>
                  <div>
                  <div className='flex'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className=' mt-1 ml-1' style={{fontSize: 11}}> Customer-Centric Approach</h1>
                  </div>
                  <div className='flex mt-3'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className='mt-1 ml-1' style={{fontSize: 11}}> Comprehensive Vehicle Selection</h1>
                  </div>
                  <div className='flex mt-3'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className='mt-1 ml-1' style={{fontSize: 11}}> Test Drive Convenience</h1>
                    </div>
                  </div>
                  <div className='md:ml-4 mt-3 md:mt-0'>
                  <div className='flex'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className='mt-1 ml-1'style={{fontSize: 11}}> Customer-Centric Approach</h1>
                  </div>
                  <div className='flex mt-3'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className='mt-1 ml-1' style={{fontSize: 11}}> Comprehensive Vehicle Selection</h1>
                  </div>
                  <div className='flex mt-3'>
                    <Image src={Abouticon} alt="About Icon" className='w-6 h-6 ' />
                    <h1 className='mt-1 ml-1' style={{fontSize: 11}}> Test Drive Convenience</h1>
                    </div>
                  </div>
                  
                </div>
                <div className='flex mt-8'>
                <Link className=' w-32 h-9 rounded-3xl text-blue-600 border-blue-600 border-2 font-semibold  flex justify-center pt-2 hover:bg-blue-600 hover:text-white hover:animate-pulse' style={{fontSize: 11}}  
                href={"/about"}>About CarBazaar 
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gm7gfAhbhp2Piir60pmfMYNxMfJnsOxevg&s" alt="car icon" className='w-3 h-4 ml-2 hover:mix-blend-color-burn '  />
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
                  <Image
                  src={Capture}
                  alt='home image'
                  className=''/>
                   <Image
                  src={Capture2}
                  alt='home image'
                  className=''/>
                   <Image
                  src={Capture3}
                  alt='home image'
                  className=''/>
                  </div>
                </div>
            <div className="bg-white">
            <div className="md:ml-44 ml-8 mr-8 md:mr-44">
            <div className="  md:flex">
                <div>
            <h1 className="text-blue-600 md:text-lg text-sm font-bold pt-20 ">Testimonials</h1>
            <h1 className="md:text-3xl text-xl mt-2 font-bold">What Our Clients Say</h1>
            </div>
            <div className="md:ml-52  mt-3">
            <p className="text-xs opacity-90 md:w-96 w-5/6 md:mt-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium debitis possimus illo est odio inventore accusantium obcaecati hic nemo temporibus, officia cumque, numquam.
            </p>
            </div>
            </div>
            </div>
            <div className="md:flex mt-10 md:ml-44 md:mr-44 pb-20 ml-8 mr-8">
                <Image
                src={picture2}
                alt="testimonial1"
                className="w-11/12"
                />
                <Image
                src={picture1}
                alt="testimonial2"
                className="w-11/12 md:ml-4"
                />
            </div>
           </div>
          </div>
       
  );
};

export default Home;


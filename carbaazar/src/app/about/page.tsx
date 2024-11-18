import React from "react";
import Image from "next/image";
import subheadingcar from "../public/subheadingcar.jpg";
import Aboutimage from "../public/Aboutimage.jpg";
import Abouticon from "../public/Abouticon.jpg";
import Aboutimage2 from "../public/Aboutimage2.jpg";
import picture1 from "../public/picture1.jpg";
import picture2 from "../public/picture2.jpg";
import Link from "next/link";


const About: React.FC = () => {
    return (
      <div className="min-h-screen flex flex-col items-center bg-white">
        <header className="w-full   text-white text-center bg-black flex pl-10" style={{backgroundColor: "#1c3e9d"}} >
            <div className="">
          <h1 className="text-white md:mt-20 mt-10 font-bold md:text-5xl text-2xl text-start  md:ml-40">ABOUT US</h1>
          <div className="flex">
          <h1 className="text-white mt-4 font-semibold md:text-xl text-sm text-start md:ml-40">Home {'>>'}</h1>
          <h1 className="text-black mt-4 font-bold md:text-xl text-sm text-start ml-2">About us </h1>
          </div>
          </div>
         
            <Image src={subheadingcar} alt="sub heading car" className="md:w-2/4 w-2/5 md:h-96 h-40 md:ml-28 ml-10 md:pr-10 mr-6 "/>
         
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
                  <Link href="/about">
                <button className=' w-32 h-9 rounded-3xl text-blue-600 border-blue-600 border-2 font-semibold  flex justify-center pt-2 hover:bg-blue-600 hover:text-white hover:animate-pulse' style={{fontSize: 11}}  >About CarBazaar 
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gm7gfAhbhp2Piir60pmfMYNxMfJnsOxevg&s" alt="car icon" className='w-3 h-4 ml-2 hover:mix-blend-color-burn '  />
                </button>
                </Link>
                <Link href="/contactus">
                <button className='flex hover:animate-pulse'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90fMqy14E9QB4_M4gdKijq6yscvqRa1uMcw&s" alt="callicon" className='w-8 h-8 ml-8 rounded-full hover:animate-spin '/>
                <h1 className='mt-1 text-sm ml-1'>+1 234 567 890</h1>
                </button>
                </Link>
                <br /><br />
                </div>
              
                </div>
            </div>
            <div className="bg-slate-100 w-full ">
            <div className=" text-center ">
                
                    <h1 className="text-blue-600 md:text-lg text-base font-bold mt-20">Meet Our Team</h1>
                    <h1 className="md:text-3xl text-2xl mt-2 font-bold">Experts In Our Car Sales</h1>
                </div>
                <div className="mt-10 md:ml-40 md:mr-40 ml-10 mr-10 md:flex  ">
                   
                        <div className="border-2 rounded-lg flex  md:mb-20 mb-7">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s" alt="MAN 1" className="w-32 rounded-lg m-3" />
                            <div>
                            <h1 className="md:mt-3 mt-3 font-bold md:text-lg text-sm w-full ">Okasha Nadeem</h1>
                            <h1 className="md:text-sm text-xs md:pb-3 pb-3 border-b-2 w-full opacity-70">Student</h1>
                            <p className="md:mt-3 mt-3 md:text-sm text-xs opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis exercitationem doloremque accusantium vefhhvn yuvxgfhb jjgfjivk kjhcjh. </p>
                            </div>
                           
                        </div>
                        <div className="border-2 rounded-lg flex  md:ml-4 mb-20">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s" alt="MAN 1" className="w-32 rounded-lg m-3" />
                            <div>
                            <h1 className="md:mt-3 mt-2 font-bold md:text-lg text-sm w-full ">Muhammad Anas</h1>
                            <h1 className="md:text-sm text-xs md:pb-3 pb-1 border-b-2 w-full opacity-70">Student</h1>
                            <p className="md:mt-3 mt-1 md:text-sm text-xs opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis exercitationem doloremque accusantium vefhhvn yuvxgfhb jjgfjivk kjhcjh. </p>
                            </div>
                </div>
            </div>
            
            <iframe src="https://www.youtube.com/embed/bWlgfsU9JJk?si=nlTVH3aEy4_-jVqO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-96"></iframe>
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
        {/* <div className="bg-white h-screen">
            
            <div className="flex">
                <div>
              <h1 className="pt-28 pl-10 font-semibold text-orange-400 text-xl">Overview</h1>
              <h1 className="mt-3 font-semibold text-6xl pl-10 font-sans">Client</h1>
              <h1 className="font-semibold text-6xl pl-12 mt-3">feedback</h1>
              </div>
              <div className="flex">
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis </h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis alias fuga consequuntur!</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
              </div>

            </div>
            </div> */}
        </div>
    )}
    export default About;
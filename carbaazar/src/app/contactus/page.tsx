import React from "react";
import Image from "next/image";
import subheadingcar from "../public/subheadingcar.jpg";
import image3 from "../public/image3.jpg"
import image4 from "../public/image4.webp"
import images5 from "../public/images5.png"
import images6 from "../public/images6.png"



const ContactUs: React.FC = () => {
    return (
      <div className="min-h-screen md:flex md:flex-col items-center bg-white">
       <header className="w-full   text-white text-center bg-black flex pl-6" style={{backgroundColor: "#1c3e9d"}} >
            <div className="">
          <h1 className="text-white md:mt-20 mt-10 font-bold md:text-5xl text-2xl text-start  md:ml-40">CONTACT US</h1>
          <div className="flex">
          <h1 className="text-white mt-4 font-semibold md:text-xl text-sm text-start md:ml-40">Home {'>>'}</h1>
          <h1 className="text-black mt-4 font-bold md:text-xl text-sm text-start ml-2">Contact us </h1>
          </div>
          </div>
         
            <Image src={subheadingcar} alt="sub heading car" className="md:w-2/4 w-2/4 md:h-96 h-40 md:ml-28 ml-10 pr-10 "/>
         
        </header>
        <div  className=" md:pt-20 pt-10 pl-4 bg-slate-50 w-full h-screen">
        <div className="md:flex">
        <div>
        <h1 className="text-blue-600   md:ml-20 font-semibold pl-4 md:text-xl text-lg">Contact</h1>
        <div className="">
      <div className=" relative h-28">
        <div
          className="bg-cover  md:h-[54px] h-[44px] w-[52px] md:w-[68px] flex  items-center   relative rounded-full mt-4  md:ml-16   " 
          style={{
            backgroundImage: `url(${image3.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="relative z-10 text-black font-semibold md:text-6xl text-4xl ">
            <h1 className="ml-5 md:mt-12 mt-10">Let's </h1>{" "}
            <h1 className=" ml-3">Connect</h1>
            <div className="">
               
            </div>
           
          </div>
          
          </div>
          <div className="flex ">        
              <Image
          src={image4}
          alt= "contact-email "
          className="md:w-11 w-7 md:ml-20 ml-4 md:mt-20 mt-16 md:pb-5 pb-3 border-b-2"
          />
          <div className="md:pb-5 pb-3 border-b-2">
          <div className="container md:mt-20 mt-16 md:text-base text-sm pl-2 md:pl-4">Email us</div>
          <h1 className="container  md:text-base text-sm md:pl-4 pl-2 font-semibold md:w-80 w-60">ABC@gmail.com</h1>
          </div>
          </div>
          </div>
          <div className="flex mt-8 ">        
              <Image
          src={images5}
          alt= "contact-email "
          className="md:w-16 w-10 ml-2 md:ml-16 md:mt-20 mt-10 md:pb-5 pb-3 border-b-2"
          />
          <div className="md:pb-5 pb-3 border-b-2">
          <div className="container md:mt-20 mt-10 md:text-base text-sm md:pl-4 pl-2">Call us</div>
          <h1 className="container md:text-base text-sm  md:pl-4 pl-2 font-semibold md:w-80 w-60">+1 234 567 890 | +1 234 567 890</h1>
          </div>
          
          </div>
          <div className="flex  ">        
              <Image
          src={images6}
          alt= "contact-email "
          className="md:w-16 w-10 md:ml-16 ml-2 mt-5  md:pb-5 pb-3 border-b-2"
          />
          <div className="md:pb-5 pb-3 border-b-2">
          <div className="container mt-4  md:text-base text-sm pl-4">Office Address</div>
          <h1 className="container  md:text-base text-sm pl-4 font-semibold md:w-80 w-60">+1 234 567 890 </h1>
          </div>
          
          

        </div>
        </div>
        </div>
        <form className="md:ml-40 ml-3 mr-4">
            <div className="md:flex ">
            <div>
            <fieldset className="mt-10 md:mt-5">
                <legend>Your Name</legend>
                <div className="w-64 md:w-auto border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14 rounded-xl  w-64 md:w-64" placeholder="   ex.Muhammad" required/>
                </div>
            </fieldset>
            <fieldset className="mt-5">
                <legend>Your Contact No.</legend>
                <div className="w-64 md:w-auto border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14 rounded-xl  w-64" placeholder="   ex.123-456-789-0" required />
                </div>
            </fieldset>
            </div>
            <div className="md:ml-3">
            <fieldset className="mt-5">
                <legend>Your Email Address</legend>
                <div className="md:w-auto w-64 border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14  rounded-xl  w-64" placeholder="   ex.ABC@gmail.com" required />
                </div>
            </fieldset>
            <fieldset className=" mt-5">
                <legend>Subject</legend>
                <div className="md:w-auto w-64 border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14 rounded-xl  w-64" placeholder="   Your Subject" required/>
                </div>
            
            </fieldset>
            </div >
            </div>
            <div>
                <fieldset className="mt-6">
                    <legend className="">Message</legend>
                    <div className="border-2 mt-4 rounded-xl">
                    <input type="text" className="bg-slate-100   h-24 w-full   " placeholder="  Type Your Message" required />
                    </div>
                </fieldset>
            </div>
            <button className="bg-black w-40 h-12 rounded-lg mt-8 text-white">Submit</button>
        </form>
       
        </div>
        </div>
        </div>
    )}
    export default ContactUs;
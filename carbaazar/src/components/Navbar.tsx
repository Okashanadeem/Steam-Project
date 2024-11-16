// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import carlogo3 from "../public/carlogo3.png"

const Navbar: React.FC = () => {
  return (
    <nav className=" text-white shadow-md" style={{backgroundColor: "#1c3e9d"}}> {/* Royal Blue for primary accent */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="px-0 py-0"> {/* Golden Yellow for brand text */}
            <Link href="/" >
             <Image
             src={carlogo3}
             alt='carlogo'
             className='w-28 h-10 '
             />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-300"> {/* Sky Blue for hover effect */}
              Home
            </Link>
            <Link href="/car-listing" className="hover:text-blue-300">
              Car Listings
            </Link>
            <Link href="/login" className="hover:text-blue-300">
              Admin Login
            </Link>
            <Link href="/sell-your-car" className="hover:text-blue-300">
              Sell Your Car
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

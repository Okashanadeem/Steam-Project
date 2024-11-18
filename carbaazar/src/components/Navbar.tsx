'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../app/context/AuthProvider';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav
      className="text-white shadow-md sticky top-0 z-50 lg:backdrop-blur-lg" // Added sticky and z-50
      style={{ backgroundColor: '#1c3e9d' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 font-[Poppins]">
            <Link href="/">
              <span className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200">
                Ride Walay
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-300 transition duration-200">
              Home
            </Link>
            <Link href="/car-listing" className="hover:text-yellow-300 transition duration-200">
              Car Listings
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  href="/admin-dashboard"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  Admin Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-500 text-red-400 font-semibold transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="hover:text-yellow-300 font-semibold transition duration-200"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none hover:text-yellow-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-white hover:text-red-400"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            href="/"
            className="block hover:text-yellow-300 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/car-listing"
            className="block hover:text-yellow-300 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Car Listings
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/admin-dashboard"
                className="block hover:text-yellow-300 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left hover:text-red-500 text-red-400 font-semibold transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block hover:text-yellow-300 font-semibold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import carlogo3 from '../public/carlogo3.png';
import { useAuth } from '../app/context/AuthProvider';

const Navbar: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="text-white shadow-md" style={{ backgroundColor: '#1c3e9d' }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={carlogo3}
                alt="CarBaazar Logo"
                className="w-28 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Links */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Branding Section */}
        <div>
          <h2 className="text-lg font-bold font-[Poppins] mb-2">Ride Walay</h2>
          <p className="text-white">
            Explore the best cars for your ride. Your satisfaction, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/car-listing" className="hover:text-yellow-300 transition">
                Car Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <p className="text-white">
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:support@ridewalay.com"
              className="hover:text-yellow-300 transition"
            >
              support@nextgear.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a href="tel:+1234567890" className="hover:text-yellow-300 transition">
              +1 234 567 890
            </a>
          </p>
          <p>
            <span className="font-semibold">Address:</span> Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs text-white">
        <p>&copy; {new Date().getFullYear()} Ride Walay. All rights reserved.</p>
        <p>
          Made with ❤️ by Okasha Nadeem & Anas Shafat.{' '}
          <a
            href="https://www.google.com/maps/place/Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            Karachi
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

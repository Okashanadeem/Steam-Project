// src/page.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to CarBaazar</h1>
        <p className="text-lg mt-2">Your trusted showroom for quality cars</p>
      </header>

      <section className="mt-8 px-4 text-center">
        <h2 className="text-2xl font-semibold">About CarBaazar</h2>
        <p className="mt-4 text-gray-700">
          CarBaazar is your one-stop destination for buying premium cars. Discover our
          extensive collection and find the car of your dreams.
        </p>
        <Link
          href="/car-listing"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View Car Listings
        </Link>
      </section>
    </div>
  );
};

export default Home;

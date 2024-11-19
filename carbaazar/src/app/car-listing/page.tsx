// src/car-listing.tsx

import React from 'react';
import { carsData } from '../data/carsData'; // Importing the car data
import Image from 'next/image';

const CarListing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Car Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {carsData.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-md">
            <Image
            src={car.imageUrl}
            alt={car.name}
            className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{car.name}</h2>
            <p className="text-gray-700">{car.manufacturer}</p>
            <p className="text-blue-500">{car.price}</p>
            <p className="text-sm text-gray-500">Color: {car.color}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default CarListing;

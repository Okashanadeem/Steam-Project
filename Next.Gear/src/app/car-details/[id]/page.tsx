import { notFound } from 'next/navigation';
import { carsData } from '../../data/carsData'; // Adjust this path if necessary
import { FaUser, FaPhone } from 'react-icons/fa';
import { SiAdguard } from 'react-icons/si';
import { useState } from 'react';
import Image from 'next/image';

// Define the type for the car details params
interface CarParams {
  id: string;
}

export async function generateStaticParams() {
  const cars = carsData.map((car) => ({
    id: car.id.toString(), // Ensure the ID is a string
  }));

  return cars.map((car) => ({
    params: car,
  }));
}

const CarDetails = ({ params }: { params: CarParams }) => {
  const { id } = params;
  const [showNumber, setShowNumber] = useState(false);

  // Find the car based on the ID (converted to a number for matching)
  const car = carsData.find((car) => car.id === parseInt(id));

  if (!car) {
    notFound(); // Show a 404 page if the car is not found
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{car.title}</h1>
      <Image
        src={car.image}
        alt={car.title}
        className="w-full h-64 object-cover mb-4"
        width={800}
        height={600}
      />
      <p className="text-gray-600 mb-2">{car.description}</p>
      <p className="text-lg font-semibold">Price: ${car.price}</p>
      <p className="text-gray-600">Total Run: {car.totalRun} km</p>
      <p className="text-gray-600">Fuel Type: {car.fuelType}</p>
      <p className="text-gray-600">Transmission: {car.transmissionType}</p>

      {/* Seller Information */}
      <div className="flex flex-col justify-center items-start gap-3 bg-[#f0f0f0] px-14 py-8 rounded w-full md:w-1/2">
        <Image
          src={car.sellerPhoto}
          alt={`${car.sellerName}'s image`}
          className="w-[70px] h-[70px] rounded-[50%]"
          width={70}
          height={70}
        />
        <p className="text-lightBlack font-medium flex justify-start items-center gap-2 mt-3">
          <FaUser /> For sale by: <span className="font-semibold text-black">{car.sellerName}</span>
        </p>
        <p className="text-lightBlack font-medium flex justify-start items-center gap-2">
          <FaPhone /> Call seller: 
          <span>
            {showNumber === false ? (
              <button onClick={() => setShowNumber(true)} className="bg-[#17bbec] text-white px-2 py-1 rounded">
                Show number
              </button>
            ) : (
              <span className="font-semibold text-black">{car.sellerPhone}</span>
            )}
          </span>
        </p>
      </div>

      {/* Safety Tips */}
      <div className="flex flex-col justify-center items-start gap-3 bg-[#e8fffb] px-14 py-8 rounded w-full md:w-1/2 mt-5">
        <p className="text-[#0a800a] text-xl font-semibold flex justify-center items-center gap-2">
          <SiAdguard /> Safety tips
        </p>
        <ul className="list-disc pl-12 flex flex-col justify-start items-start gap-2 mt-2">
          <li>Meet in a safe and public place</li>
          <li>Don't pay in advance</li>
          <li>Try to keep things local</li>
          <li>Never give out financial information</li>
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;

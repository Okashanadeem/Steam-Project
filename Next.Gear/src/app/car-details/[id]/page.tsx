import { notFound } from 'next/navigation'; // Handle invalid IDs gracefully
import { carsData } from '../../data/carsData'; // Adjust the path based on your project structure
import Image from 'next/image';

interface Props {
  params: { id: string }; // Get the dynamic route parameter
}

const CarDetails = ({ params }: Props) => {
  const { id } = params;

  // Find the car based on the ID
  const car = carsData.find((car) => car.id === parseInt(id));

  if (!car) {
    notFound(); // Show a 404 page if the car is not found
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Image
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
          width={800}
          height={600}
        />
        <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
        <p className="text-gray-700 mb-2">Manufacturer: {car.manufacturer}</p>
        <p className="text-gray-700 mb-2">Color: {car.color}</p>
        <p className="text-gray-700 mb-2">Price: {car.price}</p>

        <p className="text-gray-700 mt-4">
          Description: {car.description}
        </p>

        <a
          href="/car-listing"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default CarDetails;

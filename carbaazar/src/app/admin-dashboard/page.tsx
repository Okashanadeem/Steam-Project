'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard: React.FC = () => {
  const router = useRouter();

  const [cars, setCars] = useState<any[]>([]); // State to hold the cars data from localStorage
  const [newCar, setNewCar] = useState({
    name: '',
    price: '',
    color: '',
    manufacturer: '',
    imageUrl: '',
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login'); // Redirect if not logged in
    }

    // Get cars data from localStorage
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCars = [...cars, newCar];
    setCars(updatedCars);

    // Save updated cars data to localStorage
    localStorage.setItem('cars', JSON.stringify(updatedCars));

    // Reset the form
    setNewCar({
      name: '',
      price: '',
      color: '',
      manufacturer: '',
      imageUrl: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 mt-4 md:mt-2 bg-white shadow-md hover:shadow-xl transition duration-200 text-[#ffb03b] p-6 flex flex-col justify-start mb-6 md:mb-0 rounded-lg">
        <h2 className="text-2xl text-black font-bold text-center mb-8">Admin Panel</h2>
        <ul className="flex flex-col space-y-4">
          <li>
            <button className="w-full text-left py-3 px-4 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300">
              Dashboard
            </button>
          </li>
          <li>
            <button className="w-full text-left py-3 px-4 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300">
              Manage Cars
            </button>
          </li>
          <li>
            <button className="w-full text-left py-3 px-4 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300">
              Manage Users
            </button>
          </li>
          <li>
            <button className="w-full text-left py-3 px-4 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300">
              Settings
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Welcome to the Admin Panel</h1>
        {/* Sell Your Car Form */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Sell Your Car</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">Car Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCar.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-semibold">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={newCar.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-lg font-semibold">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              value={newCar.color}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="manufacturer" className="block text-lg font-semibold">Manufacturer</label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              value={newCar.manufacturer}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-lg font-semibold">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={newCar.imageUrl}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Car
          </button>
        </form>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-blue-600">Total Cars</h3>
            <p className="text-2xl font-bold">{cars.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-blue-600">Total Sales</h3>
            <p className="text-2xl font-bold">$12,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold text-blue-600">Pending Requests</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;




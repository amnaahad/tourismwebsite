import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import placesData from '../placesData.json'; // Import the JSON file

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    persons: 1,
    destination: '',
    date: '',
    city: 'Rawalpindi',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, address, phone, persons, destination, date } = formData;

    // Validation patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/; // Adjust regex based on expected phone format
    const destinationPattern = /^[A-Za-z\s]+$/;

    let errors = [];

    // Check if destination is in placesData
    const destinationExists = placesData.places.some(place => place.title.toLowerCase() === destination.toLowerCase());

    if (!destinationExists) errors.push("Destination not available.");
    if (!namePattern.test(name)) errors.push("Name should contain only letters and spaces.");
    if (!emailPattern.test(email)) errors.push("Invalid email format.");
    if (address.trim().length === 0) errors.push("Address is required.");
    if (!phonePattern.test(phone)) errors.push("Phone number should be between 10 and 15 digits.");
    if (persons <= 0) errors.push("Number of persons must be greater than 0.");
    if (!destinationPattern.test(destination)) errors.push("Destination should contain only letters and spaces.");
    if (new Date(date) <= new Date()) errors.push("Date must be in the future.");

    if (errors.length > 0) {
        toast.error(errors.join(" "));
      } else {
        toast.success("Booking Successful");
        setTimeout(() => {
          onClose(); // Close the form after a slight delay to ensure toast is shown
        }, 1000); // Delay in milliseconds
      }
    };
    
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[550px]">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 text-xl"
          >
            <IoClose />
          </button>
          <h1 className="text-xl font-semibold text-black/70">
            Book Your Trip
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  No. of Persons:
                </label>
                <input
                  type="number"
                  name="persons"
                  value={formData.persons}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Destination:
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your destination"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Pick Up City:
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                </select>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-red-500 mb-4">
                  * 20% advance payment will be taken at the start of the trip and the rest of the amount at the end of the trip.
                </p>
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default BookingForm;

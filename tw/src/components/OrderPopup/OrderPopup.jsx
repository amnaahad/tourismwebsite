import React, { useState } from "react";
import placesData from '../../placesData.json'; // Import the JSON file
import { IoCloseOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    persons: 1,
    destination: "",
    date: "",
    city: "Rawalpindi",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
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
      setOrderPopup(false);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[540px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">No. of Persons</label>
                <input
                  type="number"
                  name="persons"
                  placeholder="No. of Persons"
                  value={formData.persons}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                  min="1"
                />
              </div>
              <div>
                <label className="block mb-1">Destination</label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
              </div>
              <div>
                <label className="block mb-1">Pick Up City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
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
                  onClick={handleSubmit}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default OrderPopup;

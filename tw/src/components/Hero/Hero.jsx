import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import placesData from '../../placesData.json'; // Ensure the correct path to JSON
import Modal from "../Modal/Modal"; // Ensure the correct path to Modal component
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(30000);
  const [destination, setDestination] = useState("");
  const [modalData, setModalData] = useState(null);

  const handleSearch = () => {
    if (!destination) {
      toast.error("Please enter a destination.");
      return;
    }

    const inputTitle = destination.trim().toLowerCase(); // Trim input and convert to lowercase

    // Find a place that matches the title
    const matchingData = placesData.places.find(place => {
      const placeTitle = place.title.toLowerCase(); // Convert place title to lowercase
      return placeTitle === inputTitle;
    });

    console.log("Searching for:", destination);
    console.log("Matching data:", matchingData);

    if (matchingData) {
      setModalData(matchingData);
      toast.success("Destination found!");
    } else {
      toast.error("No matching results found.");
    }
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <TypeAnimation
            sequence={[
              "It's time for new Adventures", // Types this string
              1000, // Waits 1s
              '', // Deletes the text
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '3em', fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: '1rem' }}
          />
          <div className="text-white mt-5">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-1xl text-center"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Kumrat"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date (Optional)
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">PKR {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="10000"
                    max="80000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
            >
              Search Now
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 w-full text-white flex justify-around">
          <div className="text-center">
            <p className="font-bold text-xl">12,000+</p>
            <p>Travel Experiences</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">25+</p>
            <p>Places</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">Best Price</p>
            <p>Guaranteed</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">35 Thousand+</p>
            <p>Customers Per Year</p>
          </div>
        </div>
      </div>
      {/* Conditionally render modal if modalData is set */}
      <Modal isOpen={!!modalData} onClose={() => setModalData(null)} place={modalData} />
      <ToastContainer />
    </div>
  );
};

export default Hero;

import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { FaHotel, FaBus, FaUtensils, FaFirstAid } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, place }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-4xl w-full h-auto flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-xl"
        >
          <IoClose />
        </button>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-80 lg:h-auto overflow-hidden flex items-center justify-center mt-6 lg:mt-0">
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{place.title}</h1>
              <p className="text-lg mb-2"><strong>Description:</strong> {place.description}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <FaHotel className="text-primary mr-2" />
                  <span>Hotel</span>
                </div>
                <div className="flex items-center">
                  <FaBus className="text-primary mr-2" />
                  <span>Transport</span>
                </div>
                <div className="flex items-center">
                  <FaUtensils className="text-primary mr-2" />
                  <span>Food</span>
                </div>
                <div className="flex items-center">
                  <FaFirstAid className="text-primary mr-2" />
                  <span>First Aid</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg mb-2"><strong>Location:</strong> {place.location}</p>
              <p className="text-lg mb-2"><strong>Price:</strong> Rs {place.price}</p>
              <p className="text-lg mb-2"><strong>Days:</strong> {place.days}</p>
              <p className="text-lg mb-2"><strong>Month:</strong> {place.month}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

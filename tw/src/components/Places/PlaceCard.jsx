// src/components/Places/PlaceCard.jsx
import React from 'react';

const PlaceCard = ({ img, title, location, price, days, month, onExplore }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-300">{location}</p>
        <p className="text-gray-300">Rs {price}</p>
        <p className="text-gray-300">{days} days</p>
        <p className="text-gray-300">{month}</p>
        <button
          onClick={onExplore}
          className="mt-4 px-3 py-2 bg-primary text-white rounded-md"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;

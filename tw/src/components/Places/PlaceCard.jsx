import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineCalendarToday } from 'react-icons/md';

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  days,
  month,
  id,
  onExplore,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer transform hover:-translate-y-2">
      <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-gray-600 text-sm">
            <MdOutlineCalendarToday className="mr-1" />
            <span>{days} Days</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MdOutlineCalendarToday className="mr-1" />
            <span>{month}</span>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <IoLocationSharp className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="border-t-2 pt-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">From Rs: {price}/-</div>
            <button
              onClick={onExplore}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceCard from './PlaceCard';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Places = ({ limit, heading }) => {
  const [placesData, setPlacesData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from JSON server
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/places');
        setPlacesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  };

  const displayedPlaces = limit ? placesData.slice(0, limit) : placesData;

  return (
    <div className="bg-gray-50 py-10">
      <section data-aos="fade-up" className="container mx-auto">
        <h1 className="my-8 border-l-4 border-primary pl-2 text-3xl font-bold">
          {heading}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedPlaces.map((item) => (
            <PlaceCard
              key={item.id}
              {...item}
              onExplore={() => handleOpenModal(item)}
            />
          ))}
        </div>
        {limit && (
          <div className="flex justify-center mt-8">
            <Link
              to="/TourPackages"
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              View More
            </Link>
          </div>
        )}
        {selectedPlace && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} place={selectedPlace} />
        )}
      </section>
    </div>
  );
};

export default Places;

// src/pages/PlaceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PlacesData from '../components/Places/Places'; // Adjust the import path if needed

const PlaceDetail = () => {
  const { id } = useParams();
  const place = PlacesData.find(p => p.id === parseInt(id));

  if (!place) {
    return <p>Place not found</p>;
  }
  console.log(place); 
  return (
    
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{place.title}</h1>
      <img src={place.img} alt={place.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-2">{place.description}</p>
      <p className="text-lg mb-2"><strong>Location:</strong> {place.location}</p>
      <p className="text-lg mb-2"><strong>Price:</strong> Rs {place.price}</p>
      <p className="text-lg mb-2"><strong>Days:</strong> {place.days}</p>
      <p className="text-lg mb-2"><strong>Month:</strong> {place.month}</p>
    </div>
  );
};

export default PlaceDetail;

// src/components/Places/Places.jsx
import React from 'react';
import PlaceCard from './PlaceCard';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/places/boat.jpg';
import Img2 from '../../assets/places/tajmahal.jpg';
import Img3 from '../../assets/places/water.jpg';
import Img4 from '../../assets/places/place4.jpg';
import Img5 from '../../assets/places/place5.jpg';
import Img6 from '../../assets/places/place6.jpg';
import Img7 from '../../assets/places/bashu.png';
import Img8 from '../../assets/places/neelam.png';
import Img9 from '../../assets/places/sharan.png';
import Img10 from '../../assets/places/naltar.png';

const PlacesData = [
  { id: 1, img: Img1, title: 'Skardu', location: 'Pakistan', description: 'Skardu, nestled in the heart of the Gilgit-Baltistan region...', price: 36000, days: 3, month: 'June' },
  { id: 2, img: Img2, title: 'Fairy Meadows', location: 'Pakistan', description: 'Fairy Meadows is a stunningly beautiful alpine meadow...', price: 27000, days: 4, month: 'July' },
  { id: 3, img: Img3, title: 'Naran Kaghan', location: 'Pakistan', description: 'Naran Kaghan is a breathtaking valley in northern Pakistan...', price: 16000, days: 5, month: 'August' },
  { id: 4, img: Img4, title: 'Hunza', location: 'Pakistan', description: 'Hunza is a stunning valley in northern Pakistan...', price: 32000, days: 6, month: 'September' },
  { id: 5, img: Img5, title: 'Kumrat', location: 'Pakistan', description: 'Kumrat is a picturesque valley in Pakistan\'s Khyber Pakhtunkhwa province...', price: 23000, days: 3, month: 'October' },
  { id: 6, img: Img6, title: 'Kashmir', location: 'Pakistan', description: 'Kashmir, often referred to as Paradise on Earth...', price: 15200, days: 4, month: 'November' },
  { id: 7, img: Img7, title: 'Bashu', location: 'Pakistan', description: 'Bashu Valley is a picturesque region in Pakistan\'s Balochistan province...', price: 20000, days: 5, month: 'December' },
  { id: 8, img: Img8, title: 'Neelam Valley', location: 'Pakistan', description: 'Neelam Valley, located in the Azad Kashmir region of Pakistan...', price: 13200, days: 6, month: 'January' },
  { id: 9, img: Img9, title: 'Sharan Forest', location: 'Pakistan', description: 'Sharan Forest is a serene and lush green woodland...', price: 15200, days: 3, month: 'February' },
  { id: 10, img: Img10, title: 'Naltar Valley', location: 'Pakistan', description: 'Naltar Valley, located in the Gilgit-Baltistan region of Pakistan...', price: 15200, days: 4, month: 'March' },
];

const Places = ({ limit, heading }) => {
  const navigate = useNavigate();

  const handleExplore = (id) => {
    navigate(`/place/${id}`);
  };

  const displayedPlaces = limit ? PlacesData.slice(0, limit) : PlacesData;

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
              onExplore={() => handleExplore(item.id)}
            />
          ))}
        </div>
        {limit && (
          <div className="flex justify-center mt-8">
            <Link
              to="/tourpackages"
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              View More
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Places;

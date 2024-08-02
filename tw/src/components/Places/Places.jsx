import React from "react";
import PlaceCard from "./PlaceCard";
import { Link } from "react-router-dom";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import Img7 from "../../assets/places/bashu.png";
import Img8 from "../../assets/places/neelam.png";
import Img9 from "../../assets/places/sharan.png";
import Img10 from "../../assets/places/naltar.png";

const PlacesData = [
  {
    img: Img1,
    title: "Skardu",
    location: "Pakistan",
    description: "Skardu, nestled in the heart of the Gilgit-Baltistan region, is renowned for its breathtaking landscapes, including towering peaks, serene lakes, and stunning valleys, making it a paradise for adventure enthusiasts and nature lovers.",
    price: 36000,
  },
  {
    img: Img2,
    title: "Fairy Meadows",
    location: "Pakistan",
    description:
      "Fairy Meadows is a stunningly beautiful alpine meadow located at the base of Nanga Parbat in northern Pakistan, offering breathtaking views and serene landscapes.",
    price: 27000,
  },
  {
    img: Img3,
    title: "Naran Kaghan",
    location: "Pakistan",
    description:
      "Naran Kaghan is a breathtaking valley in northern Pakistan renowned for its scenic landscapes, lush green meadows, and pristine lakes, offering a serene escape into nature's beauty.",
    price: 16000,
  },
  {
    img: Img4,
    title: "Hunza",
    location: "Pakistan",
    description: "Hunza is a stunning valley in northern Pakistan renowned for its breathtaking landscapes, towering mountains, and vibrant culture.",
    price: 32000,
  },
  {
    img: Img5,
    title: "Kumrat",
    location: "Pakistan",
    description:
      "Kumrat is a picturesque valley in Pakistan's Khyber Pakhtunkhwa province, renowned for its lush landscapes, crystal-clear rivers, and stunning mountain views.",
    price: 23000,
  },
  {
    img: Img6,
    title: "Kashmir",
    location: "Pakistan",
    description:
    "Kashmir, often referred to as Paradise on Earth is a picturesque region in South Asia known for its stunning landscapes, including lush valleys, snow-capped mountains, and serene lakes.",
    price: 15200,
  },
  {
    img: Img7,
    title: "Bashu",
    location: "Pakistan",
    description:
    "Bashu Valley is a picturesque region in Pakistan's Balochistan province, renowned for its stunning natural landscapes, lush greenery, and serene environment.",
    price: 20000,
  },
  {
    img: Img8,
    title: "Neelam Valley",
    location: "Pakistan",
    description:
    "Neelam Valley, located in the Azad Kashmir region of Pakistan, is renowned for its breathtaking landscapes, lush green meadows, and crystal-clear rivers.",
    price: 13200,
  },
  {
    img: Img9,
    title: "Sharan Forest",
    location: "Pakistan",
    description:
    "Sharan Forest is a serene and lush green woodland located in the Kaghan Valley of Pakistan, known for its dense coniferous trees and tranquil natural beauty.",
    price: 15200,
  },
  {
    img: Img10,
    title: "Naltar Valley",
    location: "Pakistan",
    description:
    "Naltar Valley, located in the Gilgit-Baltistan region of Pakistan, is renowned for its stunning landscapes, vibrant lakes, and skiing opportunities.",
    price: 15200,
  },
  
];

const Places = ({ handleOrderPopup, limit, heading }) => {
  const displayedPlaces = limit ? PlacesData.slice(0, limit) : PlacesData;

  return (
    <div className="bg-gray-50 py-10">
      <section data-aos="fade-up" className="container mx-auto">
        <h1 className="my-8 border-l-4 border-primary pl-2 text-3xl font-bold">
          {heading}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedPlaces.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
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
      </section>
    </div>
  );
};

export default Places;

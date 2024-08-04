import React, { useState, useEffect, useRef } from 'react';
import Hero2 from "../components/Hero/Hero2"; 
import TourImg from '../assets/tour.webp'; // Add path to your images
import AdventureImg from '../assets/adventure.jpg'; // Add path to your images
import HotelImg from '../assets/hotel.jpg'; // Add path to your images
import CarImg from '../assets/tour.jpg';
import GImg from '../assets/guide.webp';

const services = [
  {
    name: 'Customized Tours',
    image: TourImg,
    description: 'Explore amazing destinations and guided tours.',
  },
  {
    name: 'Adventure Sports',
    image: AdventureImg,
    description: 'Experience thrilling adventures and outdoor activities.',
  },
  {
    name: 'Guide Services',
    image: GImg, 
    description: 'Explore amazing destinations with our amazing guides.',
  },
  {
    name: 'Hotel Reservation',
    image: HotelImg,
    description: 'Stay at luxurious hotels and enjoy top-notch amenities.',
  },
  {
    name: 'Rental Cars',
    image: CarImg,
    description: 'Travel without a problem with our reliable transport service. ',
  },
];

const ServiceCards = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '2px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Hero2 pageName="Services" />
      <div 
        ref={sectionRef}
        className={`container py-8 transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
      >
        <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold ">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {services.map((service) => (
            <div
              key={service.name}
              className="w-full sm:w-80 md:w-96 lg:w-[350px] p-4"
            >
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover transition-transform transform hover:scale-110" // Add scale effect to image on hover
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCards;

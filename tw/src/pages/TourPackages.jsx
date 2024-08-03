import React from 'react';
import Hero2 from '../components/Hero/Hero2';
import Places from '../components/Places/Places';

const TourPackages = () => {
  const handleOrderPopup = () => {
    // Handle the order popup logic here
  };

  return (
    <>
      <Hero2 pageName="Tour Packages" />
      <div className="pt-14">
        <Places handleOrderPopup={handleOrderPopup} heading="Tour Packages"/>
      </div>
    </>
  );
};

export default TourPackages;

import React from "react";
import Hero2 from "../components/Hero/Hero2"; // Import the Hero2 component
import Places from "../components/Places/Places";

const PlacesRoute = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero2 pageName="Places" /> {/* Add the Hero2 component */}
      <div className="pt-14">
      <Places handleOrderPopup={handleOrderPopup} heading={"Best Places To Visit"} /> {/* Show all places */}
      </div>
    </>
  );
};

export default PlacesRoute;

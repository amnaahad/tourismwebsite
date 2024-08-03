import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
        <h1 className="text-6xl font-bold text-white text-center mt-4">It's time for new Adventures</h1> 
          <div className="text-white mt-5">
          
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-1xl text-center"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Kumrat"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">PKR  {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="10000"
                    max="80000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
        
              Search Now
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 w-full text-white flex justify-around">
          <div className="text-center">
            <p className="font-bold text-xl">12,000+</p>
            <p>Travel Experiences</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">25+</p>
            <p>Places</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">Best Price</p>
            <p>Guaranteed</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">35 Thousand+</p>
            <p>Customers Per Year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

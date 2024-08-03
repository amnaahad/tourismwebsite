import React from "react";
import Hero2 from "../components/Hero/Hero2"; 
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <Hero2 pageName="About Us" />
      <div className="container pt-8"> {/* Adjusted padding top */}
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Safar.com (Pvt) Ltd. is a registered & licenced platform for families, students and dynamic nature explorers to fulfil their need for adventure. For everyone out there, from the hard core adrenaline junkie to the average Joe wanting a simple escape from the mundaneness of everyday life.Our vision is to turn your travel dreams into reality. With passion and expertise we are here to help you to make your tour memorable.Empowering your travel dreams into epic adventure. We are your partner in making your journey unforgettable memories.
          </p>
          <br />
          <p>
            Explore the beauties of nature of Pakistan with us. Join in domestic tours of northern areas and make memorable memories.
          </p>
        </div>
      </div>
      <div className="container pt-2"> {/* Adjusted padding top */}
        <div className="py-10">
          <h1 className=" my-1 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Why Choose Us
          </h1>
          <p>
            At Safar.com, we are dedicated to delivering unparalleled travel experiences with our deep local knowledge, personalized service, and commitment to quality. Our expert guides ensure that you explore hidden gems and iconic landmarks, while our tailor-made itineraries cater to your unique preferences and needs. With a focus on safety, comfort, and authentic cultural encounters, we strive to turn every journey into a memorable adventure. Choose us for an extraordinary travel experience where every detail is meticulously crafted for your enjoyment.
          </p>
          <br />
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

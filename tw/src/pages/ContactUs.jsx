import React from 'react';
import Hero2 from '../components/Hero/Hero2'; // Assuming Hero2 is your hero section component
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Icons for contact details
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Here, you can handle form submission (e.g., send data to an API)
    // For now, we'll just show a success toast message
    toast.success("Message sent successfully!");

    // You can also clear the form or perform other actions here if needed
    e.target.reset(); // Resets the form fields
  };

  return (
    <>
      <Hero2 pageName={"Contact Us"} />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Your message here"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-primary mr-3" size={20} />
                <p className="text-lg">Street 14, Sector I-8, Islamabad, Pakistan</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary mr-3" size={20} />
                <p className="text-lg">+92 345 6789095</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-primary mr-3" size={20} />
                <p className="text-lg">safardotcom@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="relative w-full h-64">
            <iframe
              title="Google Maps"
              className="absolute inset-0 w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.2210128904627!2d73.07856401498607!3d33.71580328073494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc6aaad0a0a03%3A0xa9b7de91487dcd82!2sI-8%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1690354635510!5m2!1sen!2sbd"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default ContactUs;

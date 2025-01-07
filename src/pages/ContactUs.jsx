import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="bg-base-300">
      <Helmet>
        <title>Contact Us | Visarena</title>
      </Helmet>


      <div className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-[url('https://i.ibb.co.com/W5qCVMP/abstract-blur-luxury-hotel-lobby-background-1339-98418.jpg')] bg-cover bg-center"></div>
        <div className="relative text-center text-black py-20">
          <h1 className="text-5xl font-extrabold leading-tight">Contact Us</h1>
          <p className="mt-4 text-xl">
            Have questions? We're here to assist you with all your visa-related inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-base-100">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-semibold text-primary mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Phone */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone</h3>
              <p className="text-lg text-gray-600">+1 (234) 567-8901</p>
            </div>
            {/* Email */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
              <p className="text-lg text-gray-600">support@visarena.com</p>
            </div>
            {/* Address */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
              <p className="text-lg text-gray-600">456 Global Lane, Cityville, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-base-300 py-16">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl font-semibold text-primary text-center mb-12">Send Us a Message</h2>
          <div className="flex justify-center">
            <form
              action="mailto:support@visarena.com"
              method="POST"
              encType="text/plain"
              className="w-full max-w-2xl bg-base-100 p-10 rounded-lg shadow-lg"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default ContactUs;

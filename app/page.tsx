"use client";

// pages/page.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurServices';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import './globals.css'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Auto Keyz - Jaguar Land Rover Key Replacements</title>
        <meta name="description" content="Auto Keyz specializes in Jaguar Land Rover key replacements, offering reliable and prompt services." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Auto Keyz" />
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col justify-center items-center p-0 m-0" 
            style={{ backgroundImage: "url('/images/RRS_25MY_STEALTH_040424_02.jpg')", 
                      backgroundPosition: 'center', 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat' }}>
          <div className="backdrop-filter backdrop-brightness-75 flex flex-col justify-center items-center w-full h-full p-0 m-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white m-0 p-0">Auto Keyz</h1>
            <p className="text-gray-200 text-base md:text-lg lg:text-xl mt-4 p-0 m-0">Professional Key Replacement & Diagnostics</p>
            <div className="mt-6 flex flex-col items-center space-y-4 p-0 m-0">
              {/* Call Us Button */}
              <a href="tel:+4407769017971" 
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg w-40 text-center">Call Us</a>
              
              {/* Get A Quote Button */}
              <button onClick={handleScrollToContact} 
                      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg w-40 text-center" 
                      style={{ transform: 'translateY(-10px)' }}>Get A Quote</button>
            </div>
          </div>
        </div>
        
        <section id="services" className="my-8">
          <OurServices />
        </section>
        <section id="pricing" className="my-8">
          <Pricing />
        </section>
        <section id="contact" className="my-8">
          <ContactForm />
        </section>
      </Layout>
    </>
  );
};

export default HomePage;

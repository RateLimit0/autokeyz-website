import React, { useState } from 'react';

const OurServices: React.FC = () => {
  const services = [
    {
      name: "Spare Keys",
      description: "Including mobile visit, spare car supplied and programmed, with a 12-month guarantee.",
      emoji: "🔑",
    },
    {
      name: "All Keys Lost",
      description: "Call out service, vehicle opening, new key supplied and programmed, with a 12-month guarantee.",
      emoji: "🔓",
    },
    {
      name: "Keyless Vehicle Module",
      description: "Supply and replacement of KVM, including new keys supplied and programmed.",
      emoji: "🚗",
    },
    {
      name: "Emergency Call Out",
      description: "Emergency service for vehicle opening and new car keys supplied and programmed.",
      emoji: "⏰",
    },
  ];

  const brands = [
    { src: 'images/landrover-logo.png', alt: 'Land Rover' },
    { src: 'images/rangerover-logo.png', alt: 'Range Rover' },
    { src: 'images/jaguar-logo.png', alt: 'Jaguar' },
    { src: 'images/porsche-logo.png', alt: 'Porsche' }
  ];

  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  const handleNext = () => {
    setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const handlePrev = () => {
    setCurrentBrandIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  return (
    <div className="bg-gray-800 p-6 my-6 rounded-lg text-white text-center md:text-left">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Brands</h2>
        <div className="relative flex items-center justify-center md:justify-center md:space-x-6">
          <button onClick={handlePrev} className="absolute md:relative left-0 md:left-auto md:-ml-10 text-white text-4xl px-4 py-2 hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img src={brands[currentBrandIndex].src} alt={brands[currentBrandIndex].alt} className="w-32 h-32 md:w-48 md:h-48 object-contain" />
          <button onClick={handleNext} className="absolute md:relative right-0 md:right-auto md:-mr-10 text-white text-4xl px-4 py-2 hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-4">
        {services.map((service, index) => (
          <div key={service.name}
               className={`flex w-full my-4 md:my-0`}>
            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center bg-gray-700 rounded-lg p-4 w-full`}>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="flex justify-center items-center w-24 h-24 rounded-full ml-4 mr-4 bg-gray-600">
                <span role="img" aria-label={service.name} className="text-3xl">{service.emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

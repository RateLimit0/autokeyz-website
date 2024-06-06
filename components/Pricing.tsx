// components/Pricing.tsx
import React from 'react';

const Pricing: React.FC = () => {
  const pricingDetails = [
    {
      title: "Spare Keys",
      price: "From £190",
      details: "Includes spare car key, mobile visit, key supplied and programmed, and a 12-month guarantee."
    },
    {
      title: "All Keys Lost",
      price: "From £350",
      details: "Includes call out, vehicle opening, new key supplied and programmed, and a 12-month guarantee."
    },
    {
      title: "Keyless Vehicle Module",
      price: "From £350",
      details: "Includes supply and replacement of KVM, and new keys supplied and programmed."
    },
    {
      title: "Emergency Call Out",
      price: "From £425",
      details: "Includes emergency call out service, vehicle opening, and new car keys supplied and programmed."
    }
  ];

  return (
    <div className="bg-gray-700 p-6 my-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Pricing</h2>
      <div className="space-y-4">
        {pricingDetails.map(pricing => (
          <div key={pricing.title} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">{pricing.title}</h3>
            <p>{pricing.price} - {pricing.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

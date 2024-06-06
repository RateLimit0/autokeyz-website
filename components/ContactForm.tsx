import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  postCode: string;
  vehicleModel: string;
  vehicleRegistration: string;
  message: string;
  isVehicleLocked: string;
  doesVehicleRunAndDrive: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    postCode: '',
    vehicleModel: '',
    vehicleRegistration: '',
    message: '',
    isVehicleLocked: '',
    doesVehicleRunAndDrive: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://162.0.229.131:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData as any)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          postCode: '',
          vehicleModel: '',
          vehicleRegistration: '',
          message: '',
          isVehicleLocked: '',
          doesVehicleRunAndDrive: ''
        });
      } else {
        throw new Error('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message.');
    });
  };

  return (
    <section id="contact" className="py-8 px-4 bg-gray-800 mt-8 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <div className="flex justify-center">
          <button
            onClick={() => window.open('https://wa.me/447769017971', '_blank')}
            className="bg-green-500 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg mb-6 hover:bg-green-600 transition-colors"
          >
            <img src="images/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
            <span>WhatsApp Us</span>
          </button>
        </div>
        
      </div>
      <div className="bg-gray-700 p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number *"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <input
            type="text"
            name="postCode"
            placeholder="Postcode *"
            required
            value={formData.postCode}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <input
            type="text"
            name="vehicleModel"
            placeholder="Vehicle Model"
            value={formData.vehicleModel}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <input
            type="text"
            name="vehicleRegistration"
            placeholder="Vehicle Registration"
            value={formData.vehicleRegistration}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-black"
          ></textarea>
          <div className="flex justify-between items-center gap-4 mb-4">
            <label className="font-bold">Is Vehicle Locked?</label>
            <div className="flex gap-2">
              <button type="button" className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'Yes' ? 'bg-green-500' : 'bg-gray-500'}`} onClick={() => setFormData({...formData, isVehicleLocked: 'Yes'})}>Yes</button>
              <button type="button" className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'No' ? 'bg-red-500' : 'bg-gray-500'}`} onClick={() => setFormData({...formData, isVehicleLocked: 'No'})}>No</button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <label className="font-bold">Does Vehicle Run And Drive?</label>
            <div className="flex gap-2">
              <button type="button" className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'Yes' ? 'bg-green-500' : 'bg-gray-500'}`} onClick={() => setFormData({...formData, doesVehicleRunAndDrive: 'Yes'})}>Yes</button>
              <button type="button" className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'No' ? 'bg-red-500' : 'bg-gray-500'}`} onClick={() => setFormData({...formData, doesVehicleRunAndDrive: 'No'})}>No</button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

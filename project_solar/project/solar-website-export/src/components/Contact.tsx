import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    monthlyBill: '',
    rooftopArea: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-sky-500" />,
      title: "Phone",
      details: ["+91 9876543210", "+91 9876543211"],
    },
    {
      icon: <Mail className="w-6 h-6 text-sky-500" />,
      title: "Email",
      details: ["info@solarpro.com", "support@solarpro.com"],
    },
    {
      icon: <MapPin className="w-6 h-6 text-sky-500" />,
      title: "Office",
      details: ["123 Solar Street", "New Delhi, India 110001"],
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-500" />,
      title: "Hours",
      details: ["Mon-Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
    },
  ];

  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", 
    "Ahmedabad", "Kolkata", "Surat", "Jaipur", "Lucknow", "Kanpur"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Solar Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your solar journey? Our experts are here to help you design the perfect 
            solar solution for your home and maximize your savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request Your Personalized Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Electricity Bill
                  </label>
                  <input
                    type="number"
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="₹ Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rooftop Area (sq ft)
                  </label>
                  <input
                    type="number"
                    name="rooftopArea"
                    value={formData.rooftopArea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter area in sq ft"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Get Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-sky-100 mb-8 leading-relaxed">
                Our solar experts are ready to help you make the switch to clean energy. 
                Contact us today for a free consultation and personalized quote.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sky-100">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose SolarPro?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Free site survey and system design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Maximum government subsidy assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Professional installation in 1-3 days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">25-year comprehensive warranty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 monitoring and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
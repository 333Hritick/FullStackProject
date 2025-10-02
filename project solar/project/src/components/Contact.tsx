import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import axios from"axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
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
  const [eligibilityMessage, setEligibilityMessage] = useState<string | null>(null);

  const checkEligibility = (data: any) => {
  const area = parseFloat(data.rooftopArea);
  const bill = parseFloat(data.monthlyBill);

  if (isNaN(area) || isNaN(bill)) {
    return "⚠️ Please enter valid rooftop area and monthly bill.";
  }

  if (area < 100) {
    return "❌ Your rooftop area is too small for solar installation.";
  }

  if (data.roofShade === "Yes") {
    return "⚠️ Your roof has shade, solar efficiency may be low.";
  }

  // Estimate savings (60% of bill)
  const estimatedSavings = Math.round(bill * 0.6);
  return `✅ Eligible! You could save around ₹${estimatedSavings} per month on your bill.`;
};


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const eligibilityResult = checkEligibility(formData);
  setEligibilityMessage(eligibilityResult);

try {
     await axios.post("http://127.0.0.1:8000/api/quote/", formData);

    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
   
    setFormData({
        name: "",
        email: "",
        phone: "",
        district: "",
        monthlyBill: "",
        rooftopArea: "",
        message: "",
      });
    }
       catch (error: any) {
    console.error("Error submitting form:", error.response?.data || error.message);
    alert("Something went wrong. Please try again.");
  }
};

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-sky-500" />,
      title: "Phone",
      details: ["+91 9835659280", "+91 9386577855"],
    },
    {
      icon: <Mail className="w-6 h-6 text-sky-500" />,
      title: "Email",
      details: ["skshyamkumar983@gmail.com", "hritickkumar3138@gmail.com"],
    },
    {
      icon: <MapPin className="w-6 h-6 text-sky-500" />,
      title: "Office",
      details: ["Ashiyana Digha Roaad", "India, Bihar Patna - 800025"],
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-500" />,
      title: "Hours",
      details: ["Mon-Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
    },
  ];

  const biharDistricts = [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai",
    "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran",
    "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur",
    "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura",
    "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada",
    "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur",
    "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan",
    "Supaul", "Vaishali", "West Champaran"
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
  District*
</label>
<select
  name="district"
  value={formData.district}
  onChange={handleInputChange}
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
>
  <option value="">Select your district</option>
  {biharDistricts.map((dist, index) => (
    <option key={index} value={dist}>
      {dist}
    </option>
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
            {eligibilityMessage && (
  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center font-medium">
    {eligibilityMessage}
  </div>
)}

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
                Why Choose MAC Solar?
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
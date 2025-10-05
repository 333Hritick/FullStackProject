import React from 'react';
import { Leaf, DollarSign, Home, Zap, Award, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: "Massive Savings",
      description: "Save 70-90% on electricity bills with solar power. Average savings of ₹50,000+ per year for typical homes.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint by 4-5 tons of CO2 annually. Help create a cleaner environment for future generations.",
    },
    {
      icon: <Home className="w-12 h-12 text-sky-500" />,
      title: "Increase Home Value",
      description: "Solar installations increase property value by 15-20%. Make your home more attractive to future buyers.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Energy Independence",
      description: "Generate your own power and reduce dependence on grid electricity. Store excess energy with battery backup options.",
    },
    {
      icon: <Award className="w-12 h-12 text-purple-500" />,
      title: "Government Support",
      description: "Get up to 40% subsidy from central and state governments. Additional tax benefits and accelerated depreciation for businesses.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Expert Installation",
      description: "Professional installation by certified technicians. Comprehensive maintenance and monitoring support included.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solar power isn't just good for the environment—it's great for your wallet too. 
            Discover the amazing benefits of switching to clean, renewable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join over 10,000 satisfied customers who've made the switch to solar energy
          </p>
          <button className="bg-white text-sky-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
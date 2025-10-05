import React from 'react';
import { CheckCircle, IndianRupee, Building, Home as HomeIcon } from 'lucide-react';

const Subsidies = () => {
  const subsidyPrograms = [
    {
      title: "Central Government Subsidy (MNRE)",
      amount: "₹14,588 per kW",
      maxAmount: "Up to ₹78,000",
      capacity: "For systems up to 3kW",
      description: "Direct subsidy on solar panel installation for residential rooftop systems",
      eligibility: ["Individual house owners", "Group housing societies", "Residential welfare associations"],
    },
    {
      title: "State Government Incentives",
      amount: "₹10,000-20,000 per kW",
      maxAmount: "Up to ₹50,000",
      capacity: "Varies by state",
      description: "Additional state-specific subsidies and incentives for solar adoption",
      eligibility: ["Varies by state policy", "Residential consumers", "Agricultural users"],
    },
    {
      title: "Net Metering Benefits",
      amount: "100% credit for excess power",
      maxAmount: "No limit",
      capacity: "All system sizes",
      description: "Sell excess solar power back to the grid at retail electricity rates",
      eligibility: ["All solar installations", "Grid-connected systems", "Approved by electricity board"],
    },
  ];

  const taxBenefits = [
    {
      title: "Income Tax Deduction",
      benefit: "Up to ₹1.5 lakh under Section 80C",
      icon: <IndianRupee className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Accelerated Depreciation",
      benefit: "80% depreciation in first year for businesses",
      icon: <Building className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "GST Benefits",
      benefit: "5% GST on solar modules (reduced rate)",
      icon: <HomeIcon className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <section id="subsidies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Government Subsidies & Incentives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Indian government is committed to promoting solar energy adoption. Take advantage of these 
            generous subsidies and tax benefits to make solar installation more affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {subsidyPrograms.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-8 border border-sky-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-sky-500">{program.amount}</span>
                </div>
                <p className="text-lg font-semibold text-green-600">{program.maxAmount}</p>
                <p className="text-sm text-gray-500">{program.capacity}</p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Eligibility:</h4>
                <ul className="space-y-2">
                  {program.eligibility.map((criteria, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Additional Tax Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {taxBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Total Potential Savings
            </h4>
            <p className="text-4xl font-bold text-white mb-2">₹1,50,000+</p>
            <p className="text-green-100">
              Combining subsidies, tax benefits, and electricity bill savings for a typical 3kW system
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Check Your Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subsidies;
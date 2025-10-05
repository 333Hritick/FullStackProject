import React from 'react';
import { CheckCircle, Home, Zap, Settings, Users } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-sky-500" />,
      title: "Free Consultation",
      description: "Our solar experts assess your energy needs, roof condition, and provide customized recommendations.",
      duration: "1-2 days",
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: "System Design & Approval",
      description: "We design your solar system, handle government approvals, and secure necessary permits and subsidies.",
      duration: "7-14 days",
    },
    {
      icon: <Home className="w-12 h-12 text-green-500" />,
      title: "Professional Installation",
      description: "Certified technicians install your solar panels with minimal disruption to your daily routine.",
      duration: "1-3 days",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Grid Connection & Monitoring",
      description: "We handle grid connection, net metering setup, and provide ongoing monitoring and maintenance.",
      duration: "7-10 days",
    },
  ];

  const features = [
    "25-year comprehensive warranty",
    "Free maintenance for 5 years",
    "Real-time performance monitoring",
    "24/7 customer support",
    "Insurance coverage included",
    "Government subsidy processing",
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Installation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From consultation to power generation, we handle everything. Our streamlined process 
            ensures your solar system is up and running quickly with minimal hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-50 transition-colors">
                  {step.icon}
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
              <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                {step.duration}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-sky-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included in Our Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  End-to-End Service
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We take care of everything from initial consultation to ongoing maintenance. 
                  Your only job is to enjoy the savings!
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Installation Time</span>
                    <span className="font-semibold text-sky-500">15-30 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Warranty Period</span>
                    <span className="font-semibold text-green-500">25 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Rating</span>
                    <span className="font-semibold text-yellow-500">4.9/5 ⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Start Your Installation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
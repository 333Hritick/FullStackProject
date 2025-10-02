import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Zap, TrendingUp, Sun } from 'lucide-react';

const Calculator = () => {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [rooftopArea, setRooftopArea] = useState(500);
  const [calculations, setCalculations] = useState({
    systemSize: 0,
    totalCost: 0,
    subsidy: 0,
    netCost: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    co2Savings: 0,
  });

  useEffect(() => {
    // Solar calculations
    const unitsPerMonth = monthlyBill / 6; // Assuming ₹6 per unit
    const systemSize = Math.min((unitsPerMonth * 12) / 1200, rooftopArea / 100); // kW
    const totalCost = systemSize * 60000; // ₹60,000 per kW
    const subsidy = Math.min(systemSize * 14588, 78000); // MNRE subsidy
    const netCost = totalCost - subsidy;
    const annualSavings = monthlyBill * 12 * 0.85; // 85% savings
    const paybackPeriod = netCost / annualSavings;
    const co2Savings = systemSize * 1.5; // tons per year

    setCalculations({
      systemSize: Math.round(systemSize * 10) / 10,
      totalCost: Math.round(totalCost),
      subsidy: Math.round(subsidy),
      netCost: Math.round(netCost),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Savings: Math.round(co2Savings * 10) / 10,
    });
  }, [monthlyBill, rooftopArea]);

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solar Savings Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how much you can save with solar power. Get instant estimates for system size, 
            costs, subsidies, and your potential savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-8">
              <CalcIcon className="w-8 h-8 text-sky-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Calculate Your Savings</h3>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Monthly Electricity Bill
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹1,000</span>
                    <span className="font-semibold text-sky-500">₹{monthlyBill.toLocaleString()}</span>
                    <span>₹20,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Available Rooftop Area (sq ft)
                </label>
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={rooftopArea}
                  onChange={(e) => setRooftopArea(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>200 sq ft</span>
                  <span className="font-semibold text-sky-500">{rooftopArea.toLocaleString()} sq ft</span>
                  <span>2000+ sq ft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Sun className="w-6 h-6 text-yellow-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">System Details</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">System Size</p>
                  <p className="text-2xl font-bold text-sky-500">{calculations.systemSize} kW</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Cost</p>
                  <p className="text-2xl font-bold text-gray-900">₹{calculations.totalCost.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Financial Benefits</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Government Subsidy</span>
                  <span className="font-semibold text-green-500">-₹{calculations.subsidy.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Net Cost</span>
                  <span className="font-semibold text-gray-900">₹{calculations.netCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Savings</span>
                  <span className="font-semibold text-green-500">₹{calculations.annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="font-bold text-sky-500">{calculations.paybackPeriod} years</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">Environmental Impact</h4>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{calculations.co2Savings} tons</p>
                <p className="text-green-100">CO2 savings per year</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Get a detailed quote and professional consultation from our solar experts
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Get Personalized Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
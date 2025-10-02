
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name:"shyam kumar",
      location: "patna",
      images:"images/shyam.jpg",
      rating: 5,
      systemSize: "3 kW",
      savings: "₹45,000/year",
      review: "MAC Solar made the entire process seamless. From getting government subsidies to installation, everything was handled professionally. My electricity bill has reduced by 85%!",
    },
    {
      name: "Rohit kumar",
      location: "Naboutpur",
      image: "images/rohit.jpg",
      rating: 5,
      systemSize: "5 kW",
      savings: "₹72,000/year",
      review: "Best decision ever! The team was knowledgeable, installation was quick, and I'm already seeing massive savings. The monitoring app helps me track my energy production daily.",
    },
    {
      name: "Ranjan Kumar",
      location: "Aarah",
      image: "images/ranjan.jpg",
      rating: 5,
      systemSize: "4 kW",
      savings: "₹58,000/year",
      review: "Excellent service and support. They helped me get the maximum government subsidy and the payback period is just 4 years. Highly recommend MAC Solar for anyone considering solar.",
    },
    {
      name: "Aryan Kumar",
      location: "Bihita",
      image: "images/solarbg.jpg",
      rating: 5,
      systemSize: "6 kW",
      savings: "₹85,000/year",
      review: "Outstanding experience from start to finish. The system has been running flawlessly for over a year. Great customer service and the app makes monitoring so easy.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50MW+", label: "Solar Capacity Installed" },
    { number: "₹500Cr+", label: "Customer Savings" },
    { number: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've made the switch to solar energy. 
            Read their success stories and see how much they're saving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <Quote className="w-6 h-6 text-sky-300" />
                  </div>
                  <p className="text-gray-500">{testimonial.location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-500">System Size</p>
                  <p className="font-semibold text-sky-500">{testimonial.systemSize}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Annual Savings</p>
                  <p className="font-semibold text-green-500">{testimonial.savings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Community of Solar Champions
            </h3>
            <p className="text-sky-100 mb-6 max-w-md">
              Be part of India's clean energy revolution and start saving money today
            </p>
            <button className="bg-white text-sky-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Get Your Solar Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
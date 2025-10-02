# src/components/Hero.tsx

```typescript
import React from 'react';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-sky-400 via-sky-500 to-emerald-400">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Power Your Home with
            <span className="block text-yellow-300">Clean Solar Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of homeowners who've switched to solar and save up to 90% on electricity bills 
            with government subsidies up to ₹78,000
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-white text-sky-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center">
              Calculate Savings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-500 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Clean Energy</h3>
              <p className="text-white/80">100% renewable solar power for your home</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Save Money</h3>
              <p className="text-white/80">Reduce electricity bills by up to 90%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">25 Year Warranty</h3>
              <p className="text-white/80">Guaranteed performance and peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const PhasedServiceSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
          alt="Dartboard background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Phased & Sequential Service Delivery Method
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Leverage experience, technical and domain expertise of our teams through waterfall-based project execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-3 rounded transition-colors">
              <MessageCircle size={20} />
              <span>Contact us</span>
            </button>
            
            <button className="flex items-center space-x-2 text-white hover:text-cyan-400 font-semibold px-6 py-3 transition-colors">
              <span>More about us</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
    </section>
  );
};

export default PhasedServiceSection;
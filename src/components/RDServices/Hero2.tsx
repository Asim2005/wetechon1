import React from 'react';
import video from '../../assets/videos/Ai.mp4';
import ContactForm from '../ContactForm';
import {  Link } from 'react-router-dom';

const Hero2: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accelerate Innovation and Build New Digital Products
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Innovate faster, enable disruption and accelerate technology roadmaps with R&D as a Service.
            </p>
            <Link
              to="/Eco-System-Enablement"
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded transition-colors"
            >
              Case Studies
            </Link>
          </div>

          {/* Right Contact Section */}
          < ContactForm />
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#2563eb"
            d="M0,64L1440,96L1440,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero2;

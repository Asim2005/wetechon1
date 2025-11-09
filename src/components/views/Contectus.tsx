import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Contectus from '../ContactForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  notRobot: boolean;
}

interface Location {
  city: string;
  country: string;
  mapUrl: string;
}

const ContactSection: React.FC = () => {
  const [] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    notRobot: false
  });

  const locations: Location[] = [
    {
      city: 'San Francisco',
      country: 'USA',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194464803644!2d-122.41941708468197!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8268754777597!2d-79.38318368450183!3d43.653226279121314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1234567890'
    },
    {
      city: 'Belgrade',
      country: 'Serbia',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.564183203401!2d20.45741631564234!3d44.81617997909846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade%20Fortress!5e0!3m2!1sen!2srs!4v1234567890'
    },
    {
      city: 'New York',
      country: 'USA',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98823492346447!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890'
    },
    {
      city: 'London',
      country: 'UK',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2779749310126!2d-0.12765842346785596!3d51.50735097181401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1234567890'
    },
    {
      city: 'Amsterdam',
      country: 'The Netherlands',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4489075395524!2d4.893614615688785!3d52.37403497978823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sRijksmuseum!5e0!3m2!1sen!2snl!4v1234567890'
    }
  ];

  


  return (
    <div className="w-full">
      {/* Hero Section with Form */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Contact Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-200">
                Work With Us on Accelerating Innovation
              </h3>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-xl mx-auto lg:ml-auto">
              <div className="bg-white rounded-lg shadow-2xl p-8">
               <Contectus/>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Choose Another Way Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Choose Another Way to Get in Touch
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Send an e-mail
              </h4>
              <a href="mailto:wetechon@outlook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                wetechon@outlook.com
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Call us
              </h4>
              <div className="space-y-1">
                <a href="tel:+92 313 8129685" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  +92 313 8129685
                </a>
                <a href="tel:+442074520120" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  +92 313 8129685
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Our Locations
            </h3>
            <p className="text-gray-600">
              Presence in USA, Canada, UK, Serbia and the Netherlands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 bg-blue-600 text-white">
                  <h4 className="text-lg font-semibold flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {location.city}, {location.country}
                  </h4>
                </div>
                <div className="h-64">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.city} location`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
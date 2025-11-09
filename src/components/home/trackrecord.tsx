import { useState } from 'react';

const TrackRecordSection = () => {
  const [activeTab, setActiveTab] = useState('service');

  const serviceProviders = [
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/07/Photo-1-9.png', // Add your image src here
      tag: 'Custom solutions for',
      title: 'Telecommunications Companies',
      link: 'Read more',
      href: '/R&D-as-a-Service'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/08/Photo-2-8-boost.png', // Add your image src here
      tag: 'Custom solutions for',
      title: 'Cloud Service Providers',
      link: 'Read more',
      href: '/Cloud Service Provider'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/08/Photo-3-4-concentrate.png', // Add your image src here
      tag: 'Custom solutions for',
      title: 'Managed Service Providers',
      link: 'Read more',
      href: '/Managing Service Providers'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-8">
            A Decade of Proven Track Record Specializing in Solutions for
          </h2>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('service')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'service'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-gray-400 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Service Providers
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-gray-400 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Software Vendors
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        {activeTab === 'service' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceProviders.map((item, index) => (
              <div
                key={index}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image - Add your image src to the img tag below */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm mb-3 text-gray-300">{item.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.link}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'software' && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">
              Success of a modern ISVs is driven by their ability to achieve continuous growth. We work with many software vendors around the world to enable them to do exactly that.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackRecordSection;

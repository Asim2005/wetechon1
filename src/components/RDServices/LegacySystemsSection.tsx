import  { useState } from 'react';

const legacySystemsSection = () => {
  const [activeTab, setActiveTab] = useState('service');

  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Consolidate past M&A',
      description: 'Accelerate integration of newly acquired technology/products.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: 'Integrate Systems',
      description: 'Consolidate disparate billing and provisioning systems and disparate service infrastructure.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Reduce Cost',
      description: 'Move away from legacy, improve operational efficiency and reduce overhead & maintenance costs.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Centralize Platforms',
      description: 'Migrate customers, billing and services from a legacy to a new, centralized platform.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Strengthen Security',
      description: 'Improve security and agility by embracing up-to-date technology.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Automate Migration',
      description: 'Industrialize and automate the migration processes through tailored migration tools.'
    }
  ];

  const serviceProvidersItems = [
    'Complete OSS/BSS platform and control panel migrations',
    'Customer/account meta data',
    'Subscription information, historic invoices & billing',
    'Services: email, domain names, DNS, servers, 3rdparty ISV services, etc.',
    'OSS/BSS systems: CloudBlue Commerce, AppDirect, Plesk, WHMCS, cPanel, Interworks.cloud, in-house built control panels, etc.'
  ];

  const softwareVendorsItems = [
    'Backend integration and data consolidation',
    'Code-base refactoring',
    'Legacy internal IT consolidation'
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            Partner with us
          </span>

          <h2 className="text-3xl md:text-4xl font-normal text-gray-700 mb-16">
            Don't let legacy systems slow you down.
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-left">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Core Expertise */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-700 text-center mb-12">
            Our Core Expertise Based on Your Business Type
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('service')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'service'
                  ? 'bg-sky-400 text-white'
                  : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Service Providers
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-sky-400 text-white'
                  : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Software Vendors
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'service' && (
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-base mb-8">
                Successfully migrated millions of customers, services and subscriptions including:
              </p>
              <div className="space-y-4">
                {serviceProvidersItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'software' && (
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-base mb-8">
                Successfully executed technology and product integrations after Mergers & Acquisitions:
              </p>
              <div className="space-y-4">
                {softwareVendorsItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default legacySystemsSection;
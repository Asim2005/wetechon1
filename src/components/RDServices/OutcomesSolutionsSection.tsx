
const OutcomesSolutionsSection = () => {
  const outcomes = [
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Stay Competitive',
      description: 'Embrace new technological developments quickly and stay competitive with new market entrants.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Domain Knowledge',
      description: 'Overcome the lack of breadth in necessary domain knowledge around ISV family.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Reduce Complexity',
      description: 'Integrate into myriad of available marketplaces while reducing technical effort.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Grow Customer Base',
      description: 'Increase reach and channels, expand your reach and open new revenue engines.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Focus on Product',
      description: 'Continue to focus on resources between R&D, technical acceleration and acquisition frameworks.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Retain Customers',
      description: 'Ensure customer retention while avoiding churn and changing customer demands and market trends.'
    }
  ];

  const solutions = [
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/09/software-development-and-modernization.png', // Add Software Development image
      title: 'Software Development & Modernization',
      description: 'Future-proof your business by building Cloud-first solutions, modernizing and optimizing your applications.',
      link: 'Read more'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/09/channel-ecosystem-enablement.png', // Add Ecosystem Enablement image
      title: 'Ecosystem Enablement',
      description: 'Expand your reach, win more customers, and drive growth through our tailored Ecosystem Enablement solutions.',
      link: 'Read more'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/09/system-and-platform-migration.png', // Add System & Platform Migration image
      title: 'System & Platform Migration',
      description: 'Optimize operations by integrating systems or consolidating data with our end-to-end migration solution.',
      link: 'Read more'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Outcomes Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Partner with us
          </span>
          
          <h2 className="text-3xl md:text-4xl font-normal text-gray-700 mb-4">
            Outcomes We Help You Achieve
          </h2>
          
          <p className="text-gray-500 text-base mb-12">
            Success of modern ISVs is driven by their ability to grow continuously.
          </p>

          {/* Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-left">
                <div className="mb-4">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  {outcome.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-700 mb-4">
            Our solutions for Software Vendors
          </h2>
          
          <p className="text-gray-500 text-base mb-12">
            Discover our ISV solutions, crafted based on expertise, domain knowledge, years of experience and industry best-practices.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-900">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-500 font-medium text-sm transition-colors duration-300"
                >
                  {solution.link}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSolutionsSection;
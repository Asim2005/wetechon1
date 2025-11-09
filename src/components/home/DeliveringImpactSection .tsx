
const DeliveringImpactSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01" />
        </svg>
      ),
      title: 'Multi-Cloud',
      description: 'Experience and expertise in developing or integrating into any public or private cloud.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Reliable Delivery',
      description: 'Strict, standardized and reliable delivery processes, ensuring we deliver on our promises.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Domain Knowledge',
      description: 'Specialty and experience in solving complex, domain specific challenges.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Learning Culture',
      description: 'A culture of learning, providing team at the forefront of technology expertise.'
    }
  ];

  const caseStudies = [
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/07/photo-1-2.png', // Add Virgin Trains image
      title: 'Virgin Trains Case Study',
      link: '#'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/07/photo-2-1.png', // Add Hostway image
      title: 'Hostway Case Study',
      link: '#'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/07/photo-3.png', // Add Mimecast image
      title: 'Mimecast Case Study',
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Focused on Delivering Impact */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Trusted Technology Partner
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-16">
            Focused on Delivering Impact
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-700 mb-6">
              See our shared success stories
            </h2>
            
            <p className="text-gray-500 text-base leading-relaxed">
              We design and deliver scalable future-ready solutions that accelerate innovation.
            </p>
          </div>

          {/* Right Column - Case Study Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <a
                    href={study.link}
                    className="flex items-center justify-between text-gray-700 hover:text-sky-400 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">{study.title}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveringImpactSection;
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1} />
          <line x1="7" y1="8" x2="17" y2="8" strokeWidth={1} />
          <line x1="7" y1="12" x2="17" y2="12" strokeWidth={1} />
          <line x1="7" y1="16" x2="17" y2="16" strokeWidth={1} />
        </svg>
      ),
      title: "R&D as a Service",
      description: "Accelerate Innovation and Build new Digital Products. Innovate faster, enable disruption and accelerate technology roadmaps with R&D as a Service.",
      link: "/R&D-as-a-Service"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
          <circle cx="9" cy="13" r="1" fill="currentColor" />
          <circle cx="15" cy="13" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Cloud Native Transformation",
      description: "Future-proof your platform with Cloud Native Transformation. Business-backed digital product modernization delivered iteratively",
      link: "/Cloud-Native-Development"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="7" height="7" strokeWidth={1} />
          <rect x="13" y="4" width="7" height="7" strokeWidth={1} />
          <rect x="4" y="13" width="7" height="7" strokeWidth={1} />
          <rect x="13" y="13" width="7" height="7" strokeWidth={1} />
          <line x1="7.5" y1="11" x2="7.5" y2="13" strokeWidth={1} />
          <line x1="16.5" y1="11" x2="16.5" y2="13" strokeWidth={1} />
          <line x1="11" y1="7.5" x2="13" y2="7.5" strokeWidth={1} />
          <line x1="11" y1="16.5" x2="13" y2="16.5" strokeWidth={1} />
        </svg>
      ),
      title: "Ecosystem Enablement",
      description: "Expand your reach, win more customers, and drive growth through our tailored Ecosystem Enablement solutions.",
      link: "/Eco-System-Enablement"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="1" strokeWidth={1} />
          <path d="M9 4v16M15 4v16M4 9h16M4 15h16" strokeWidth={1} />
          <circle cx="18" cy="18" r="3" fill="none" strokeWidth={1} />
          <path d="M16.5 18l1 1 2-2" strokeWidth={1} strokeLinecap="round" />
        </svg>
      ),
      title: "System & Platform Migration",
      description: "Optimize operations by integrating systems or consolidating data with our end-to-end migration solution.",
      link: "/System-Migration"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-4">
            Achieve Desired Technical & Business Outcomes
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Leverage our Cloud expertise and high-quality digital engineering services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Button */}
              <a
                href={service.link}
                className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-6 py-2.5 rounded text-sm transition-colors duration-300 flex items-center gap-2"
              >
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

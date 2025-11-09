
const EngModelforSp = () => {
  const models = [
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/09/team-delivery-model-e1632401259700.png', // Add team delivery image
      title: 'Team Delivery Model',
      description: 'Leverage our expertise, ensure agile delivery and expand your in-house team continuously or on demand.',
      link: 'Read more'
    },
    {
      image: 'https://devtechgroup.com/wp-content/uploads/2021/09/fixed-scope-model.png', // Add fixed scope/dartboard image
      title: 'Fixed Scope Model',
      description: 'Get a single, end-to-end project executed via waterfall style, with the help of our expert delivery team.',
      link: 'Read more'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-1">
            
            <span className="inline-block bg-sky-100 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              Tangible Impact, Customized Delivery.
            </span>
            
            <h2 className="text-4xl md:text-5xl font-normal text-gray-700 mb-6">
              Our Models of Engagement
            </h2>
            
            <p className="text-gray-500 text-base leading-relaxed">
              The engagement model adequate for achieving desired outcome will depend on your objectives, project scope and timeline.
            </p>
          </div>

          {/* Right Column - Model Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {model.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-500 font-medium text-sm transition-colors duration-300"
                  >
                    {model.link}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default EngModelforSp;

const TrackRecordStatsSection = () => {
  const stats = [
    {
      number: '867',
      suffix: '+',
      label: 'Experts in our team'
    },
    {
      number: '27',
      suffix: '',
      label: 'Countries we operate in, on 5 continents'
    },
    {
      number: '9',
      suffix: '+',
      label: 'Countries we have presence in'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hexagon Image Collage */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Hexagon Container */}
              <img
                src="https://devtechgroup.com/wp-content/uploads/2021/09/Photo-in-Devtech-Logo.png"
                alt="Team Collage"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-6">
              Continuous track record in Cloud since 2012
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-12">
              Delivering agile & scalable Cloud solutions, with presence in the USA, Canada, UK, Serbia & the Netherlands.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  {/* Number */}
                  <div className="flex items-start mb-3">
                    <span className="text-5xl md:text-6xl font-bold text-sky-400">
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <span className="text-3xl md:text-4xl font-bold text-sky-400 mt-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordStatsSection;
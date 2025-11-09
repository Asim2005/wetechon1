
const MigrationProcessSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-6">
            Our End-to-End Migration Process
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
            Migrations tend to be complex, but we work alongside your teams to ensure successful planning and execution.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Proprietary Migration Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center lg:text-left">
              Proprietary migration tools included
            </h3>
            
            <p className="text-gray-500 text-sm text-center lg:text-left mb-8 leading-relaxed">
              Our pre-built proprietary tools come bundled in, and significantly accelerate migration process.
            </p>

            {/* Image Placeholder */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <img
                src="https://devtechgroup.com/wp-content/uploads/2021/07/Photo-1-4.png" // Add your proprietary tools diagram image here
                alt="Proprietary Migration Tools Diagram"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Customized Approach */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center lg:text-left">
              Customized approach
            </h3>
            
            <p className="text-gray-500 text-sm text-center lg:text-left mb-8 leading-relaxed">
              We tailor this process depending on the type and size of data being migrated and/or consolidated.
            </p>

            {/* Image Placeholder */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <img
                src="https://devtechgroup.com/wp-content/uploads/2021/10/SPM-process-768x174.png" // Add your customized approach flow diagram image here
                alt="Customized Approach Flow Diagram"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationProcessSection;
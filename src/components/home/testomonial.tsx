
const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: 'data:image/jpeg;base64,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', // Add Virgin Trains logo
      text: '"I believe high levels of trust and great engagement is the key element of any change (digital or not), and I was delighted to see Virgin Trains and WeTechOn excelling at working together. The way the teams have been working together, you wouldn\'t know if an individual was working for Virgin Trains or WeTechOn."',
      name: 'John Sullivan',
      title: 'CIO, Virgin Trains'
    },
    {
      logo: 'https://devtechgroup.com/wp-content/uploads/2021/06/AppRiver-Logo-2.png', // Add AppRiver logo
      text: '"WeTechon\'s development staff are professional, knowledgeable and capable. We have found their people-focused company culture and enthusiasm for technology a great fit with our own business."',
      name: 'James Shallard',
      title: 'Director of Software Engineering, AppRiver'
    },
    {
      logo: 'https://devtechgroup.com/wp-content/uploads/2021/07/dogado-logo-2-300x76.png', // Add Dogado logo
      text: '"Partnering with WeTechOn has enabled Dogado to accelerate innovation and product roadmaps, and bring new features and services to our customers faster. WeTechOn\'s team became an extension of our internal engineering team, and we\'re thrilled to see how both teams collaborate together as one."',
      name: 'Daniel Hagemeier',
      title: 'CEO, Dogado'
    }
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://devtechgroup.com//wp-content/uploads/2021/09/Devtech_4-2-2048x1365-1.jpg?id=17757')`, // Add your background image here
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* Diagonal Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 L1200,60 L1200,0 Z" fill="white"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-normal text-dark text-center mb-16">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg flex flex-col min-h-[400px]"
            >
              {/* Logo */}
              <div className="mb-8 h-16 flex items-center justify-center">
                <img
                  src={testimonial.logo}
                  alt={testimonial.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-auto flex-grow">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-800 font-semibold text-base mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sky-400 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
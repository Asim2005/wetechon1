import background_img from "@/assets/videos/backgroundimg.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={background_img}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 max-w-7xl">
        <h1 className="text-1xl md:text-1xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
Accelerate Product Roadmap & Drive Growth
          <br />

        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
  Build new features faster, re-architect solutions, develop the right APIs and grow through Channel integrations.

        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            Contact us
          </button>
          
          <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-md border border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
            More about us
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
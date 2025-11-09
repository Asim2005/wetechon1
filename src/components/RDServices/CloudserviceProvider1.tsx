import { Link } from 'react-router-dom';
import video from '../../assets/videos/Ai.mp4';
import ContactForm from '../ContactForm';

const CProviders: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Add your video source here */}
          <source src={video} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Deliver Value to Your Customers Faster
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Consolidate systems post M&A, add new services and expand your marketplace to capitalize on demand.

            </p>

            <Link
              to="/Test Delivery Models"
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded transition-colors"
            >
              Case Studies
            </Link>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <ContactForm />

            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#2563eb"
            d="M0,64L1440,96L1440,120L0,120Z"
          ></path>
        </svg>
      </div>
      <div>

      </div>
      <div>
      </div>
    </div>

  );
};

export default CProviders;
import React from 'react';
import { Cloud, Lightbulb, CheckCircle, ArrowRight,  } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
        <div className="text-cyan-500">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const features = [
    {
      icon: <Cloud size={28} />,
      title: "Multi-Cloud",
      description: "Expertise & experience in developing/integrating into any public or private cloud."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Domain Knowledge",
      description: "Specialty and experience in solving complex, domain specific challenges."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Reliable Delivery",
      description: "Strict, standardized and reliable delivery processes, ensuring tangible impact."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full">
                Track Record Since 2012
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Focused on Delivering Impact
            </h2>

            <p className="text-gray-600 mb-12 leading-relaxed">
              We work with you to develop a solution that best fits you needs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Right - Case Study Card */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 overflow-hidden relative">

                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                  alt="Hostway Case Study"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-2">HOSTWAY</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ml-2">
                        <span className="text-blue-900 font-bold text-sm">H+</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Network visualization overlay */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="cyan" strokeWidth="1" opacity="0.5" />
                    <line x1="30%" y1="60%" x2="70%" y2="30%" stroke="cyan" strokeWidth="1" opacity="0.5" />
                    <circle cx="10%" cy="20%" r="3" fill="cyan" />
                    <circle cx="90%" cy="80%" r="3" fill="cyan" />
                    <circle cx="30%" cy="60%" r="3" fill="cyan" />
                    <circle cx="70%" cy="30%" r="3" fill="cyan" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">

                    Hostway Case Study
                  </h3>
                  <button className="text-gray-400 hover:text-cyan-500 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
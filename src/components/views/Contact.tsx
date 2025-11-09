import React from 'react';
import { Cloud, Zap, Users, Target, ThumbsUp, Award, ArrowRight } from 'lucide-react';
import TestimonialsSection from '../home/testomonial';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-6">
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

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
        <div className="text-cyan-500">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Contectus: React.FC = () => {
  const features = [
    {
      icon: <Cloud size={24} />,
      title: "Multi-Cloud",
      description: "Experience and expertise in developing or integrating into any public or private cloud."
    },
    {
      icon: <Zap size={24} />,
      title: "Exceptional Delivery",
      description: "Strict, standardized and reliable delivery processes, ensuring we deliver on our promises."
    },
    {
      icon: <Users size={24} />,
      title: "Domain Experts",
      description: "Specialty and experience in solving complex, domain specific challenges."
    }
  ];

  const stats = [
    {
      number: "250+",
      label: "Experts in our team"
    },
    {
      number: "25",
      label: "Countries we operate in, on 5 continents"
    },
    {
      number: "5",
      label: "Countries we have presence in"
    }
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: "Drive Change",
      description: "We are proactive and we take the initiative."
    },
    {
      icon: <Target size={24} />,
      title: "Create Impact",
      description: "We work smarter, not harder."
    },
    {
      icon: <ThumbsUp size={24} />,
      title: "Help and Ask for Help",
      description: "We are helpful and not afraid to ask for help."
    },
    {
      icon: <Award size={24} />,
      title: "Take Pride in the Work You Do",
      description: "We take pride in what we do and how we do it."
    }
  ];

  const partners = [
    "A1", "TELECOM", "swisscom", "NOKIA",
    "telstra", "mimecast", "Gradwell", "GAMER"
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop"
            alt="City technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
          <div className="text-white">
            <div className="inline-block mb-6">
              <span className="text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-400/20 rounded-full">
                Partner with us
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Committed to Accelerating Your Technology
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
              Devtech provides digital innovation services that help Fortune 5000 and emerging companies transform, scale, and disrupt.
            </p>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We partner with our clients to envision and develop next-gen digital and cloud solutions that drive business outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-3 rounded transition-colors">
                Contact us
              </button>
              
              <button className="flex items-center space-x-2 text-white hover:text-cyan-400 font-semibold px-6 py-3 transition-colors">
                <span>LinkedProfile</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L1440,32L1440,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
      </section>

      {/* Helping Businesses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full">
                  A track record since 2012
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Helping businesses better respond to change.
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Empowering innovative technology businesses worldwide to what they do best, even better, by accelerating product & technology roadmaps and developing platform integrations that open up new revenue streams.
              </p>

              {/* Partner Logos */}
              <div className="grid grid-cols-4 gap-6 opacity-40">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg transform rotate-3"> <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full rounded-lg shadow-xl"
              /></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                 <img 
                src="data:image/jpeg;base64,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"
                alt="Team collaboration"
                className="w-full rounded-lg height-50 shadow-xl"
              />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A culture of learning and development, providing team at the forefront of technology expertise.
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We operate in USA, Canada, UK, Serbia & the Netherlands, delivering agile & scalable cloud solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

     <TestimonialsSection/>
    </div>
  );
};

export default Contectus;
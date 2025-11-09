import React from 'react';
import { Zap, TrendingUp, Focus, Settings, Cog, DollarSign } from 'lucide-react';

interface OutcomeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ icon, title, description }) => {
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

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-900 to-cyan-600 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button className="text-cyan-500 text-sm font-semibold hover:text-cyan-600 transition-colors">
          {link} →
        </button>
      </div>
    </div>
  );
};




const OutcomesGrowthSection: React.FC = () => {
  const outcomes = [
    {
      icon: <Zap size={24} />,
      title: "Core ARPU",
      description: "Leverage exciting level more revenue from existing or a new customer base."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Move Faster",
      description: "Advance features, enable automated tooling, and delivery practices."
    },
    {
      icon: <Focus size={24} />,
      title: "Focus on IP",
      description: "Build on building to support solutions that bring the most value to your business."
    },
    {
      icon: <Settings size={24} />,
      title: "Consolidate Systems",
      description: "Offer unified complex experience across digital channels throughout customer journey."
    },
    {
      icon: <Cog size={24} />,
      title: "Automate Services",
      description: "Automate channel services with self-service technology and intelligence."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Reduce Costs",
      description: "Move more from legacy and take advantage of open source and cloud services."
    }
  ];

  const services = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      title: "Ecosystem Enablement",
      description: "Enable rapid service innovation and consistent APIs.",
      link: "Learn more"
    },
    {
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop",
      title: "Platform Development & Modernization",
      description: "Accelerate time to market for cloud first solutions, microservices and refactoring you existing systems.",
      link: "Learn more"
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      title: "System & Platform Migration",
      description: "Migrate your services to the public cloud platforms safely and limit downtime opportunities or risks.",
      link: "Learn more"
    }
  ];


  const stats = [
    { icon: "🚀", text: "Agile and adaptive delivery model" },
    { icon: "📊", text: "AI Integration focused delivery on all platforms" },
    { icon: "🔒", text: "Modern development security by design methodologies" },
    { icon: "💡", text: "Latest technologies and delivery and methodologies" }
  ];

  return (
    <div className="w-full">
      {/* Outcomes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3">
            Outcomes We Help You Achieve
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fuel your business with continuous innovation & execution of your digital initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <OutcomeCard
                key={index}
                icon={outcome.icon}
                title={outcome.title}
                description={outcome.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3">
            Grow at an Accelerated Pace
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our solutions for Telcos advanced experience, include roadmap and best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Telco Experience Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)',
            backgroundSize: '15px 15px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <p className="text-cyan-400 text-sm font-medium mb-4">Telecom</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              A Decade  of Experience Empowering Digital Telcos
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-white text-sm leading-relaxed">{stat.text}</p>
              </div>
            ))}
          </div>

        
          {/* CTA */}
          <div className="text-center">
            <p className="text-white mb-4">Want to get started?</p>
            <button onClick={() => window.location.href = "https://wetechon.com/About/"} className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded transition-colors">
              Contact us
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </section>
    </div>
  );
};

export default OutcomesGrowthSection;
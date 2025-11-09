import React from 'react';
import { Search, Database, Cog, Zap, TrendingUp, Brain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-3 p-6 bg-white rounded-lg">
      <div className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
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

interface EngagementCardProps {
  image: string;
  title: string;
  description: string;
}

const EngagementCard: React.FC<EngagementCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const AISection: React.FC = () => {
  const services = [
    {
      icon: <Search size={24} />,
      title: "AI Assessment Suite",
      description: "Evaluate your AI use cases, technologies, and team expertise to ensure you have a mature gap there."
    },
    {
      icon: <Database size={24} />,
      title: "Data Enablement",
      description: "Clean, structure and enrich your data assets and turn data into intelligent product features."
    },
    {
      icon: <Cog size={24} />,
      title: "System Modernization",
      description: "Modernize legacy systems into cloud-native AI-ready services."
    },
    {
      icon: <Zap size={24} />,
      title: "AI-Enabled SDLC Acceleration",
      description: "Boost product velocity with Gen-AI-powered tools and an open LLMs trained on your codebase."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Personalized & Predictive Sales",
      description: "Utilize real-time insights to main-tain, personalize outreach, integrated in your customer journey."
    },
    {
      icon: <Brain size={24} />,
      title: "Agentic AI Managed Intelligence",
      description: "Deploy AI agents to run Agentic AI solutions to spark support and operational workflows."
    }
  ];

  const engagements = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      title: "AI Assessment & Roadmap",
      description: "We work with you to assess your AI maturity, identify strategic and deliver action plans."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Pilot-to-Scale Build Track",
      description: "We engage with your team to de-risk AI initiatives and build pilots that evolve into production-ready AI systems."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Dedicated AI Pod",
      description: "Get access to our team of AI solutions architects, data scientists, ML engineers, domain experts to build successful AI solutions."
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Main Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Badge */}
          <div className="text-center mb-4">
            <span className="inline-block text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full">
              Unlocking AI
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            Unlocking the Full Potential of AI
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <p className="text-gray-600 leading-relaxed">
              We provide next-generation software services and cloud providers unlock the full potential of AI — from applying AI, strategy and enabling your team to accelerating your Gen-AI initiatives and intelligent agent use cases.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're exploring Gen-AI for the first time or operationalizing and scaling AI across your digital products and platforms, CleanAI is here to deliver to meet your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Engagement Model
          </h2>

          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full">
              Flexible Team Deliverables
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether you're just starting the AI Engagement journey or scaling up operationalizing and scaling your AI investments, we engage flexibly to fit your business goals and accelerated timelines.
          </p>

          {/* Engagement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <EngagementCard
                key={index}
                image={engagement.image}
                title={engagement.title}
                description={engagement.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISection;
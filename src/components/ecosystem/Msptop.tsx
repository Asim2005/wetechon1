import React from "react";
import { Search, Database, Cog, Zap, TrendingUp, Brain } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start space-y-3 p-6 bg-white rounded-lg">
      <div className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
        <div className="text-cyan-500">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

interface EngagementCardProps {
  image: string;
  title: string;
  description: string;
}

const EngagementCard: React.FC<EngagementCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Csptops: React.FC = () => {
  const services = [
    {
      icon: <Search size={24} />,
      title: "Move Faster",
      description:
        "Adapt quickly and add new Cloud service offerings faster to retain and increase revenue.",
    },
    {
      icon: <Database size={24} />,
      title: "Consolidate Systems",
      description:
        "Offer unified customer experience by integrating disparate billing and provisioning systems.",
    },
    {
      icon: <Cog size={24} />,
      title: "Retain Customers",
      description:
        "Add new value to services or launch new offerings to create revamped bundles and differentiate yourself.",
    },
    {
      icon: <Zap size={24} />,
      title: "Automate Services",
      description:
        "Improve customer experience by automating customer service with custom AI solutions.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Reduce Costs",
      description:
        "Move away from legacy and reduce overhead & maintenance costs."},
    {
      icon: <Brain size={24} />,
      title: "Unique Offerings",
      description:
        "Stand out by including unique domain-specific offers, e.g. managed cybersecurity services.",
    },
  ];

  const engagements = [
    {
      image:
        "https://devtechgroup.com/wp-content/uploads/2021/09/software-development-and-modernization.png",
      title: "Ecosystem Enablement",
      description:
        "Build your marketplace, integrate new offerings, create stickier bundles and increase ARPU.",
    },
    {
      image:
        "https://devtechgroup.com/wp-content/uploads/2021/09/system-and-platform-migration.png",
      title: "Software Development & Modernization",
      description:
        "Future-proof your business by building Cloud-first solutions, modernizing and refactoring your existing systems.",
    },
    {
      image:
        "https://devtechgroup.com/wp-content/uploads/2021/09/marketplace-enablement.png",
      title: "System & Platform Migration",
      description:
        "Optimize operations by integrating systems or consolidating data with our end-to-end migration solution.",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Main Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Badge */}
          <div className="text-center mb-4">
            <span className="inline-block text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
Innovate to Evolve with Your Customers
          </h2>

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
            Whether you're just starting the AI Engagement journey or scaling up
            operationalizing and scaling your AI investments, we engage flexibly
            to fit your business goals and accelerated timelines.
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

export default Csptops;

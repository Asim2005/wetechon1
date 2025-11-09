import React from 'react';
import { Layers, Palette, Rocket, Repeat, Users, Globe } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
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

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, description }) => {
  return (
    <div className="flex items-start space-x-4 py-3">
      <div className="text-3xl font-bold text-cyan-500 min-w-[60px]">
        {value}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed pt-2">
        {description}
      </p>
    </div>
  );
};

const ProcessOutcomesSection: React.FC = () => {
  const benefits = [
    {
      icon: <Layers size={24} />,
      title: "Modernize your architecture",
      description: "Create microservice architecture built using AWS, streamline innovation, and adopt new features."
    },
    {
      icon: <Palette size={24} />,
      title: "Create exceptional UX",
      description: "Evaluate modern, omni-channel digital user experience."
    },
    {
      icon: <Rocket size={24} />,
      title: "Scale on demand",
      description: "Move to next-generation cloud platforms and on-demand agility of scale."
    },
    {
      icon: <Repeat size={24} />,
      title: "Expand revenue streams",
      description: "Launch exciting new services, acquiring and grow new channel revenue."
    },
    {
      icon: <Users size={24} />,
      title: "Automate routine work",
      description: "Simplify customer experience and deployment and testing automation."
    },
    {
      icon: <Globe size={24} />,
      title: "Global reach",
      description: "Reach worldwide and accessible from any device, anywhere."
    }
  ];

  const processSteps = [
    "Discovery",
    "Advisory",
    "Solution Design",
    "Implementation",
    "Ongoing Support"
  ];

  const stats = [
    {
      value: "34%",
      description: "Increase in development velocity. By simplifying the microservice and search architecture."
    },
    {
      value: "50%",
      description: "Reduction in field-task among 3,000+ technicians."
    },
    {
      value: "7x",
      description: "Accelerated testing and deployment times, resulting in overall accelerated product releases."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Arrow Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between overflow-x-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded text-black font-semibold text-sm whitespace-nowrap">
                  {step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="text-white mx-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Description */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <p className="text-gray-700 text-center leading-relaxed mb-8">
            We work with you through a series of pricing and fixed-in-time workshops to dive deep into your existing business and the technology behind you have in place. Our goal is to get a great deal of understanding of the current state.
          </p>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold">Business value:</span> Our team will create a business/user technology migration strategy. Business persons could appreciate impact for existing solution, user complex, longer customer groups, CX, go-to-market plans as well as internal operations.
            </p>
            <p>
              <span className="font-semibold">Deep dive into current and past architecture, and to-be-old UX analysis:</span> working code quality and technical debt will more development become complex maturity; security-by-design practices, testing methodologies, best-enabled analytics, infrastructure, existing resource and accountability measures as well as performance and scaling bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Outcomes we have created for our customers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Stats */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed mb-8">
                Devtech partnered with Virgin Trains to build a cloud platform that would move passengers onto UK Rails in over a hour of travel time.
              </p>
              
              <div className="divide-y divide-gray-200">
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    value={stat.value}
                    description={stat.description}
                  />
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "Before high levels of trust and great engagement in the key element of my minimal capital or only small Lean designed to use Virgin Trains and Gannett sending or racing together. The way the teams have been working together, you wouldn't know it have a supplier/buyer relationship for Virgin Trains or Gannett."
                </p>
                <div>
                  <p className="font-semibold text-gray-800">John Sullivan</p>
                  <p className="text-cyan-500 text-sm">CTO, Virgin Trains</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop"
                  alt="Virgin Trains Case Study"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 p-4 rounded shadow-lg">
                <p className="font-semibold text-gray-800">Virgin Trains Case Study</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessOutcomesSection;
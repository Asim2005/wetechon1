import React from 'react';
import { Rocket, Palette, Lightbulb, Gauge, Grid3x3, Shield } from 'lucide-react';

interface OutcomeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4 p-6">
      <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
        <div className="text-cyan-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const OutcomesSection: React.FC = () => {
  const outcomes = [
    {
      icon: <Rocket size={28} />,
      title: "Accelerate Roadmap",
      description: "Innovate faster, ship more features and build new capabilities for your existing digital product."
    },
    {
      icon: <Palette size={28} />,
      title: "Exceptional UX/UI",
      description: "Omni-channel digital user experience backed by creative design and deep UX analytics."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Build Proof of Concept",
      description: "Validate your business ideas and enable faster prototyping."
    },
    {
      icon: <Gauge size={28} />,
      title: "Boost Product Velocity",
      description: "Apply agile software development lifecycle processes to improve pace of roadmap execution."
    },
    {
      icon: <Grid3x3 size={28} />,
      title: "Enable Disruption",
      description: "Apply industry expertise to create disruptive digital products."
    },
    {
      icon: <Shield size={28} />,
      title: "Security by Design",
      description: "Ensure your solutions and new features are built with latest security best-practices."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-cyan-400 text-sm font-medium mb-2 px-4 py-1 bg-cyan-50 rounded-full">
            Partner with us
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Outcomes We Help You Achieve
        </h2>

        {/* Grid */}
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
  );
};

export default OutcomesSection;
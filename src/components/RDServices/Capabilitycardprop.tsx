import React from 'react';

interface CapabilityCardProps {
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: "Software Engineering",
      description: "Build efficient, high-performing cloud native platforms that scale globally, through microservices, APIs and cutting-edge frontend and backend development."
    },
    {
      title: "User Experience",
      description: "Use analytics and customer flow analysis to optimize the user journey and identify areas for improvement. Through prototype and testing, iterate on designs and create user personas to meet the needs of your target audience."
    },
    {
      title: "Cloud Infrastructure",
      description: "Our cloud infrastructure team has experience with AWS, Azure, and Google Cloud and uses automation to build scalable, highly available systems. We excel in cloud migrations, hybrid solutions, and optimizing security, cost, and performance."
    },
    {
      title: "Automated Testing",
      description: "Ensure rapid and reliable deployments with the help of our test automation team, which specializes in large-scale testing. With expertise in performance testing and integrating test frameworks into the CI/CD pipeline, they focus on ensuring the quality and performance of the systems through test automation."
    },
    {
      title: "Project Management",
      description: "We can help you deliver successful projects through an agile product lifecycle approach, proactively mitigating risks along the way. Our project management team is highly skilled in this regard and has experience in managing projects of all sizes and complexity levels."
    },
    {
      title: "Product Management",
      description: "Managing the product development process can be challenging, but our product management team is skilled in defining and prioritizing features, gathering customer feedback, and navigating the process effectively. They are well-versed in agile methodologies and possess a deep understanding of the market and competitive analysis, allowing them to adapt to changing requirements and market conditions."
    },
    {
      title: "Technical & Business Analysis",
      description: "We act as the bridge between business stakeholders and technical teams, translating business requirements into technical specifications and ensuring alignment throughout the development process."
    },
    {
      title: "Visual Design",
      description: "Design engaging and intuitive web and mobile platforms with the help of our visual design team. They create stunning interfaces that not only look beautiful but also enhance user engagement and drive conversions."
    },
    {
      title: "Machine Learning & AI",
      description: "We can help you deliver successful projects that drive business value and leverage cutting-edge AI and machine learning technologies to solve complex problems and create innovative solutions."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Tailored R&D Capabilities to Support Your Needs
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
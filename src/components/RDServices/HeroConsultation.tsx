import React from 'react';

interface Service {
  title: string;
  description: string;
}

const HeroConsultation: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Software Engineering',
      description: 'Build efficient, high-performing cloud native platforms that scale globally, through microservices, APIs and cutting-edge frontend and backend development.'
    },
    {
      title: 'User Experience',
      description: 'Use creative and customer flow analysis to optimize the user journey and identify areas for improvement. Through prototype and testing, iterate on designs and create user personas to meet the needs of your target audience.'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Our cloud strategists have lots experience with AWS, Azure, and Google Cloud and use automation to build scalable, highly available systems. We excel in cloud migrations, hybrid solutions, and optimizing security, cost, and governance.'
    },
    {
      title: 'Automated Testing',
      description: 'Ensure rapid and reliable deployments with the help of our test automation team, which specializes in creating test scripts and expertise in performance testing and integrating test frameworks into the CI/CD pipeline. They focus on ensuring the quality and performance of the systems through test automation.'
    },
    {
      title: 'Project Management',
      description: 'We can help you deliver successful projects through an agile product lifecycle approach, proactively addressing risks and changes. Our project management team is highly skilled in the regard and has experience in managing projects of all sizes and complexity levels, understanding of the market and competitive analysts, allowing them to adapt to changing requirements and market conditions.'
    },
    {
      title: 'Product Management',
      description: 'Managing the product development process can be challenging, but our product management team is skilled in conducting market research, gathering customer feedback, and managing the process effectively. They are well versed in agile methodologies and possess a deep understanding of the market and competitive analysis, positioning them to adapt to changing requirements and market conditions.'
    },
    {
      title: 'Technical & Business Analysis',
      description: 'Acting as the bridge between business and technical teams, our experts will help you translate requirements and business-informed decisions about your technology investments. With unique domain knowledge and extensive experience of the industry landscape, they have a track record of successful execution of those decisions.'
    },
    {
      title: 'Visual Design',
      description: 'Design engaging and intuitive web and mobile platforms with the help of our creative design team. We excel in creating user-centric designs, iconography, and are skilled at creating user-friendly designs that meet the needs of our clients. Achieve a unique, standard presence in your industry with our customized designs.'
    },
    {
      title: 'Machine Learning & AI',
      description: 'We can help you deliver successful projects that drive business value and solve problems. Our team has deep expertise in TensorFlow, PyTorch, and AI integration. We help clients leverage AI and machine learning to drive innovation and achieve their goals.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroConsultation;
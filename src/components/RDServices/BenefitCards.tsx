import React from 'react';
import { FileText, Users, Wrench, DollarSign, CheckCircle, XCircle } from 'lucide-react';

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

interface ProConItemProps {
  text: string;
  isPro?: boolean;
}

const ProConItem: React.FC<ProConItemProps> = ({ text, isPro = true }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 mt-1">
        {isPro ? (
          <CheckCircle size={20} className="text-white" />
        ) : (
          <XCircle size={20} className="text-white" />
        )}
      </div>
      <p className="text-white text-sm leading-relaxed">{text}</p>
    </div>
  );
};

const FixedScopeSection: React.FC = () => {
  const benefits = [
    {
      icon: <FileText size={24} />,
      title: "Detailed Specification",
      description: "Fully defined requirements, documentation ready to deliver and clear goals are before execution."
    },
    {
      icon: <Users size={24} />,
      title: "Phased Execution",
      description: "Execute your project in well-defined phases so you always see the light of our domain team."
    },
    {
      icon: <Wrench size={24} />,
      title: "High Predictability",
      description: "Timeline predictability based on execution phases, delivery less room for major changes."
    },
    {
      icon: <Users size={24} />,
      title: "Access to Experts",
      description: "You gain access to experienced domain experts working together to help solve your challenges."
    },
    {
      icon: <Users size={24} />,
      title: "Customized Project Team",
      description: "We tailor our service team, selected delivery team, tailored to meet your project scope."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Fixed Price Upfront",
      description: "Because we have a fixed project objective, milestones, financial and resources."
    }
  ];



  const logos = [
    "Acronis",
    "NOKIA",
    "KaAMPNN",
    "GlobalLock",
    "A1",
    "HOSTWAY"
  ];

  const prosModelWorks = [
    "Clear, fixed, end-to-end project delivery is needed",
    "Outsourced development where it is clear what to build",
    "Need for dedicated team for an extended time with roles dispersed throughout the engagement",
    "There is a clear budget and technical understanding between both teams",
    "Need timelines"
  ];

  const consAvoidModel = [
    "The scope is unclear and not fully defined yet",
    "Executive who has business outcomes in mind but no period of time",
    "Company with an experimental mindset frequently expected due to refinement",
    "Situations where overall financial or outcomes need to be assessed through sprints",
    "Agile way of working is needed"
  ];

  return (
    <div className="w-full bg-white">
      {/* Top Section - Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Fixed Scope Model?
          </h2>

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

      {/* Delivery Approach Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Fixed Scope Delivery Approach
            </h2>
            <span className="text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full">
              Typical Small Customer
            </span>
          </div>

          <p className="text-gray-600 mb-12 max-w-3xl">
            Depending on type of service and project scope, this approach may differ.
          </p>

          {/* Process Flow */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <div className="space-y-8">
              {/* Top Row */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">Information Gathering</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-1/4"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">Analysis & Design</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-1/2 mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">Development Phase</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-3/4 ml-auto"></div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">QA & Documentation</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-1/4"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">UAT Phase</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-2/3 mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">Deployment Phase</h4>
                  </div>
                  <div className="h-2 bg-cyan-500 rounded-full w-full"></div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg py-4 px-6 mb-2">
                    <h4 className="font-semibold text-gray-800">Maintenance & Support</h4>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-bold text-xl">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro/Con Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* This Model Works If */}
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg p-8">
              <div className="mb-6">
                <span className="text-xs text-Black bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                This Model Works If:
              </h3>
              <div className="space-y-4">
                {prosModelWorks.map((item, index) => (
                  <ProConItem key={index} text={item} isPro={true} />
                ))}
              </div>
              <button className="mt-8 bg-white text-cyan-500 hover:bg-gray-100 font-semibold px-6 py-3 rounded transition-colors">
                Book a Meeting
              </button>
            </div>

            {/* When to Avoid This Model */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg p-8">
              <div className="mb-6">
                <span className="text-xs text-Black bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  Not Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                When to Avoid This Model:
              </h3>
              <div className="space-y-4">
                {consAvoidModel.map((item, index) => (
                  <ProConItem key={index} text={item} isPro={false} />
                ))}
              </div>
              <button className="mt-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-6 py-3 rounded transition-colors">
                See Team Delivery Model
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FixedScopeSection;
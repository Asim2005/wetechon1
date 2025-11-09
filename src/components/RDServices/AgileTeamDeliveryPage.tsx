import React from 'react';
import { Brain, Map, Target, Users, UserCheck, Calendar, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-6">
      <div className="w-14 h-14 flex items-center justify-center bg-cyan-100 rounded-lg">
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

interface BulletItemProps {
  text: string;
  isLight?: boolean;
}

const BulletItem: React.FC<BulletItemProps> = ({ text, isLight = false }) => {
  return (
    <div className="flex items-start space-x-3">
      <ArrowRight size={20} className={`flex-shrink-0 mt-0.5 ${isLight ? 'text-white' : 'text-white'}`} />
      <p className={`text-sm leading-relaxed ${isLight ? 'text-white' : 'text-white'}`}>{text}</p>
    </div>
  );
};

const AgileTeamDeliveryPage: React.FC = () => {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "Agile Model",
      description: "Accelerating innovation means adjusting priorities and shifting gears to meet business needs."
    },
    {
      icon: <Map size={28} />,
      title: "Roadmap Execution",
      description: "Execute longer innovation initiatives, where roadmaps and/or backlogs stretch over a period of time."
    },
    {
      icon: <Target size={28} />,
      title: "Decision Holder",
      description: "We are here to share our expertise & best practices, but you have the final say on team's direction."
    },
    {
      icon: <Users size={28} />,
      title: "Access to Experts",
      description: "A wide range of technical and domain experts working together to help solve your challenges."
    },
    {
      icon: <UserCheck size={28} />,
      title: "Customized Team",
      description: "Work with a specialist delivery team built specifically for your pain points and project scope."
    },
    {
      icon: <Calendar size={28} />,
      title: "Team Subscription",
      description: "Ensure cost predictability and team's availability as your project and business grows."
    }
  ];

  const dedicatedTeamBenefits = [
    "Full time, fully integrated team",
    "Domain knowledge optimized, and latest technology trends shared with your teams",
    "Persistent team configuration & team continuity – continuous extension to your team",
    "Focus on ongoing needs of R&D roadmap",
    "Predictable and transparent cost - fixed monthly subscription"
  ];

  const onDemandBenefits = [
    "Flexible, on-demand team",
    "Access to a wide range of skills, technology & domain expertise when required",
    "Perfect for a pre-defined pool of effort to be consumed over time, where the tech stack changes",
    "Predictable and transparent cost - fixed monthly subscription, where unused buckets of effort roll over to be used in the next months"
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Navigation */}
      
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Agile Approach for Fast & Incremental Development
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leverage our experience, technical and domain expertise through iterative and collaborative project execution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-3 rounded transition-colors">
              <Users size={20} />
              <span>Contact us</span>
            </button>
            
            <button className="flex items-center space-x-2 text-white hover:text-cyan-400 font-semibold px-6 py-3 transition-colors">
              <span>More about us</span>
              <ArrowRight size={20} />
            </button>
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

      {/* Why Team Delivery Model Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3">
            Why Team Delivery Model?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Adaptability & flexibility when faced with changing priorities and timelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Team Models Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dedicated Team */}
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Dedicated Team
              </h3>
              <p className="text-white text-sm mb-8 leading-relaxed">
                Continually dedicated-only-to-you team that works Monday to Friday full-time, together with your internal engineers.
              </p>
              <div className="space-y-4">
                {dedicatedTeamBenefits.map((benefit, index) => (
                  <BulletItem key={index} text={benefit} isLight={true} />
                ))}
              </div>
            </div>

            {/* On Demand Team */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg p-8 text-white relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                On Demand Team
              </h3>
              <p className="text-white text-sm mb-8 leading-relaxed">
                Flexibility to pull in a team of different size/skill/structure when needed and according to your sprint plans.
              </p>
              <div className="space-y-4">
                {onDemandBenefits.map((benefit, index) => (
                  <BulletItem key={index} text={benefit} />
                ))}
              </div>
              
              {/* Decorative Image */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgileTeamDeliveryPage;
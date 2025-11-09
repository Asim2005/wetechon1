import React, { useState } from 'react';
import { Users, Award, CheckCircle, BarChart3, RefreshCw, Rocket, BookOpen, Target, Video, FileText, Code, ThumbsUp, } from 'lucide-react';

interface TeamRoleProps {
  icon: React.ReactNode;
  title: string;
}

const TeamRole: React.FC<TeamRoleProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
        <div className="text-cyan-500">
          {icon}
        </div>
      </div>
      <p className="text-sm text-gray-700 font-medium">{title}</p>
    </div>
  );
};

interface ChecklistItemProps {
  text: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text }) => {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};

interface SecurityItemProps {
  text: string;
  isDark?: boolean;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ text, isDark = false }) => {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle size={20} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white' : 'text-gray-700'}`}>{text}</p>
    </div>
  );
};

const PracticesSecuritySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tailored');

  const practices = [
    { id: 'tailored', label: 'Tailored Team' },
    { id: 'performance', label: 'Ensuring High Performance' },
    { id: 'customer', label: 'Customer Success Team' },
    { id: 'engineering', label: 'Engineering Foundations' },
    { id: 'culture', label: 'Our Culture & Values' }
  ];

  const coreTeamRoles = [
    { icon: <Users size={24} />, title: "Lead Developer" },
    { icon: <Users size={24} />, title: "Software Engineer" },
    { icon: <Users size={24} />, title: "Solution Architect" },
    { icon: <Users size={24} />, title: "Project Manager" }
  ];

  const additionalRoles = [
    { icon: <Users size={24} />, title: "Front-End or UI/UX Expert" },
    { icon: <Users size={24} />, title: "QA Engineer" },
    { icon: <Users size={24} />, title: "DevOps Engineer" },
    { icon: <Users size={24} />, title: "Database" }
  ];

  const extendedRoles = [
    { icon: <Users size={24} />, title: "More Depends on the Project" },
    { icon: <Users size={24} />, title: "More Depends on the Project" },
    { icon: <Users size={24} />, title: "More Depends on the Project" },
    { icon: <Users size={24} />, title: "More Depends on the Project" }
  ];

  const secureCodePractices = [
    "Input validation",
    "Auth & password management",
    "Cryptographic practices",
    "Access control",
    "Error handling and logging",
    "Data protection",
    "Communication security",
    "System & infrastructure configuration",
    "Database security",
    "File management",
    "Output encoding",
    "Session management",
    "Memory management",
    "Codemod pattern security"
  ];

  const securityStandards = [
    "We adhere to ISO27001 and SOC2, and passed GDPR compliance across the projects in the past, in addition, we follow these steps to strengthen security:",
    "Follow security best practices for team identity profiles",
    "Account password security audits",
    "Securing off data transmission to remote servers through SSL tunnels",
    "Storing any provisioned data on Azure/AWS based cloud encrypted servers",
    "Proactive firewalls on all service delivery locations + other relevant safeguards and CCTY",
    "We do screening specific Internet gateways + other provisioned platforms to flag Security vulnerabilities on Integrity Security",
    "Continued Internet security screencast sessions",
    "MFA for accessing code repositories or brand and also including hardware, to save any produced data points to the shared Documents storage"
  ];

  return (
    <div className="w-full bg-white">
      {/* Practices & Culture Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Practices */}
            <div>
              <span className="text-cyan-400 text-sm font-medium px-4 py-1 bg-cyan-50 rounded-full inline-block mb-6">
                LearnMoreHere
              </span>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Practices & Culture
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We have a set of technical practices to ensure value delivery at its genuine.
              </p>
              <div className="space-y-2">
                {practices.map((practice) => (
                  <button
                    key={practice.id}
                    onClick={() => setActiveTab(practice.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === practice.id
                        ? 'bg-cyan-400 text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {practice.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Dynamic Content */}
            <div className="lg:col-span-2">
              {/* Tailored Team Tab */}
              {activeTab === 'tailored' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Tailored Team
                  </h2>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    Our team is fully trained with the right skill and domain expertise, to achieve the objective and successful execution. Here are some examples:
                  </p>

                  {/* Core Team */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Core Team
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {coreTeamRoles.map((role, index) => (
                        <TeamRole key={index} icon={role.icon} title={role.title} />
                      ))}
                    </div>
                  </div>

                  {/* Additional Roles */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Additional Roles
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {additionalRoles.map((role, index) => (
                        <TeamRole key={index} icon={role.icon} title={role.title} />
                      ))}
                    </div>
                  </div>

                  {/* Extended */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Extended
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {extendedRoles.map((role, index) => (
                        <TeamRole key={index} icon={role.icon} title={role.title} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Ensuring High Performance Tab */}
              {activeTab === 'performance' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ensuring High Performance
                  </h2>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    We have a set of continual activities in place to ensure smooth service delivery and high performance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Measuring Performance */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <BarChart3 size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Measuring Performance
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We use OKRs for setting quarterly goals, and reward above and beyond performance. Managers ensure that each team member has regular 1:1 meetings.
                        </p>
                      </div>
                    </div>

                    {/* Continual Feedback Loop */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <RefreshCw size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Continual Feedback Loop
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We nurture a culture of proactive and continuous feedback, including bi-weekly internal stakeholder meetings with respect to engagement progress.
                        </p>
                      </div>
                    </div>

                    {/* Learning & Development */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <BookOpen size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Learning & Development
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Paid trainings, certifications and conference attendance is a part of development plans, as well as mentorship and knowledge sharing programs to facilitate individual progress.
                        </p>
                      </div>
                    </div>

                    {/* Growth Framework */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Rocket size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Growth Framework
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Our goal is that each Devtech team member has a career path and personal development plan to aspire to and execute.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Customer Success Team Tab */}
              {activeTab === 'customer' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Customer Success Team
                  </h2>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    Each customer has a customer success team working with them which includes our Delivery Director, Head of Engineering, Account Executive, Service Delivery Manager and Engineering Team Lead, ensuring impact we create adds value above and beyond.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <FileText size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Quarterly business review
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <RefreshCw size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Open, direct and honest two-way communication
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Target size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Challenging status quo - we don't just follow instructions, we aim to add value every step of the way.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Video size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Real-time, interactive video communication between teams
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Engineering Foundations Tab */}
              {activeTab === 'engineering' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Devtech Engineering Foundation
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Over years of experience working with different domains and technologies, we've developed our own SDLC concept called "Devtech Development Foundation", which is our additional value add when working with your teams.
                  </p>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    Using "Process Maturity Level" scale, we determine maturity level of processes, including:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <RefreshCw size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Scrum Framework or Kanban Philosophy
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <FileText size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Approach Tools & Documentation
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Users size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Team Structure
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Code size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          CD/CI
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Code size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Development Approach
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Rocket size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Deployment
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <CheckCircle size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          QA Approach
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mt-8 leading-relaxed">
                    To identify improvement opportunities based on your objectives, and work jointly to implement end-to-end improvements.
                  </p>
                </>
              )}

              {/* Our Culture & Values Tab */}
              {activeTab === 'culture' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Culture & Values
                  </h2>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    As mentioned above, our culture is the one of learning, innovation, teamwork and striving for excellence.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <RefreshCw size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Drive Change
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We are proactive and we take the initiative.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <ThumbsUp size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Help and Ask for Help
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We are helpful and not afraid to ask for help.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Target size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Create Impact
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We work smarter, not harder.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-lg">
                        <Award size={24} className="text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Take Pride in the Work You Do
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We take pride in what we do and how we do it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      In our internal pulse surveys over the last 5 years, the two most common answers to the question "What do you like the most about being part of Devtech?" have consistently been:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                          alt="People"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800">People</h4>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop"
                          alt="Atmosphere"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800">Atmosphere</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Security by Design Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Security by Design
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            We take security seriously and have a number of processes and regular activities in order to minimize risks of data breach.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Secure Code Practice */}
            <div className="bg-cyan-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Secure Code Practice
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Security is embedded in our development process by design. Here are some of our secure coding practice checklists cover:
              </p>
              <div className="space-y-3">
                {secureCodePractices.map((practice, index) => (
                  <ChecklistItem key={index} text={practice} />
                ))}
              </div>
            </div>

            {/* Security Standards */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Security Standards
              </h3>
              <div className="space-y-4">
                {securityStandards.map((standard, index) => (
                  <SecurityItem key={index} text={standard} isDark={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticesSecuritySection;
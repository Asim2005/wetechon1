import TestimonialsSection from "../home/testomonial";
import PhasedServiceSection from "../RDServices/PhasedServiceSection";
import BenefitCards from "../RDServices/BenefitCards";
import PracticesSecuritySection from "../RDServices/PracticesSecuritySection";
const FixedScopeModel: React.FC = () => {
  return (
    <>
      <PhasedServiceSection />
      <BenefitCards />
      <PracticesSecuritySection />
      <TestimonialsSection />
    </>
  );
};

export default FixedScopeModel;

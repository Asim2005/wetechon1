import EngagementModelsSection from "../home/EngagementModelsSection";
import AllianceEcosystemSection from "../home/growingallinces";
import TestimonialsSection from "../home/testomonial";
import OutcomesSolutionsSection from "../RDServices/OutcomesSolutionsSection";
import OutcomesGrowthSection from "../RDServices/OutcomesGrowthSection";
import Herovenders from "../RDServices/Herocloud";
const Hvendoers: React.FC = () => {
  return (
    <>
      <Herovenders/>
      <OutcomesSolutionsSection />  
      <AllianceEcosystemSection/>
      <TestimonialsSection/>
      <EngagementModelsSection/>
      <OutcomesGrowthSection/>
    </>
  );
};

export default Hvendoers;

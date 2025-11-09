import Msptops from "../ecosystem/Msptop";
import EngagementModelsSection from "../home/EngagementModelsSection";
import TestimonialsSection from "../home/testomonial";
import ImpactSection from "../RDServices/impact";
import Mprovider from "../RDServices/Mprovider";
import GrowAllinces from "../home/growingallinces";
const ManageServiceProviders: React.FC = () => {
  return (
    <>
      <Mprovider />
      <Msptops />
      <GrowAllinces />
      <TestimonialsSection />
      <EngagementModelsSection />

      <ImpactSection />
    </>
  );
};

export default ManageServiceProviders;

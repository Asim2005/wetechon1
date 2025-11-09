
import CProviders from "../RDServices/CloudserviceProvider1";
import Csptops from "../ecosystem/Csptop";
import EngagementModelsSection from "../home/EngagementModelsSection";
import TestimonialsSection from "../home/testomonial";
import ImpactSection from "../RDServices/impact";
const Cprovider: React.FC = () => {
  return (
    <>


      <CProviders />  
        <Csptops />
        <TestimonialsSection/>
        <EngagementModelsSection/>
        <ImpactSection/>




    </>
  );
};

export default Cprovider;

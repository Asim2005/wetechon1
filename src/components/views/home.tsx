import Herosection from "../home/herosection";
import ServicesSection from "../home/ServicesSection";
import TrackRecordSection from "../home/trackrecord";
import GrowingAllinces from "../home/growingallinces";
import TestimonialsSection from "../home/testomonial";
import EngagementModelsSection from "../home/EngagementModelsSection";
import DeliveringImpactSection from "../home/DeliveringImpactSection ";
import TrackRecordStatsSection from "../home/TrackRecordStatsSection";
const Home = () => {
  return (
    <>
    <Herosection/>
     <ServicesSection/>
          <TrackRecordSection/> 
          <GrowingAllinces/>
          <TestimonialsSection/>
          <EngagementModelsSection/>
          <DeliveringImpactSection/>  
          <TrackRecordStatsSection/>
    </>    
);
};

export default Home;
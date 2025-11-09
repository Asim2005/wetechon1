import { HashRouter, Routes, Route } from "react-router-dom"; // HashRouter is correct
import Home from "./components/views/home";
import { Header } from "./components/header";
import CloudNativeDev from "./components/views/cloudeNativedev";
import HeroConsultation from "./components/RDServices/HeroConsultation";
import EcoSystemEnablement from "./components/views/EcoSystemEnablement";
import Ai from "./components/views/aiEnabelment";
import SoftwareVendors from "./components/views/SoftwareVendors";
import ManageServiceProviders from "./components/views/ManageServiceProviders";
import CloudserviceProvider1 from "./components/RDServices/CloudserviceProvider1";
import TeamDilivery from "./components/views/TeamDiliveryModels";
import FixedScopeModel from "./components/views/fixedScopeModels";
import About from "./components/views/About";
import ContactSection from "./components/views/Contectus";
import SystemMigration from "./components/views/systemmigration";
import Footer from "./components/home/footer";

function App() {
  // const basename = "/wetechon1"; // 👈 REMOVED: HashRouter usually works best without a basename
  
  return (
    <HashRouter> {/* 👈 Removed basename={basename} */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/R&D-as-a-Service" element={<HeroConsultation />} />
        <Route path="/Ai Enablement" element={<Ai />} />
        <Route
          path="/Eco-System-Enablement"
          element={<EcoSystemEnablement />}
        />
        <Route path="/Cloud-Native-Development" element={<CloudNativeDev />} />
        <Route path="/System-Migration" element={<SystemMigration />} />
        <Route path="/Software Vendors" element={<SoftwareVendors />} />
        <Route path="/Cloud Service Provider" element={<CloudserviceProvider1 />} />
        <Route path="/Managing Service Providers" element={<ManageServiceProviders />} />
        <Route path="/Fixed Scoped Models" element={<FixedScopeModel />} />
        <Route path="/Test Delivery Models" element={<TeamDilivery/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<ContactSection/>} />
      </Routes> 

      <Footer />
    </HashRouter>
  );
}

export default App;
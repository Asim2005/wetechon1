import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/home";
import { Header } from "./components/header";
import HeroConsultation from "./components/views/r&dasservices";
import Ai from "./components/views/aiEnabelment";
import EcoSystemEnablement from "./components/views/EcoSystemEnablement";
import SystemMigration from "./components/views/systemmigration";
import Footer from "./components/home/footer";
import  SoftwareVendors from "./components/views/SoftwareVendors";
import CloudserviceProvider1 from "./components/views/CloudServiceprovider";
import ManageServiceProviders from "./components/views/ManageServiceProviders";
import FixedScopeModel from "./components/views/fixedScopeModels";
import TeamDilivery from "./components/views/TeamDiliveryModels";
import About from "./components/views/About";
import ContactSection from "./components/views/Contectus";
import CloudNativeDev from "./components/views/cloudeNativedev";
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

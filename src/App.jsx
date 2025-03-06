import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomeImage from './components/homeimage';
import WhatWeDo from './components/whatwedo';
import Products from './components/products';
import Services from './components/ourservices';
import Partners from './components/partners';
import StatsSection from './components/statssection';
import WhyChoose from './components/whychoose';
import AboutUs from './components/aboutus';
import Footer from './components/footer';
import CloudLabs from './pages/cloudlabs';
import MailCollaboration from './pages/mailcollaboration';
import EmailSecurity from './pages/emailsecurity';
import Cybersecurity from './pages/cybersecurity';
import WebAppDevelopment from './pages/webdevelopment';
import BackupIdentity from './pages/backupidentity';
import InfrastructureSolutions from './pages/infrastructuresolutions';
import CloudConsultingSolutions from './pages/cloudconsulting';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeImage />
              <WhatWeDo />
              <Products />
              <Services />
              <Partners />
              <StatsSection />
              <WhyChoose />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/cloud-labs" element={<CloudLabs />} />
        <Route path="/mail-collaboration" element={<MailCollaboration/>}/>
        <Route path="/email-security" element={<EmailSecurity/>}/>
        <Route path="/cybersecurity" element={<Cybersecurity/>}/>
        <Route path="/web-app-development" element={<WebAppDevelopment/>}/>
        <Route path="/backup-identity" element={<BackupIdentity/>}/>
        <Route path="/infrastructure-solutions" element={<InfrastructureSolutions/>}/>
        <Route path="/cloud-consulting" element={<CloudConsultingSolutions/>}/>
      </Routes>
    </Router>
  );
}

export default App;

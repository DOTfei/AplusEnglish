import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cambridge from './components/Cambridge';
import Muet from './components/Muet';
import Speaking from './components/Speaking';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatIsCambridge from './components/WhatIsCambridge';
import WhatIsMuet from './components/WhatIsMuet';
import SecondaryIntensive from './components/SecondaryIntensive';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cambridge" element={<Cambridge />} />
          <Route path="/muet" element={<Muet />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-is-cambridge" element={<WhatIsCambridge />} />
          <Route path="/what-is-muet" element={<WhatIsMuet />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/secondary-intensive" element={<SecondaryIntensive />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

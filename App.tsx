
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import WhatYouGet from './components/WhatYouGet';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyUs />
        <WhatYouGet />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;

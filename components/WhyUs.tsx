import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="relative bg-[#8B268F] text-white pt-16 md:pt-20 pb-28 md:pb-32 lg:pb-40">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Why We're Doing This</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto lg:mx-0 mt-4 mb-8"></div>
            <p className="text-lg mb-6 leading-relaxed">
              SoulDeeds isn't just another app. We're building a dignified, halal space where Muslims connect through shared values and acts of service.
            </p>
            <p className="text-lg leading-relaxed">
              By joining early, you're helping us shape the future of meaningful connections, not just swipes.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-64 sm:h-72 lg:h-80 mt-10 lg:mt-0">
            <img 
              src="/images/section-3.png" 
              alt="Couple connecting"
              className="absolute w-[75%] sm:w-2/3 top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-2xl transform -rotate-6 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40" style={{ transform: 'translateY(1px)' }}>
         <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" fill="currentColor">
           <path d="M0,64 Q720,120 1440,64 L1440,120 L0,120 Z" style={{fill: '#f8fafc'}}></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyUs;
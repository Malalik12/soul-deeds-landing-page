import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="relative bg-[#8B268F] text-white pt-20 md:pt-24 pb-32 md:pb-40 lg:pb-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight">Why We're Doing This</h2>
            <div className="w-20 h-1 bg-white my-6 mx-auto lg:mx-0"></div>
            <div className="space-y-5 text-lg text-white/95 leading-relaxed max-w-xl">
              <p>
                SoulDeeds isn't just another app. We're building a dignified, halal space where Muslims connect through shared values and acts of service.
              </p>
              <p>
                By joining early, you're helping us shape the future of meaningful connections, not just swipes.
              </p>
            </div>
          </div>
          
          {/* Single Image Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
            <div className="w-full max-w-md">
              <img 
                src="/images/section-3.png" 
                alt="Muslim couple connecting through shared values"
                className="w-full h-auto object-cover rounded-2xl lg:ml-[-10px]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve - Made more pronounced */}
      <div className="absolute bottom-0 left-0 w-full h-28 sm:h-40 md:h-52" style={{ transform: 'translateY(1px)' }}>
         <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" fill="#f8fafc">
           <path d="M0,60 C450,160 950,-40 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyUs;
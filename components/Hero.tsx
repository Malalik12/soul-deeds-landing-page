import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Bottom Glow Effect */}
      <div 
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[150%] h-1/2 bg-fuchsia-100/50 opacity-50 blur-3xl rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-800 leading-tight">
              Love shouldn't expire. <br />
              <span className="text-[#8B268F]">Neither should</span> your
              access.
            </h1>
            <div className="w-28 h-1.5 bg-[#8B268F] my-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              We're handpicking our first 30 Soul Builders to shape Soul
              Deeds, a new Muslim matrimonial platform where faith,
              service, and real connection come together.
            </p>
            <div className="bg-fuchsia-50 border-l-4 border-[#8B268F] p-5 rounded-lg max-w-xl mx-auto lg:mx-0 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                As an early member, you'll get{' '}
                <span className="font-bold text-[#8B268F]">
                  lifetime free access
                </span>{' '}
                to premium features in return for your feedback and
                honest reviews.
              </p>
            </div>
          </div>

          {/* Single Image Content */}
          {/* Single Image Content */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center ">
            <div className="w-full max-w-md">
              <img
                src="/images/main-section.png"
                alt="Soul Deeds App interface on phones"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


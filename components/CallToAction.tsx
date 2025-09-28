import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-24">
       <div className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-40 text-slate-50" style={{ transform: 'translateY(-99%)' }}>
         <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" fill="currentColor">
           <path d="M1440,89.3323531 C1226.66667,112.443529 1013.33333,124 800,124 C586.666667,124 373.333333,112.443529 160,89.3323531 C106.666667,81.0970588 53.3333333,72.8617647 0,64.6264706 L0,0 L1440,0 L1440,89.3323531 Z" style={{transform: 'rotate(180deg) scaleX(-1)'}}></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Be one of the first<br/>
            <span className="text-[#8B268F]">SoulBuilders.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            Spaces on our early access waitlist are limited. Sign up today to secure your spot and be part of the movement to redefine halal matchmaking.
          </p>
          <a href="#" className="mt-8 inline-block bg-[#8B268F] text-white font-semibold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Yes, I Want Lifetime Access
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <img src="/images/image 3.png" alt="People talking" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

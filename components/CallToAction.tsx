import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="lg:w-2/5 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
            Be one of the first<br/>
            <span className="text-[#8B268F]">SoulBuilders.</span>
          </h2>
          <p className="mt-8 text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Spaces on our early access waitlist are limited. Sign up today to secure your spot and be part of the movement to redefine halal matchmaking.
          </p>
          <a
            href="#"
            className="mt-10 inline-block bg-[#8B268F] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#8B268F]/30 hover:shadow-xl hover:shadow-[#8B268F]/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            Yes, I Want Lifetime Access
          </a>
        </div>
        <div className="lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <img 
              src="/images/image 3.png" 
              alt="An illustration showing an email invitation from a laptop, representing a digital waitlist." 
              className="w-full max-w-md lg:max-w-lg" 
            />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

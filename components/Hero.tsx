import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left z-10 lg:ml-9"> {/* text aligned left */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-xl">
            Love shouldn't expire. <br />
            <span className="text-[#8B268F]">Neither should your access.</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#8B268F] my-6"></div>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            We're handpicking our first 30 Soul Builders to shape Soul Deeds, a new Muslim matrimonial platform where faith, service, and real connection come together.
          </p>
          <div className="bg-purple-100/50 border-l-4 border-[#8B268F] p-4 rounded-r-lg max-w-xl">
            <p className="text-gray-700">
              As an early member, you'll get <span className="font-bold text-[#8B268F]">lifetime free access</span> to premium features in return for your feedback and honest reviews.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center lg:justify-end relative h-[400px] sm:h-[450px] lg:h-[500px]">
          <div className="absolute w-full h-full">
            <img 
              src="/images/main-section.png" 
              alt="Soul Deeds App Interface" 
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-1/4 lg:translate-x-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[450px] h-auto rounded-3xl transform transition-transform duration-500 hover:scale-105" 
            /> {/* Image size increased */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

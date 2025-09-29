import React from 'react';
import { WHAT_YOU_GET_ITEMS } from '../constants';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
    </svg>
);

const WhatYouGet: React.FC = () => {
    // This function adds bold styling to keywords for visual emphasis.
    const applyBoldStyling = (text: string) => {
        return text.replace(/premium profile access|Guided conversation features|Participation in SoulCircles \(community events\)|Impact badges & service logs|Priority support/g, (match) => `<strong class="font-bold text-gray-900">${match}</strong>`);
    };

  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Single Image */}
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img 
              src="/images/section-4.png" 
              alt="Features of the SoulDeeds app" 
              className="w-full max-w-lg h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You'll Get (<span className="text-[#8B268F]">Lifetime</span>)
            </h2>
            <div className="w-20 h-1 bg-[#8B268F] mx-auto lg:mx-0 mt-4 mb-8"></div>
            <ul className="space-y-4 text-left inline-block max-w-md">
              {WHAT_YOU_GET_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700 leading-relaxed">
                  <div className="flex-shrink-0 bg-fuchsia-100 text-[#8B268F] rounded-full p-1.5 mr-4 mt-1">
                    <CheckIcon />
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: applyBoldStyling(item) }} />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">All 100% free — forever, no hidden charges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

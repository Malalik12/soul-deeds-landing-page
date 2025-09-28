import React from 'react';
import { WHAT_YOU_GET_ITEMS } from '../constants';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
    </svg>
);

const WhatYouGet: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative h-72 sm:h-80 lg:h-96 w-full">
            <img 
              src="/images/section-4.png" 
              alt="Woman on phone" 
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 rounded-2xl transform -rotate-6 transition-transform duration-500 hover:scale-105 z-10"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You'll Get (<span className="text-[#8B268F]">Lifetime</span>)
            </h2>
            <div className="w-20 h-1 bg-[#8B268F] mx-auto lg:mx-0 mt-4 mb-8"></div>
            <ul className="space-y-4 text-left">
              {WHAT_YOU_GET_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center text-lg">
                  <div className="bg-purple-100 text-[#8B268F] rounded-full p-1 mr-4">
                    <CheckIcon />
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: item.replace('premium profile', '<span class="font-bold">premium profile</span>').replace('community events', '<span class="font-bold">community events</span>').replace('Priority support', '<span class="font-bold">Priority support</span>') }} />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 italic">All 100% free — forever, no hidden charges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

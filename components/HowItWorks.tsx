import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const LightningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B268F]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l-7 11h6l-1 7l7 -11h-6z" />
    </svg>
);

// Custom SVG icons to match the screenshot
const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B268F]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B268F]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="7" y="4" width="10" height="16" rx="1" />
        <line x1="11" y1="5" x2="13" y2="5" />
        <line x1="12" y1="17" x2="12" y2="17.01" />
    </svg>
);

const FeedbackIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B268F]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a1 1 0 0 1 -1 -1" />
      <path d="M18.5 10.5l1.5 -1.5" />
      <path d="M20.5 8.5l1.5 -1.5" />
      <path d="M16.5 12.5l1.5 -1.5" />
    </svg>
);

const HowItWorks: React.FC = () => {
  const icons = [<UserIcon key="user" />, <PhoneIcon key="phone" />, <FeedbackIcon key="feedback" />];

  return (
    <section className="bg-slate-50 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How It Works (<span className="text-[#8B268F]">3 Simple Steps</span>)
          </h2>
          <div className="w-24 h-1.5 bg-[#8B268F] mx-auto mt-4"></div>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <span className="absolute -top-4 right-4 text-[120px] font-extrabold text-gray-100 select-none z-0">
                0{index + 1}
              </span>
              <div className="relative z-10">
                <div className="bg-fuchsia-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#" className="inline-block bg-[#8B268F] text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Claim My Lifetime Spot
          </a>
          <p className="mt-6 text-slate-600 flex items-center justify-center gap-2">
            <LightningIcon />
            <span>Only <span className="font-bold text-gray-800">30 lifetime spots</span> available — once they're gone, they're gone.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
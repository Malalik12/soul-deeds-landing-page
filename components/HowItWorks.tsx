
import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="7" y="4" width="10" height="16" rx="1" /><line x1="11" y1="5" x2="13" y2="5" /><line x1="12" y1="17" x2="12" y2="17.01" />
    </svg>
);

const StarsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
);

const LightningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l-7 11h6l-1 7l7 -11h-6z" />
    </svg>
);

const icons: { [key: string]: React.ReactNode } = {
  user: <UserIcon />,
  phone: <PhoneIcon />,
  stars: <StarsIcon />,
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works (3 Simple Steps)</h2>
          <div className="w-20 h-1 bg-[#8B268F] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
              <span className="absolute -top-4 -right-4 text-[120px] font-bold text-gray-100/50 opacity-50 z-0">
                0{index + 1}
              </span>
              <div className="relative z-10">
                <div className="bg-purple-100 text-[#8B268F] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {icons[step.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#" className="bg-[#8B268F] text-white font-semibold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Claim My Lifetime Spot
          </a>
          <p className="mt-6 text-gray-600 flex items-center justify-center space-x-2">
            <LightningIcon />
            <span>Only <span className="font-bold">30 lifetime spots</span> available — once they're gone, they're gone.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

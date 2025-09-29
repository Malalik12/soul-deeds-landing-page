"use client";

import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FaqItem } from '../types';

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const ChevronIcon: React.FC<{isOpen: boolean}> = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-5 text-left text-gray-900"
        aria-expanded={isOpen}
      >
        <span className="font-bold">{item.question}</span>
        <div className="bg-slate-100 rounded-full p-2 transition-colors duration-300 hover:bg-slate-200">
             <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pt-0 p-5 pr-12 text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked <span className="text-[#8B268F]">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B268F] mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
             <FaqAccordionItem 
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
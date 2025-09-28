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
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-800"
      >
        <span>{item.question}</span>
        <div className="bg-gray-100 rounded-full p-1">
             <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pt-2 pb-5 pr-8 text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked <span className="text-[#8B268F]">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B268F] mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
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

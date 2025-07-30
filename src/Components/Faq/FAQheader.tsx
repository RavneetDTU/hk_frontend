import React from "react";

type Props = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  categories: string[];
};

export const FAQHeader = ({ activeTab, onTabChange, categories }: Props) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg text-center space-y-6 lg:space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1c1d5c]">
          Welcome to Our FAQ Section!
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Get answers to your health, diet, and wellness questions all in one place.
          Our goal is to empower you with knowledge to achieve your health and wellness objectives.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#1c1d5c] to-[#3a3b8c] text-white shadow-md"
                : "bg-white text-[#1c1d5c] border border-[#1c1d5c] hover:bg-[#f0f1ff] hover:shadow-sm"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};
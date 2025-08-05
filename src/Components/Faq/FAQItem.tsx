import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-[#F9F4F1] transition-colors"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-gray-800 md:text-xl">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#1c1d5c] transform transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
        />
      </button>
      {open && (
        <div className="p-5 pt-0 bg-white text-gray-600">
          <div className="pl-4 border-l-4 border-[#1c1d5c]">
            <p className="text-base md:text-lg">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};
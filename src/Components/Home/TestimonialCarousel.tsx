"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TheEconomicTime from "@/assets/home-page/The_Economic_Times_logo.png";
import TimeOfIndia from "@/assets/home-page/times-of-india-news.png";
import TechCrunch from "@/assets/home-page/techcrunch-logo-transparent.png";
import IndianExpress from "@/assets/home-page/The_Indian_Express_logo.png";
import Economist from "@/assets/home-page/the-economist.jpeg";

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial data with images and associated text
  const testimonials = [
    {
      id: 1,
      image: Economist,
      alt: "The Economist",
      text: "Obesity can be fatal and we want to help people maintain not only their physical health but also their mental and social wellbeing too."
    },
    {
      id: 2,
      image: IndianExpress,
      alt: "The Indian Express",
      text: "How fitness-focused Healthiclick is helping people achieve a healthy lifestyle with its AI-enabled platform"
    },
    {
      id: 3,
      image: TechCrunch,
      alt: "TechCrunch",
      text: "The company has a dedicated team of 50+ dieticians, exercise coaches, and mind coaches, supporting fitness initiatives in over 12 countries across the globe."
    },
    {
      id: 4,
      image: TheEconomicTime,
      alt: "The Economic Times",
      text: "Today, Healthiclick is not just helping clients to lose weight, but also to manage and reverse diseases such as PCOD/PCOS, diabetes, hypertension and thyroid."
    },
    {
      id: 5,
      image: TimeOfIndia, 
      alt: "Time of India",
      text: "Healthiclick Raises $1.5 Million In Pre-Series A Funding to Expand Its AI-Enabled Health Platform"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 bag-[#F9F4F1] bg-gray-50 w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        {/* Main testimonial text */}
        <div className="mb-10 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-8 px-4 md:px-16">
            {testimonials[activeIndex].text}
          </blockquote>
        </div>

        {/* Logo carousel */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-16  p-4 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-gray-100 scale-110 shadow-md' : ''}`}
                >
                  <Image
                    src={testimonial.image}
                    alt="testimonial.alt"
                    fill
                    className="object-contain  w-full h-full"
                    sizes="(max-width: 768px) 80px, 100px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
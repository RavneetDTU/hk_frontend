"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoachingImage from "@/assets/home-page/consultingImage.png";

const cardContent = [
  {
    title: "Booking a consultation",
    description:
      "Share details of your health history and current lifestyle with our specialized coach to devise an effective PCOS-reversal strategy.",
  },
  {
    title: "Personalized Plan",
    description:
      "Get a customized fitness and nutrition roadmap tailored to your PCOS condition, goals, and preferences.",
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor improvements, log progress, and get continuous feedback from your coach through our smart app.",
  },
];

export default function MobileCoachSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % cardContent.length);
    }, 4000);
    return () => resetTimeout();
  }, [index]);

  const handlePrev = () => {
    resetTimeout();
    setIndex((prev) => (prev - 1 + cardContent.length) % cardContent.length);
  };

  const handleNext = () => {
    resetTimeout();
    setIndex((prev) => (prev + 1) % cardContent.length);
  };

  return (
    <div className="h-fit rounded-2xl  bg-gradient-to-br from-[#f5f7e0] to-orange-100 w-fit mx-4 my-4 shadow-lg">
      {/* Main container with fixed height and centered content */}
      <main className="container  mx-auto min-h-full flex flex-col justify-between">
        {/* Card container with proper spacing */}
        <section className="w-full  flex-grow flex flex-col">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated content with proper constraints */}
            <div className="w-full h-full max-w-md mx-auto p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="h-full flex flex-col items-center justify-center space-y-6"
                >
                  {/* Title */}
                  <div className="text-center w-full">
                    <h3 className="text-2xl font-semibold">
                      {cardContent[index].title}
                    </h3>
                  </div>

                  {/* Image with fixed aspect ratio */}
                  <div className="w-full ">
                    <Image
                      src={CoachingImage}
                      alt="Booking Image"
                      width={0}
                      height={0}
                      className="rounded-xl object-cover w-full h-full"
                      priority
                    />
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#444] text-center px-4">
                    {cardContent[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots - properly positioned at bottom */}
          <div className="w-full flex justify-center mt-8 mb-4">
            <div className="flex space-x-2">
              {cardContent.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    resetTimeout();
                    setIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? "bg-[#2D2D2D]" : "bg-[#D9D9D9]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
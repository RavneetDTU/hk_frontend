// components/WellBeingHero.tsx
"use client";

import Image from "next/image";
import { Star, ArrowUpRight, StarIcon } from "lucide-react";
import workHeroImg from "@/assets/how-it-works/HOW-IT-WORK-BANNER-1-556x469.jpg";

export default function WorkHeroSection() {
  return (
    <section className="bg-[#FDF9F7] border border-[#F7E5DE] rounded-xl px-4 py-8 md:py-12 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start text-gray-600 text-sm gap-2">
            <Star className="w-5 h-5 fill-current" />
            <span>4.7</span>
            <span className="text-gray-400">|</span>
            <span>3,460 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal leading-tight text-gray-900">
            Simplified Steps
            <span className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-indigo-100 rounded-full">
              <ArrowUpRight className="w-8 h-8 text-black" />
            </span>
            to lasting 
            <span className="text-gray-900 px-2">Well-Being</span> <br />
            and Happiness.
            <span className="inline-flex items-center justify-center ml-2 w-8 h-8 bg-orange-100 rounded">
              <StarIcon className="w-8 h-8 text-orange-400" />
            </span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src={workHeroImg}
            alt="Happy family in park"
            width={600}
            height={400}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

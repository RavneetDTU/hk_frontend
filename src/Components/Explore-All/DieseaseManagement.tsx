// components/about/DiseaseManagementSection.tsx
"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import DieseaseManageImg from "@/assets/explore-all/EXPLORE-ALL-BANNER-3-548x520.jpg";

export const DiseaseManagementSection = () => {
  return (
    <section className="py-10 bag-[#F9F4F1] bg-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 flex flex-col-reverse gap-6 md:gap-4 md:flex-row items-center justify-around">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-full max-w-md lg:max-w-full">
            <Image
              src={DieseaseManageImg}
              alt="Disease Management"
              width={0}
              height={0}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/5 space-y-4 md:space-y-8">
          {/* Badge */}
          <div className="text-blue-600 font-medium text-lg">• About us</div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Disease Management
          </h2>

          {/* Mission Block */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md">
              <CheckCircle className="w-5 h-5 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                HealthiClick works with you to alleviate weight-related symptoms
                of medical conditions such as PCOD/PCOS, Diabetes and Thyroid
                through simple but effective changes in your nutrition, eating
                habits and lifestyle
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

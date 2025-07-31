"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { VscCallIncoming } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";

const ConnectSection = () => {
  return (
    <div className=" w-full py-8 bg-[#F9F4F1] flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        <section className="max-w-5xl mx-auto py-8 px-4 border border-gray-200 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg shadow-lg">
          {" "}
          <div className=" mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Say hello
            </h2>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Let`s Connect!
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The first step to a healthier you starts here. Talk to our experts
              now
            </p>

            {/* Contact Methods */}
            <div className="flex flex-row  flex-wrap justify-center gap-6 md:gap-10">
              {/* Instagram */}
              <Link
                href="https://instagram.com/yourprofile"
                target="_blank"
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <FaInstagram className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Instagram</span>
              </Link>

              {/* Phone */}
              <Link
                href="tel:+1234567890"
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <VscCallIncoming className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Call Us</span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:contact@example.com"
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <TfiEmail className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Email Us</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConnectSection;

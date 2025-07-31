// app/testimonials/page.tsx
"use client";

import { useTestimonialStore } from "@/store/useStore";
import { useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const { testimonials, fetchTestimonials } = useTestimonialStore();

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return (
    <div className="py-10 bg-[#F9F4F1] bag-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <p className="text-sm text-gray-500">Reviews</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Testimonials from our clients & partners
        </h2>
        <button className="bg-[#F4F8F9]0 hover:bg-blue-600 text-white px-6 py-2 rounded-full mb-8">
          Integrations
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl border shadow-sm flex flex-col gap-4 relative"
            >
              <div className="absolute top-4 right-4 text-gray-400 cursor-pointer">✕</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : null}
                </div>
                <p className="font-semibold text-gray-800">{t.name}</p>
              </div>
              <p className="text-gray-700 text-sm">{t.message}</p>
              <div className="flex gap-1 text-yellow-500 text-lg">
                {Array(t.stars)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

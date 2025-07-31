// components/ConsultationForm.tsx
"use client";

import { PhoneIcon, MailIcon, MapPin } from "lucide-react";

export default function ConsultationForm() {
  return (
    <section className="bg-[#F4F8F9] px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            India`s 1st Doctor-Led <br /> Weight Loss Program <br /> for Diabetic & Pre-Diabetic
          </h2>

          <div className="flex items-start gap-3 text-gray-700">
            <PhoneIcon className="mt-1 w-5 h-5" />
            <p>
              Cure & reverse by Healthiclick effectively improves <br />
              sugar levels and reduces insulin dependency by 95%.
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="w-5 h-5" />
            <p>Over 2 Lakh+ Happy Clients Served!</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5" />
            <p>Book A Consultation</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="bg-white border border-gray-300 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Jane smith"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone number</label>
              <input
                type="text"
                placeholder="(123) 456 789"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input
                type="email"
                placeholder="test@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Select date*</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Write your idea"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#002D85] text-white font-medium py-2 rounded-xl mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
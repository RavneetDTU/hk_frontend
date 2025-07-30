import Image from "next/image";
import userImg1 from "@/assets/uifaces-popular-image (1).jpg";
import userImg2 from "@/assets/uifaces-popular-image (2).jpg";
import userImg3 from "@/assets/uifaces-popular-image.jpg";
import doctorImg from "@/assets/explore-all/EXPLORE-ALL-BANNER-3-548x520.jpg";
import { Star, PlayCircle } from "lucide-react";

export const ExploreHeroSection = () => {
  return (
    <section className="py-10 bag-[#F9F4F1] bg-gray-50 w-full h-full">
      {/* Text */}
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-500 text-sm font-medium">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill="currentColor"
                strokeWidth={0}
                className="w-5 h-5"
              />
            ))}
            <span className="text-black">5.0 (980 Reviews)</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Partner in health <br className="hidden md:block" /> and wellness
          </h1>
          <p className="text-gray-600 text-lg">
            Providing advanced healthcare solutions with a compassionate touch
            for every patient.
          </p>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Book a call
            </button>
            <button className="flex items-center gap-2 text-gray-800 font-medium">
              <PlayCircle className="w-6 h-6" />
              Watch Video
            </button>
          </div>
          <div className="flex items-center gap-3 pt-2 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <Image
                src={userImg1}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={userImg2}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={userImg3}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className="text-left text-sm">
              <div className="font-semibold text-gray-800">
                5000+ Appointments
              </div>
              <div className="text-gray-500">Patients booked already</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-1/2 h-full relative">
          <div className="overflow-hidden rounded-t-full">
            <Image
              src={doctorImg}
              alt="doctor"
              width={0}
              height={0}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

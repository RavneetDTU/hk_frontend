import React from "react";
import Image from "next/image";
import CoachingImage from "@/assets/home-page/consultingImage.png";

const CoachingSection = () => {
  return (
    <section className="min-h-screen w-full py-8 bg-gray-50 bsdg-[#F9F4F1] ">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-10 ">
          <p className=" w-3/4 text-center text-5xl font-semibold mx-auto">
            Personalized coaching that helps you lose the weight for good
          </p>
        </div>
        <div className="h-[80vh] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full h-full ">
            <Image
              src={CoachingImage}
              alt="Personalized Coaching"
              width={0}
              height={0}
              quality={90}
              className="rounded-lg object-contain h-full w-full"
            />
          </div>

          {/* Content on right */}
          <div className="lg:w-1/2 w-full h-full px-6 flex flex-col justify-center gap-8 ">

            <div className="space-y-16">
              {/* Understanding */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="w-3/4">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    Understanding
                  </h2>
                  <p className="text-gray-600 text-xl">
                    Book a consultation with our experts for us to understand
                    how Fitelo can help you build the perfect roadmap to your
                    health goals
                  </p>
                </div>
              </div>

              {/* Customize */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div className="w-3/4">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    Customize
                  </h2>
                  <p className="text-xl text-gray-600">
                    Receive a carefully designed plan that is personalized to
                    your needs and assimilates easily into your daily life
                  </p>
                </div>
              </div>

              {/* Daily tracking */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="w-3/4">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    Daily tracking
                  </h2>
                  <p className="text-xl text-gray-600">
                    Check-in with your personal coach to monitor your progress
                    and address any questions or concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;

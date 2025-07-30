// components/SuccessStoryCard.tsx
import React from "react";
import Image from "next/image";
import { workPlan } from "./types/workTypes";

interface WorkPlanCardProps {
  plan: workPlan;
  reverseLayout: boolean;
}

const WorkPlanCard: React.FC<WorkPlanCardProps> = ({ plan, reverseLayout }) => {
  return (
    <div
      className={`flex flex-col ${
        reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 md:gap-12 mb-16`}
    >
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          {/* Placeholder for image - replace with your actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <Image
              src={plan.imageUrl}
              alt={`storyImage`}
              layout="fill"
              objectFit="cover"
            />{" "}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {plan.header}
          </h3>
          <p className="text-gray-700 mb-4">{plan.content}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPlanCard;

// components/SuccessStoryCard.tsx
import React from "react";
import Image from "next/image";
import { SuccessStory } from "./types/successStories";

interface SuccessStoryCardProps {
  story: SuccessStory;
  reverseLayout: boolean;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  story,
  reverseLayout,
}) => {
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
              src={story.imageUrl}
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
          <p className="text-gray-700 mb-4">{story.content}</p>

          <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
            Read full story
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

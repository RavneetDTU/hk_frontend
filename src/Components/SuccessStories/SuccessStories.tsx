// components/SuccessStories.tsx
import React from 'react';
import SuccessStoryCard from './StoriesCard';
import { successStories } from './data/successStoriesData';

const SuccessStories = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <SuccessStoryCard 
              key={story.id}
              story={story}
              reverseLayout={index % 2 !== 0} // Alternate layout for odd indexes
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
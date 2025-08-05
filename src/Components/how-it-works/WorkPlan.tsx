// components/SuccessStories.tsx
import React from 'react';
import WorkPlanCard from './WorkPlanCard';
import { workPlanData } from './data/workPlanData';

const WorkPlan = () => {
  return (
    <section className=" bg-[#F9F4F1] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get a plan that`s uniquely yours</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-16">
          {workPlanData.map((story, index) => (
            <WorkPlanCard 
              key={story.id}
              plan={story}
              reverseLayout={index % 2 !== 0} // Alternate layout for odd indexes
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPlan;
import React from 'react';
import Image from 'next/image';
import transformationImg1 from "@/assets/about-transfrom-img1.png";
import transformationImg2 from "@/assets/about-transform-img2.png";


const AboutTransformationPage = () => {
  return (
    <section className="py-10 bg-[#F9F4F1] w-full">
      <div className="max-w-4xl h-full container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Rishabh`s Transformation</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* First Transformation Section */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 border-b border-gray-200">
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={transformationImg1 }
                  alt="Rishabh before transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  Before
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
            <div className="text-5xl text-start font-bold text-gray-900 mb-4">120Kg</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rishabh struggled with obesity throughout his teenage years. Determined to live a healthier life, he decided to join a gym and made working out a part of his daily routine, dedicating 2 hours each day to exercise. Over time, his hard work paid off, and he successfully lost 20 kgs.
              </p>
            </div>
          </div>

          {/* Second Transformation Section */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col items-center justify-center order-2 md:order-1">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={transformationImg2}
                  alt="Rishabh after transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  After
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center order-1 md:order-2">
            <div className="text-5xl font-bold text-gray-900 mb-4">92Kg</div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Rishabh eventually lost over 50 kgs. However, after suffering an accident, all the weight bounced back, and to make matters worse, he was diagnosed with cervical spondylitis. During this challenging time, he developed a deep interest in the power of natural healing and wellness, which helped him navigate through his recovery journey.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTransformationPage;
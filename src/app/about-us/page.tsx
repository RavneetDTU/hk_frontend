import AboutHeroSection from '@/Components/AboutUs/AboutHeroSection';
import AboutTransformationPage from '@/Components/AboutUs/AboutTransformation';
import StorySection from '@/Components/AboutUs/StorySection';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header/>
      <AboutHeroSection />
      <AboutTransformationPage />
      <StorySection />
      <Footer />
    </div>
  );
}
export default page;
import DiabetesHeroSection from '@/Components/Diabeties/DiabetesHeroSection';
import DiabetiesFeaturesSection from '@/Components/Diabeties/DiabetiesFeatureSection';
import HealthiclickSolution from '@/Components/PCOD/HealthiclickSolution';
import ContactUs from '@/shared/ContactUs';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import Testimonials from '@/shared/Testimonial';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
        <DiabetesHeroSection />
        <DiabetiesFeaturesSection />
        <HealthiclickSolution />
        <ContactUs />
        <Testimonials />
      <Footer />
    </div>
  );
}
export default page;
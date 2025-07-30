
import HealthiclickSolution from '@/Components/PCOD/HealthiclickSolution';
import PcodFeaturesSection from '@/Components/PCOD/PcodFeaturesSection';
import PcodHeroSection from '@/Components/PCOD/PcodheroSection';
import CoachingSection from '@/shared/CoachingSection';
import ContactUs from '@/shared/ContactUs';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import Testimonials from '@/shared/Testimonial';
import React from 'react';

function page() {
  return (
    <div>
      <Header />

        <PcodHeroSection />
        <PcodFeaturesSection />
        <HealthiclickSolution />
        <CoachingSection    />
        <ContactUs />
        <Testimonials />

      <Footer />
    </div>
  );
}
export default page;
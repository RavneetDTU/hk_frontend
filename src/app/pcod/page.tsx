
import HealthiclickSolution from '@/Components/PCOD/HealthiclickSolution';
import PcodFeaturesSection from '@/Components/PCOD/PcodFeaturesSection';
import PcodHeroSection from '@/Components/PCOD/PcodheroSection';
import CoachingSection from '@/shared/CoachingSection';
import ContactUs from '@/shared/ContactUs';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import MobileCoachSection from '@/shared/MobileCoachSection';
import Testimonials from '@/shared/Testimonial';
import React from 'react';

function page() {
  return (
    <div>
      <Header />

        <PcodHeroSection />
        <PcodFeaturesSection />
        <HealthiclickSolution />
        
        <div className="hidden md:flex ">
        <CoachingSection />
      </div>
      <div className="flex md:hidden w-full">
        <MobileCoachSection />
      </div>

        <ContactUs />
        <Testimonials />

      <Footer />
    </div>
  );
}
export default page;
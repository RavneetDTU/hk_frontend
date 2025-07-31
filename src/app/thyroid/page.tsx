import HealthiclickSolution from '@/Components/PCOD/HealthiclickSolution';
import ThyroidFeaturesSection from '@/Components/Thyroid/ThyroidFeatureSection';
import ThyroidHeroSection from '@/Components/Thyroid/ThyroidHeroSection';
import CoachingSection from '@/shared/CoachingSection';
import ContactUs from '@/shared/ContactUs';
import DoctorTeamSection from '@/shared/DoctorsTeam';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import MobileCoachSection from '@/shared/MobileCoachSection';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
      <ThyroidHeroSection />
      <ThyroidFeaturesSection />

      <HealthiclickSolution />

      <div className="hidden md:flex ">
        <CoachingSection/>
      </div>
      <div className="flex md:hidden w-full">
        <MobileCoachSection  />
      </div>

      <ContactUs />

      <DoctorTeamSection />
    
      <Footer />
    </div>
  );
}
export default page;
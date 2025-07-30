import HealthiclickSolution from '@/Components/PCOD/HealthiclickSolution';
import ThyroidFeaturesSection from '@/Components/Thyroid/ThyroidFeatureSection';
import ThyroidHeroSection from '@/Components/Thyroid/ThyroidHeroSection';
import ContactUs from '@/shared/ContactUs';
import DoctorTeamSection from '@/shared/DoctorsTeam';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
      <ThyroidHeroSection />
      <ThyroidFeaturesSection />

      <HealthiclickSolution />
      <ContactUs />

      <DoctorTeamSection />
    
      <Footer />
    </div>
  );
}
export default page;
import WorkHeroSection from '@/Components/how-it-works/WorkHeroSection';
import WorkPlan from '@/Components/how-it-works/WorkPlan';
import ConnectSection from '@/shared/ConnectSection';
import ContactUs from '@/shared/ContactUs';
import DoctorTeamSection from '@/shared/DoctorsTeam';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
      
      <WorkHeroSection />
      <ContactUs />
      <WorkPlan />
      <DoctorTeamSection />
      <ConnectSection />

      <Footer />
    </div>
  );
}
export default page;
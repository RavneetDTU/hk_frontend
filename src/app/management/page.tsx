import ConsultationForm from '@/Components/management/ConsultationForm';
import DoctorTeamSection from '@/shared/DoctorsTeam';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
      <ConsultationForm />
      <DoctorTeamSection  />
      <Footer />
    </div>
  );
}
export default page;
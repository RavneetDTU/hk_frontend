import { DiseaseManagementSection } from '@/Components/Explore-All/DieseaseManagement';
import { ExploreHeroSection } from '@/Components/Explore-All/ExploreHeaderSection';
import { ExploreWorksSection } from '@/Components/Explore-All/ExploreWorkSection';
import { WhyUsSection } from '@/Components/Explore-All/WhyUsSection';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import Testimonials from '@/shared/Testimonial';
import React from 'react';
function page() {
  return (
    <div>
        <Header />
        <ExploreHeroSection />
        <WhyUsSection />
        <DiseaseManagementSection />
        <ExploreWorksSection />
        <Testimonials />
        <Footer />
        </div>
  );
}
export default page;
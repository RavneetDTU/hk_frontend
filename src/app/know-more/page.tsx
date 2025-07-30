import { FoundersSection } from '@/Components/knowMore/FoundersSection';
import { KnowMoreHeroSection } from '@/Components/knowMore/KnowMoreHeroSection';
import { OurValuesSection } from '@/Components/knowMore/OurValuesSection';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header />
        <KnowMoreHeroSection />

        <OurValuesSection />
        <FoundersSection />

      <Footer />
    </div>
  );
}
export default page;
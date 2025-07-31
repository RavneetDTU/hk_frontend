import DiabetesHeroSection from "@/Components/Diabeties/DiabetesHeroSection";
import DiabetiesFeaturesSection from "@/Components/Diabeties/DiabetiesFeatureSection";
import HealthiclickSolution from "@/Components/PCOD/HealthiclickSolution";
import CoachingSection from "@/shared/CoachingSection";
import ContactUs from "@/shared/ContactUs";
import Footer from "@/shared/Footer";
import { Header } from "@/shared/Header";
import MobileCoachSection from "@/shared/MobileCoachSection";
import Testimonials from "@/shared/Testimonial";
import React from "react";
function page() {
  return (
    <div>
      <Header />
      <DiabetesHeroSection />
      <DiabetiesFeaturesSection />
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

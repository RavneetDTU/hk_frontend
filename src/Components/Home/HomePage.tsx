import { Header } from "@/shared/Header";
import React from "react";
import { HeroSection } from "./heroSection";
import ContactUs from "@/shared/ContactUs";
import CoachingSection from "@/shared/CoachingSection";
import { HealthStats } from "./HealthStats";
import HomeSuccessStories from "./SuccessStoriesSwiper";
import TestimonialsCarousel from "./TestimonialCarousel";
import DoctorTeamSection from "@/shared/DoctorsTeam";
import ConnectSection from "@/shared/ConnectSection";
import Footer from "@/shared/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactUs />
      <CoachingSection />
      <HealthStats />
      <HomeSuccessStories />
      <TestimonialsCarousel />
      <DoctorTeamSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
export default HomePage;

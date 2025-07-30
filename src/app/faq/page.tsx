"use client"

import { useState } from "react";
import { FAQHeader } from "@/Components/Faq/FAQheader";
import { FAQContent } from "@/Components/Faq/FAQContant";
import type { Category } from "@/Components/Faq/FAQContant"; 
import { Header } from "@/shared/Header";
import Footer from "@/shared/Footer";

const categories: Category[] = [
  "Weight Loss",
  "Weight Gain",
  "Fitness",
  "Disease Prevention",
  "Plan & Pricing",
  "Contact Us",
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<Category>("Weight Loss");

  return (
    <main className="min-h-screen bg-gray-50">
      <Header/>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
        <FAQHeader
          activeTab={activeTab}
          onTabChange={(tab: string) => setActiveTab(tab as Category)}
          categories={categories}
        />
        <FAQContent category={activeTab}/>
      </div>
      <Footer />
    </main>
  );
}
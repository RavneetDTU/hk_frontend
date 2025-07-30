import SuccessStories from '@/Components/SuccessStories/SuccessStories';
import Footer from '@/shared/Footer';
import { Header } from '@/shared/Header';
import React from 'react';
function page() {
  return (
    <div>
      <Header />

      <SuccessStories />

      <Footer />
    </div>
  );
}
export default page;
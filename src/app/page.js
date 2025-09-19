'use client';

import React, { useState } from 'react';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import FeaturedProducts from './components/home/FeaturedProducts';
import NewsletterSection from './components/home/NewsletterSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
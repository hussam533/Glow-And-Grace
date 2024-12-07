import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default HomePage;
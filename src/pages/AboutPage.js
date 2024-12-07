import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Glow & Grace
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
            alt="Glow & Grace Team"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Glow & Grace was born out of a passion for empowering individuals to embrace their natural beauty. Founded in 2020, we set out to create a line of cosmetics that not only enhances your features but also nourishes your skin.
          </p>
          <p className="mb-4">
            Our team of expert formulators and beauty enthusiasts work tirelessly to bring you products that are not only effective but also ethically produced and environmentally friendly.
          </p>
          <p>
            At Glow & Grace, we believe that true beauty comes from within, and our products are designed to help you shine your brightest.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality', description: 'We use only the finest ingredients to ensure our products meet the highest standards.' },
            { title: 'Sustainability', description: 'Our packaging is eco-friendly, and we re committed to reducing our environmental impact.' },
            { title: 'Inclusivity', description: 'We create products for all skin types and tones, celebrating diversity in beauty.' },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
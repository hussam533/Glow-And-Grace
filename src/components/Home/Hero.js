import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Radiant Beauty</h1>
            <p className="text-xl mb-8">Enhance your natural glow with our premium, eco-friendly cosmetics.</p>
            <Link
              to="/products"
              className="bg-accent text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Shop Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
              alt="Cosmetics"
              className="rounded-lg shadow-lg"
            />
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-text font-semibold">100% Natural Ingredients</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-text font-semibold">Cruelty-Free</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
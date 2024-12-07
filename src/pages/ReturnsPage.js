import React from 'react';
import { motion } from 'framer-motion';

const ReturnsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Returns Policy
      </motion.h1>
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
        <p className="mb-4">We offer a 30-day return policy for all unused items in their original packaging. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange.</p>
        
        <h3 className="text-xl font-semibold mb-2">How to Return an Item</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>Contact our customer service team to initiate the return process.</li>
          <li>Pack the item securely in its original packaging.</li>
          <li>Include a copy of your order confirmation or packing slip.</li>
          <li>Ship the package to the address provided by our customer service team.</li>
        </ol>
        
        <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
        <p className="mb-4">Once we receive and inspect your return, we'll process your refund within 3-5 business days. The refund will be credited to your original method of payment.</p>
        
        <h3 className="text-xl font-semibold mb-2">Exceptions</h3>
        <p>Please note that certain items, such as sale items or personalized products, may not be eligible for return. For hygiene reasons, we cannot accept returns on opened cosmetic products unless they are defective.</p>
      </motion.div>
    </div>
  );
};

export default ReturnsPage;
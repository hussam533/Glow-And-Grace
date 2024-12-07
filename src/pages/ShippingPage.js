import React from 'react';
import { motion } from 'framer-motion';

const ShippingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shipping Information
      </motion.h1>
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Domestic Shipping</h2>
        <p className="mb-4">We offer free standard shipping on all orders over $50 within the United States. For orders under $50, a flat rate of $5.99 will be applied.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Standard Shipping (3-5 business days): Free for orders over $50, otherwise $5.99</li>
          <li>Express Shipping (2-3 business days): $12.99</li>
          <li>Overnight Shipping (1 business day): $24.99</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
        <p className="mb-4">We ship to most countries worldwide. International shipping rates are calculated based on the destination country and the weight of the package.</p>
        <p>Please note that international orders may be subject to import duties and taxes, which are the responsibility of the recipient.</p>
      </motion.div>
    </div>
  );
};

export default ShippingPage;
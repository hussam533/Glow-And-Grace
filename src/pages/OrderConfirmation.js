import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-xl mb-8">Your order has been successfully placed.</p>
        <Link
          to="/"
          className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
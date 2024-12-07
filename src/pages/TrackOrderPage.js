import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated order tracking - replace with actual API call
    setOrderStatus({
      number: orderNumber,
      status: 'In Transit',
      estimatedDelivery: '2023-05-15',
      items: [
        { name: 'Radiant Foundation', quantity: 1 },
        { name: 'Velvet Lipstick', quantity: 2 },
      ],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Track Your Order
      </motion.h1>
      <motion.div
        className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Order Number
            </label>
            <input
              type="text"
              id="orderNumber"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
          >
            Track Order
          </button>
        </form>

        {orderStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
            <p><strong>Order Number:</strong> {orderStatus.number}</p>
            <p><strong>Status:</strong> {orderStatus.status}</p>
            <p><strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Items</h3>
            <ul>
              {orderStatus.items.map((item, index) => (
                <li key={index}>{item.name} (Qty: {item.quantity})</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TrackOrderPage;
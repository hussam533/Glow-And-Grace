import React from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What ingredients do you use in your products?',
      answer: 'We use high-quality, natural ingredients in all our products. Each product page lists its specific ingredients.'
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Yes, all our products are cruelty-free and not tested on animals.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in their original packaging. Please visit our Returns page for more information.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also check your order status on our Track Order page.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
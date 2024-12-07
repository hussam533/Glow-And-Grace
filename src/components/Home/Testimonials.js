import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Glow & Grace products have transformed my skincare routine. My skin has never looked better!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Emily Davis',
    text: 'I love how natural and effective these cosmetics are. They make me feel confident and beautiful.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Michael Brown',
    text: 'As someone with sensitive skin, I appreciate the gentle formulas. Great products!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'Track Order', path: '/track-order' },
      ],
    },
    {
      title: 'Connect With Us',
      links: [
        { name: 'Facebook', path: '#' },
        { name: 'Instagram', path: '#' },
        { name: 'Twitter', path: '#' },
        { name: 'Pinterest', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Glow & Grace</h3>
            <p className="mb-4">Enhancing your natural beauty with premium cosmetics.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-text px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-r-full hover:bg-opacity-90 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-accent transition duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2023 Glow & Grace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
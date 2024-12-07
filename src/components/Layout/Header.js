import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Header = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Glow & Grace</Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/signin" className={`hidden md:block text-lg font-medium transition-colors duration-300 ${
              isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-accent'
            }`}>
              Sign In
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingBagIcon className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-accent'
              }`} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
              ) : (
                <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block px-4 py-2 text-text hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/signin"
          className="block px-4 py-2 text-text hover:bg-primary hover:text-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Sign In
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
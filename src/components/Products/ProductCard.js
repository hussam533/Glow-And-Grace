import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../Hooks/useCart';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-primary text-sm mb-4">Category: {product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-dark transition-colors duration-300 flex items-center"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
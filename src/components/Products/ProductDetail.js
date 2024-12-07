import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

// Mock product data (this should ideally be in a separate file and shared between components)
const products = [
  {
    id: 1,
    name: 'Radiant Foundation',
    description: 'Achieve a flawless, radiant complexion with our lightweight foundation.',
    price: 39.99,
    category: 'Face',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Velvet Lipstick',
    description: 'Long-lasting, creamy lipstick for the perfect pout.',
    price: 24.99,
    category: 'Lips',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Shimmer Eyeshadow Palette',
    description: 'Create stunning eye looks with our versatile eyeshadow palette.',
    price: 49.99,
    category: 'Eyes',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Hydrating Face Mist',
    description: 'Refresh and hydrate your skin with our nourishing face mist.',
    price: 29.99,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'Volumizing Mascara',
    description: 'Achieve dramatic, voluminous lashes with our signature mascara.',
    price: 22.99,
    category: 'Eyes',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=1000&q=80'
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity(Math.max(1, quantity + amount));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8 mt-16">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.category}
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4 text-primary">${product.price.toFixed(2)}</p>
            <p className="mb-6 text-gray-600">{product.description}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">Quantity:</span>
              <button
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                <Minus size={20} />
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center text-lg font-semibold"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailPage;
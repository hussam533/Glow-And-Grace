import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/Products/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch products and categories
    const fetchProductsAndCategories = async () => {
      setLoading(true);
      // In a real application, this would be an API call
      const mockProducts = [
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
        {
          id: 6,
          name: 'Glow Highlighter',
          description: 'Add a radiant glow to your complexion with our illuminating highlighter.',
          price: 34.99,
          category: 'Face',
          image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: 7,
          name: 'Nourishing Night Cream',
          description: 'Rejuvenate your skin overnight with our rich, nourishing night cream.',
          price: 54.99,
          category: 'Skincare',
          image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: 8,
          name: 'Matte Liquid Lipstick',
          description: 'Long-wearing, transfer-proof liquid lipstick for bold, matte lips.',
          price: 26.99,
          category: 'Lips',
          image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: 9,
          name: 'Brow Sculpting Pencil',
          description: 'Define and shape your brows with our precision brow pencil.',
          price: 19.99,
          category: 'Eyes',
          image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: 10,
          name: 'Vitamin C Serum',
          description: 'Brighten and even out your skin tone with our potent Vitamin C serum.',
          price: 59.99,
          category: 'Skincare',
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=80'
        },
      ];

      const uniqueCategories = ['All', ...new Set(mockProducts.map(product => product.category))];
      
      setProducts(mockProducts);
      setCategories(uniqueCategories);
      setLoading(false);
    };

    fetchProductsAndCategories();
  }, []);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
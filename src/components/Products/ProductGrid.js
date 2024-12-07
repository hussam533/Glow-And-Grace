import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ProductGrid = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const loadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 12);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
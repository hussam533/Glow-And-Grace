import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { id: 1, name: "Radiant Foundation", price: 39.99, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Velvet Lipstick", price: 24.99, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Shimmer Eyeshadow Palette", price: 49.99, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Hydrating Face Mist", price: 29.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Volumizing Mascara", price: 22.99, image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80" },
];

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="px-2"
            >
              <Link to={`/products/${product.id}`} className="block">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
              </Link>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
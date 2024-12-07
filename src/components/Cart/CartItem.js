import React from 'react';
import { useCart } from '../../Hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="bg-gray-200 px-2 py-1 rounded-l-md"
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded-r-md"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
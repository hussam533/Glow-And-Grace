import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';

const CartSummary = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Link
        to="/checkout"
        className="block w-full bg-primary text-white text-center py-3 rounded-full hover:bg-opacity-90 transition duration-300"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
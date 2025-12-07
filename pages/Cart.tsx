import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: 'cod'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  if (step === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-neon/20 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-neon" />
        </div>
        <h1 className="text-3xl font-bold uppercase italic mb-4">Order Confirmed!</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Thank you for your purchase, {formData.name}. We have sent a confirmation to {formData.email}.
          Your gains are on the way.
        </p>
        <Link to="/" className="px-8 py-3 bg-neon text-black font-bold uppercase rounded hover:bg-neon-hover">
          Back to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && step === 'cart') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold uppercase italic mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">It looks like you haven't added any supplements yet.</p>
        <Link to="/shop" className="px-8 py-3 bg-neon text-black font-bold uppercase rounded hover:bg-neon-hover">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-20 container mx-auto px-4">
      <h1 className="text-3xl font-black uppercase italic mb-8">
        {step === 'cart' ? 'Shopping Cart' : 'Checkout'}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Column */}
        <div className="lg:col-span-2">
          {step === 'cart' ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 md:gap-8 p-4 bg-dark-card rounded-xl border border-white/5 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded bg-white/5" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                    <span className="font-bold text-neon">${item.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white/5 rounded border border-white/10">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-white/10"><Minus className="w-3 h-3" /></button>
                      <span className="w-8 text-center text-sm font-mono">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-white/10"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-dark-card p-6 rounded-xl border border-white/5">
                <h2 className="text-xl font-bold uppercase mb-4">Shipping Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Full Name</label>
                    <input required name="name" onChange={handleInputChange} className="w-full bg-dark border border-white/10 rounded p-3 text-white focus:border-neon outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Email</label>
                    <input required name="email" type="email" onChange={handleInputChange} className="w-full bg-dark border border-white/10 rounded p-3 text-white focus:border-neon outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Address</label>
                    <input required name="address" onChange={handleInputChange} className="w-full bg-dark border border-white/10 rounded p-3 text-white focus:border-neon outline-none" placeholder="123 Gym Street" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">City</label>
                    <input required name="city" onChange={handleInputChange} className="w-full bg-dark border border-white/10 rounded p-3 text-white focus:border-neon outline-none" placeholder="Metropolis" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">ZIP Code</label>
                    <input required name="zip" onChange={handleInputChange} className="w-full bg-dark border border-white/10 rounded p-3 text-white focus:border-neon outline-none" placeholder="10001" />
                  </div>
                </div>
              </div>

              <div className="bg-dark-card p-6 rounded-xl border border-white/5">
                <h2 className="text-xl font-bold uppercase mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-white/10 rounded bg-dark cursor-pointer hover:border-neon">
                    <input type="radio" name="payment" value="cod" checked={formData.payment === 'cod'} onChange={handleInputChange} className="text-neon focus:ring-neon bg-dark" />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-white/10 rounded bg-dark cursor-pointer hover:border-neon">
                    <input type="radio" name="payment" value="card" checked={formData.payment === 'card'} onChange={handleInputChange} className="text-neon focus:ring-neon bg-dark" />
                    <span>Credit / Debit Card (Online)</span>
                  </label>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Summary Column */}
        <div className="lg:col-span-1">
          <div className="bg-dark-card p-6 rounded-xl border border-white/5 sticky top-24">
            <h2 className="text-xl font-bold uppercase mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-neon">Free</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg text-white">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full bg-neon text-black font-bold uppercase py-4 rounded hover:bg-neon-hover transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                form="checkout-form"
                className="w-full bg-neon text-black font-bold uppercase py-4 rounded hover:bg-neon-hover transition-colors flex items-center justify-center gap-2"
              >
                Place Order (${totalPrice.toFixed(2)})
              </button>
            )}
             <div className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Secure SSL Checkout
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

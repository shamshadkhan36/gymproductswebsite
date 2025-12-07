import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { totalItems, isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-neon selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black italic tracking-tighter text-white">
            IRON<span className="text-neon">CORE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-neon transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-neon transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-neon transition-colors">About</Link>
            <Link to="/contact" className="hover:text-neon transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-neon text-black text-xs font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-full"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-card border-t border-white/10 p-4">
            <nav className="flex flex-col space-y-4 font-bold uppercase">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-neon">Home</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-neon">Shop</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-neon">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-neon">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-dark-card h-full shadow-2xl flex flex-col border-l border-white/10">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty.</p>
                  <Link to="/shop" onClick={() => setIsCartOpen(false)} className="block mt-4 text-neon font-bold hover:underline">Start Shopping</Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded bg-white/5" />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">-</button>
                        <span className="text-sm font-mono">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 self-start">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-dark">
                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-neon">${totalPrice.toFixed(2)}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-neon text-black text-center font-bold py-3 rounded uppercase tracking-wide hover:bg-neon-hover transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="text-2xl font-black italic tracking-tighter text-white mb-6 block">
                IRON<span className="text-neon">CORE</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium nutrition for athletes who demand the best.
                Pure ingredients, science-backed formulas, and
                measurable results.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-6 text-neon">Shop</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/shop?category=Protein" className="hover:text-white">Protein</Link></li>
                <li><Link to="/shop?category=Pre-workout" className="hover:text-white">Pre-Workout</Link></li>
                <li><Link to="/shop?category=Creatine" className="hover:text-white">Creatine</Link></li>
                <li><Link to="/shop?category=Accessories" className="hover:text-white">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-6 text-neon">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-6 text-neon">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neon" />
                  123 Muscle Ave, Gym City, CA
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neon" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neon" />
                  support@ironcore.com
                </li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-neon hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-neon hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-neon hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} IronCore Nutrition. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
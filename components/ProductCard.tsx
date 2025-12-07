import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-neon/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,154,0.1)]">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
            Sale
          </span>
        )}
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 text-neon fill-neon" />
          <span className="text-xs text-gray-400 font-medium">{product.rating} ({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold mb-1 group-hover:text-neon transition-colors truncate">{product.name}</h3>
        </Link>
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">{product.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
            )}
            <span className="text-xl font-bold text-white">${product.price}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon hover:text-black transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
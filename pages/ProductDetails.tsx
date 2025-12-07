import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, CheckCircle, Truck, RefreshCw, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'reviews'>('desc');

  if (!product) {
    return <div className="p-20 text-center">Product not found. <Link to="/shop" className="text-neon">Go Back</Link></div>;
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  return (
    <div className="pt-10 pb-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-neon">Home</Link> / <Link to="/shop" className="hover:text-neon">Shop</Link> / <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-dark-card rounded-2xl overflow-hidden border border-white/5 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.originalPrice && (
                 <span className="absolute top-6 left-6 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded uppercase shadow-lg">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/10 hover:border-neon cursor-pointer">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black uppercase italic mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-neon">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-neon' : 'fill-none'}`} />
                ))}
              </div>
              <span className="text-gray-400 text-sm">{product.reviews} Reviews</span>
            </div>

            <div className="flex items-end gap-4 mb-6">
              <span className="text-4xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through mb-1">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 border-b border-white/10 pb-8">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {product.nutrition.slice(0, 3).map((nut) => (
                <div key={nut.label} className="bg-white/5 p-4 rounded-xl text-center">
                  <span className="block text-xl font-bold text-neon">{nut.value}</span>
                  <span className="text-xs text-gray-400 uppercase">{nut.label}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center bg-white/5 rounded-lg border border-white/10 h-14">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-12 h-full flex items-center justify-center hover:bg-white/10 text-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-lg">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-12 h-full flex items-center justify-center hover:bg-white/10 text-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-neon text-black font-bold uppercase tracking-wider h-14 rounded-lg hover:bg-neon-hover transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Cart
              </button>
            </div>

            <a
              href={`https://wa.me/1234567890?text=I'm interested in ${product.name}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-[#20bd5a] transition-colors text-center mb-8 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Quick Buy via WhatsApp
            </a>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-neon" />
                <span>In stock - Ready to ship</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-neon" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-neon" />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
             <button
                onClick={() => setActiveTab('desc')}
                className={`px-8 py-4 font-bold uppercase tracking-wider whitespace-nowrap ${activeTab === 'desc' ? 'text-neon border-b-2 border-neon' : 'text-gray-400 hover:text-white'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-8 py-4 font-bold uppercase tracking-wider whitespace-nowrap ${activeTab === 'ingredients' ? 'text-neon border-b-2 border-neon' : 'text-gray-400 hover:text-white'}`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-8 py-4 font-bold uppercase tracking-wider whitespace-nowrap ${activeTab === 'reviews' ? 'text-neon border-b-2 border-neon' : 'text-gray-400 hover:text-white'}`}
              >
                Reviews ({product.reviews})
              </button>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-white/5">
            {activeTab === 'desc' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Product Benefits</h3>
                <ul className="space-y-3 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-neon rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400">{product.description}</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Nutritional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    {product.nutrition.map((item, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-white/5">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="font-bold text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Ingredients List</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{product.ingredients}</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="text-center py-10">
                <div className="flex justify-center mb-4 text-neon">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-neon" />)}
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.rating} out of 5</h3>
                <p className="text-gray-400 mb-8">Based on {product.reviews} reviews</p>
                <button className="px-6 py-2 border border-white/20 rounded hover:border-white transition-colors">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Award, TrendingUp, MessageCircle, Star } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1920"
            alt="Male Athlete Lifting"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 border border-neon text-neon text-xs font-bold uppercase tracking-widest rounded mb-6">
              #1 Rated Supplements
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-tight mb-6">
              Fuel Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-600">Strength.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Premium nutrition engineered for faster muscle growth, enhanced recovery, and peak performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-neon text-black font-bold uppercase tracking-wider hover:bg-neon-hover transition-colors rounded shadow-[0_0_20px_rgba(0,255,154,0.3)]">
                Shop Now
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors rounded flex items-center gap-2 backdrop-blur-sm border border-white/10">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Protein', img: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=400' },
              { name: 'Creatine', img: 'https://images.unsplash.com/photo-1693996045435-af7c48b9cafb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
              { name: 'Pre-workout', img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=400' },
              { name: 'Vitamins', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400' }
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/shop?category=${cat.name}`}
                className="group relative h-40 md:h-60 rounded-xl overflow-hidden bg-zinc-900 border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold uppercase italic group-hover:text-neon transition-colors">{cat.name}</h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    View Products <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-dark-card border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-2">Bestsellers</h2>
              <p className="text-gray-400">Top rated products by our community</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-neon font-bold uppercase text-sm hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-neon font-bold uppercase text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-neon mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">100% Authentic</h3>
              <p className="text-sm text-gray-400">Sourced directly from manufacturers. Guaranteed purity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 transition-colors">
              <Truck className="w-10 h-10 text-neon mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-400">Express shipping nationwide. Get your gains faster.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 transition-colors">
              <Award className="w-10 h-10 text-neon mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">Best Prices</h3>
              <p className="text-sm text-gray-400">We match or beat competitor pricing on all products.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-neon mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">Results Driven</h3>
              <p className="text-sm text-gray-400">Formulas backed by science for maximum performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-card border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,154,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic text-center mb-16">Community Fueled</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Strong", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=100", text: "IronCore changed my game. The protein mixes perfectly and the recovery time has improved drastically." },
              { name: "David Lift", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=100", text: "Best pre-workout I've ever used. No crash, just pure energy for my 2 hour sessions." },
              { name: "Mike Power", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100", text: "Fast shipping and authentic products. My go-to shop for all my creatine and whey needs." }
            ].map((user, i) => (
              <div key={i} className="bg-dark p-8 rounded-xl border border-white/5 relative">
                <div className="flex items-center gap-1 text-neon mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-neon" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{user.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                    <img src={user.img} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">{user.name}</h4>
                    <span className="text-xs text-gray-500">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
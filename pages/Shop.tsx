import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [sortOption, setSortOption] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    // Sorting logic
    if (sortOption === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else {
      // Default popular (using reviews count as proxy)
      result = [...result].sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [selectedCategory, sortOption]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black uppercase italic mb-8">Shop Supplements</h1>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-dark-card p-4 rounded-xl border border-white/5">
          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center gap-2 font-bold uppercase text-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>

          {/* Categories Desktop */}
          <div className={`flex-col md:flex-row md:flex items-center gap-4 ${isFilterOpen ? 'flex w-full' : 'hidden md:flex'}`}>
            <span className="text-gray-500 text-sm uppercase font-bold hidden md:inline">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-neon text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="relative group self-end md:self-auto">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
              Sort By:
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent text-white border-none focus:ring-0 cursor-pointer uppercase font-bold"
              >
                <option value="popular" className="bg-dark">Popularity</option>
                <option value="price-low" className="bg-dark">Price: Low to High</option>
                <option value="price-high" className="bg-dark">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No products found in this category.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="mt-4 text-neon font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

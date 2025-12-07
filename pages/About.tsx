import React from 'react';

export const About = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic mb-8 text-center">Fitness For Everyone</h1>
          
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px]">
            <img src="https://images.unsplash.com/photo-1517963879466-e825c2fe9ae0?auto=format&fit=crop&q=80&w=1200" alt="Male Athlete Gym" className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold uppercase text-neon mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At IronCore Nutrition, we believe that strength isn't just about lifting heavy—it's about
              lifting each other up. Our mission is to provide pro-level nutrition that is accessible
              to everyone, from the seasoned bodybuilder to the weekend warrior.
            </p>

            <h2 className="text-2xl font-bold uppercase text-neon mb-4">The IronCore Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-dark-card p-6 rounded-xl border border-white/5">
                <h3 className="font-bold text-white mb-2">Uncompromised Quality</h3>
                <p className="text-gray-400">We source only the highest grade ingredients. No fillers, no proprietary blends, just pure performance.</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl border border-white/5">
                <h3 className="font-bold text-white mb-2">Transparency</h3>
                <p className="text-gray-400">What's on the label is what's in the tub. We rigorously test every batch for purity and potency.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold uppercase text-neon mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Founded in 2024 by a team of athletes and nutritionists, IronCore was born out of frustration with the industry's lack of transparency. 
              We wanted supplements that actually worked, without the hype. Today, we are proud to fuel thousands of transformations worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
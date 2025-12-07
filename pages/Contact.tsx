import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black uppercase italic mb-12 text-center">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold uppercase text-neon">Contact Info</h2>
            <p className="text-gray-400">Have questions about our products or your order? We are here to help you crush your goals.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-gray-400">support@ironcore.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Headquarters</h3>
                  <p className="text-gray-400">123 Muscle Ave,<br/>Gym City, CA 90210</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold uppercase rounded hover:bg-[#20bd5a] transition-colors mt-4"
            >
               Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-dark-card p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold uppercase text-white mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-dark border border-white/10 rounded p-4 text-white focus:border-neon outline-none" />
                <input type="email" placeholder="Email" className="bg-dark border border-white/10 rounded p-4 text-white focus:border-neon outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="bg-dark border border-white/10 rounded p-4 text-white focus:border-neon outline-none w-full" />
              <textarea placeholder="Message" rows={5} className="bg-dark border border-white/10 rounded p-4 text-white focus:border-neon outline-none w-full resize-none"></textarea>
              <button type="submit" className="w-full bg-neon text-black font-bold uppercase py-4 rounded hover:bg-neon-hover transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

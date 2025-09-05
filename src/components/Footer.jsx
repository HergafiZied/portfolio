import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Zied Hergafi</h3>
            <p className="text-slate-300 leading-relaxed">
              Creative graphic designer specializing in Social Media design,
              visual communication, and 3D design solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/designs"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/3d"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                3D Work
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:hergafi.zied.official@gmail.com"
                className="p-2 bg-slate-700 rounded-full hover:bg-amber-500 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/zied-hergafi"
                className="p-2 bg-slate-700 rounded-full hover:bg-amber-500 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/zied_hergafi"
                className="p-2 bg-slate-700 rounded-full hover:bg-amber-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; 2025 Zied Hergafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
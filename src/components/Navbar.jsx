import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 z-50">
          <img src="/logo.png" alt="Fakhar Al Mas Logo" className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-xl shadow-sm border border-gray-100" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-xl md:text-2xl text-primary leading-none">Fakhar Al Mas</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mt-1 tracking-widest text-left">Technical Services in Dubai</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-base font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent border-b-2 border-accent pb-1' : 'text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* HAMBURGER BUTTON (MOBILE & TABLET) */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-12 h-12 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors shadow-sm focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="absolute block w-full h-1 bg-primary rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute block w-full h-1 bg-primary rounded-full top-[9px]"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="absolute block w-full h-1 bg-primary rounded-full top-[18px]"
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-x-0 top-0 pt-24 pb-10 bg-white/95 backdrop-blur-xl shadow-2xl z-40 border-b border-gray-100 origin-top overflow-y-auto max-h-screen"
          >
            <div className="flex flex-col px-6 gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-1 px-1">Navigation</span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-extrabold py-3 px-4 rounded-xl flex items-center justify-between transition-all ${location.pathname === link.path ? 'bg-primary text-white shadow-md' : 'text-primary hover:bg-gray-50'}`}
                    >
                      {link.name}
                      <span className="opacity-20 text-sm">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-1 px-1">Quick Services</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Electrical', slug: 'electrical' },
                    { name: 'AC Repair', slug: 'ac-repair' },
                    { name: 'Plumbing', slug: 'plumbing' },
                    { name: 'Painting', slug: 'painting' },
                  ].map((s, idx) => (
                    <motion.div
                      key={s.slug}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                    >
                      <Link
                        to={`/service/${s.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-accent hover:text-white transition-all shadow-sm"
                      >
                        <span className="font-bold text-sm">{s.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <Link to="/services" onClick={() => setIsOpen(false)} className="text-center font-bold text-accent py-4 mt-2">View All 10+ Services →</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
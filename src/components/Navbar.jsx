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
            className="text-primary hover:text-accent focus:outline-none p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden shadow-xl absolute w-full left-0 origin-top"
          >
            <div className="flex flex-col px-6 py-6 gap-6 max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-primary hover:text-accent'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Our Services</span>
                <Link to="/service/electrical" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Electrical Services</Link>
                <Link to="/service/ac-repair" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">AC Repair & Installations</Link>
                <Link to="/service/plumbing" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Plumbing Services</Link>
                <Link to="/service/painting" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Painting Services</Link>
                <Link to="/service/tiles-fixing" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Tiles Fixing Services</Link>
                <Link to="/service/carpenter" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Carpenter Services</Link>
                <Link to="/service/furniture-polish" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Furniture Polish</Link>
                <Link to="/service/gypsum-work" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Gypsum Works</Link>
                <Link to="/service/handyman" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">Handyman Services</Link>
                <Link to="/service/false-ceiling" onClick={() => setIsOpen(false)} className="text-secondary font-medium hover:text-accent transition-colors">False Ceiling Services</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
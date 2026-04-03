import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Fakhar Al Mas Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-xl p-1" />
            <span className="font-bold text-2xl md:text-3xl text-white">Fakhar Al Mas</span>
          </div>
          <p className="text-gray-300 text-sm md:text-base">Professional home maintenance &amp; repair services across Dubai. 24/7 emergency support.</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg md:text-xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent">All Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg md:text-xl mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li><Link to="/service/electrical" className="hover:text-accent">Electrical Services</Link></li>
            <li><Link to="/service/ac-repair" className="hover:text-accent">AC Repair</Link></li>
            <li><Link to="/service/plumbing" className="hover:text-accent">Plumbing</Link></li>
            <li><Link to="/service/painting" className="hover:text-accent">Painting</Link></li>
            <li><Link to="/service/tiles-fixing" className="hover:text-accent">Tiles Fixing</Link></li>
            <li><Link to="/service/carpenter" className="hover:text-accent">Carpenter Works</Link></li>
            <li><Link to="/service/furniture-polish" className="hover:text-accent">Furniture Polish</Link></li>
            <li><Link to="/service/gypsum-work" className="hover:text-accent">Gypsum Works</Link></li>
            <li><Link to="/service/handyman" className="hover:text-accent">Handyman Services</Link></li>
            <li><Link to="/service/false-ceiling" className="hover:text-accent">False Ceiling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg md:text-xl mb-4">Contact</h4>
          <p className="text-gray-300 mb-2 text-sm md:text-base">📍 Dubai, UAE</p>
          <p className="text-gray-300 mb-2 text-sm md:text-base">📞 +9752993382</p>
          <p className="text-gray-300 mb-6 text-sm md:text-base">✉️ your-email@gmail.com</p>
          <a href="https://wa.me/9752993382" target="_blank" className="inline-flex bg-white/10 text-white border border-accent/50 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold items-center gap-3 hover:bg-accent transition-colors shadow-md">
            💬 Chat on WhatsApp Now
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-12 text-xs md:text-sm">
        © 2026 Fakhar Al Mas Dubai. All Rights Reserved.
      </div>
    </footer>
  );
}
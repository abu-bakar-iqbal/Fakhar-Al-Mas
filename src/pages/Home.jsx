import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const topServices = [
  { name: 'Electrical Services', slug: 'electrical', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=800' },
  { name: 'AC Repair & Installations', slug: 'ac-repair', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=60&w=800' },
  { name: 'Plumbing Services', slug: 'plumbing', img: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=60&w=800' },
  { name: 'Tiles Fixing', slug: 'tiles-fixing', img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=60&w=800' },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* HERO */}
      <div className="relative min-h-[85vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=60&w=800')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full text-white text-center md:text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
          >
            Expert Home Services<br className="hidden md:block" /> in Dubai
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 text-gray-200 fade-in"
          >
            AC Repair • Plumbing • Electrical • Painting • Floor Cleaning • Interior &amp; Exterior Works
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
          >
            <Link to="/services" className="w-full sm:w-auto text-center bg-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-600 shadow-lg transition-transform hover:scale-105 active:scale-95">Browse All Services</Link>
            <a href="https://wa.me/9752993382" target="_blank" className="w-full sm:w-auto text-center border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-transform hover:scale-105 active:scale-95">WhatsApp Quote</a>
          </motion.div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
        >
          Our Professional Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/service/${service.slug}`} className="block h-full bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <img loading="lazy" src={service.img} alt={service.name} className="w-full h-48 md:h-52 object-cover hover:scale-105 transition duration-500" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Link to="/services" className="inline-block bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-opacity-90 shadow-lg transition-transform hover:-translate-y-1">View All Services →</Link>
        </div>
      </div>

      {/* WHY US */}
      <div className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            Why Dubai Trusts Fakhar Al Mas
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-lg font-medium">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/10 p-6 rounded-2xl">✅ 24/7 Emergency</motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/10 p-6 rounded-2xl">✅ Certified Techs</motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white/10 p-6 rounded-2xl">✅ 100% Satisfaction</motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
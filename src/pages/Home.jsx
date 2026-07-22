import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1632733711679-5292d60638d5?auto=format&fit=crop&q=80&w=1200',
    title: 'Smart Climate',
    accent: 'Solutions',
    sub: 'Expert AC Repair • Maintenance • Installations'
  },
  {
    img: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200',
    title: 'Precision Power',
    accent: 'Systems',
    sub: 'Licensed Electrical Support • 24/7 Priority Support'
  },
  {
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Water',
    accent: 'Excellence',
    sub: 'Master Plumbing • Leak Detection • Villa Specialists'
  },
  {
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200',
    title: 'Aesthetic Surface',
    accent: 'Design',
    sub: 'Luxury Finishes • Professional Painting • Interior Coatings'
  }
];

const topServices = [
  { name: 'Electrical Services', slug: 'electrical', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
  { name: 'AC Repair & Installations', slug: 'ac-repair', img: 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop' },
  { name: 'Plumbing Services', slug: 'plumbing', img: 'https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=1170&auto=format&fit=crop' },
  { name: 'Painting Services', slug: 'painting', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Tiles Fixing', slug: 'tiles-fixing', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800' },
  { name: 'Carpenter Services', slug: 'carpenter', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800' },
  { name: 'Furniture Polish', slug: 'furniture-polish', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800' },
  { name: 'Gypsum Work', slug: 'gypsum-work', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Handyman Services', slug: 'handyman', img: 'https://plus.unsplash.com/premium_photo-1664188701980-8798e169542e?auto=format&fit=crop&q=80&w=1200' },
  { name: 'False Ceiling', slug: 'false-ceiling', img: 'https://plus.unsplash.com/premium_photo-1661443657373-10d6e6d1d739?auto=format&fit=crop&q=80&w=1200' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Helmet>
        <title>Fakhar Al Mas | Premium Home Maintenance Dubai</title>
        <meta name="description" content="Discover professional villa and apartment maintenance in Dubai. All-in-one provider for AC, Plumbing, Electrical, and Painting." />
      </Helmet>

      {/* HERO SECTION WITH DYNAMIC VIBE TEXT */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-black">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].img}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full text-white">
          <div className="max-w-4xl">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-accent font-black tracking-widest uppercase mb-4 text-xs md:text-lg border-l-4 border-accent pl-4">
                  Fakhar Al Mas • Premium Services
                </h2>
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-black leading-tight mb-6 tracking-tighter">
                  {heroSlides[currentSlide].title} <br />
                  <span className="text-accent">{heroSlides[currentSlide].accent}</span>
                </h1>
                <p className="text-sm md:text-2xl text-gray-300 font-light mb-10 max-w-2xl tracking-wide uppercase">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services" className="group relative overflow-hidden bg-accent text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300">
                <span className="relative z-10 text-white">Our 10+ Services</span>
              </Link>
              <a href="tel:+971529933482" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-sm md:text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
                Call +971 52 993 3482
              </a>
            </motion.div>
          </div>
        </div>

        {/* ANIMATED ACCENT ELEMENT */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"
        />
      </section>

      {/* SERVICES GRID SECTION */}
      <div className="bg-gray-50 py-12 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 md:mb-24"
          >
            <h2 className="text-accent font-bold tracking-widest text-xs md:text-base uppercase mb-2">Fast & Reliable</h2>
            <h3 className="text-2xl md:text-6xl font-black text-primary leading-tight">
              Professional Services <br className="hidden md:block" /> At Your Doorstep
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {topServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/service/${service.slug}`} className="block h-full group">
                  <div className="bg-white h-full rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden flex flex-col items-center">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        loading="lazy"
                        src={service.img}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-center items-start text-left w-full relative">
                      <div className="relative z-10">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-1">
                          {service.name}
                        </h3>
                        <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] transition-all">
                          Explore Now
                        </span>
                      </div>

                      {/* COMPACT BOTTOM-RIGHT ACTION ELEMENT */}
                      <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_18px_rgba(59,130,246,0.5)] transition-all relative overflow-hidden"
                        >
                          <span className="text-white text-lg md:text-xl font-black">→</span>
                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute inset-0 bg-white rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-white py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Completed Projects', value: '15,000+' },
              { label: 'Happy Clients', value: '12,000+' },
              { label: 'Experienced Staff', value: '150+' },
              { label: 'Years in Service', value: '10+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sameer Ahmed', role: 'Villa Owner', text: 'Best AC repair service in Dubai. They fixed my central cooling within 2 hours on a Friday night.' },
              { name: 'Sarah Wilson', role: 'Business Manager', text: 'Highly professional electrical work. Their safety inspection was thorough and cost-effective.' },
              { name: 'Rahul Khanna', role: 'Apartment Tenant', text: 'Excellent plumbing service. No hidden charges and very clean work. Highly recommended!' },
            ].map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{rev.text}"</p>
                <div className="font-bold text-primary">{rev.name}</div>
                <div className="text-sm text-accent">{rev.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US / CHECKPOINTS */}
      <div className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Why Dubai Trusts Fakhar Al Mas
            </motion.h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Providing world-class maintenance services with legal compliance and professional integrity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Licensed & Insured', desc: 'Fully approved by Dubai Municipality and relevant authorities.' },
              { title: '24/7 Availability', desc: 'Emergency response team ready for any crisis across Dubai.' },
              { title: 'Professional Staff', desc: 'Certified technicians with minimum 5 years of local experience.' },
              { title: 'Quality Guarantee', desc: 'We offer 100% satisfaction guarantee on all service parts.' },
              { title: 'Zero Hidden Costs', desc: 'Transparent pricing with detailed invoices provided upfront.' },
              { title: 'Safety First', desc: 'Strict adherence to health and safety protocols (HSE) on-site.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="text-accent text-2xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
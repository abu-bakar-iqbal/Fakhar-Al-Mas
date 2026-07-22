import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const services = [
  {
    "name": "Electrical Services",
    "slug": "electrical",
    "img": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "AC Repair and Installations",
    "slug": "ac-repair",
    "img": "https://images.unsplash.com/photo-1581092921461-7d15cb550ca1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Plumbing Services",
    "slug": "plumbing",
    "img": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Painting Services",
    "slug": "painting",
    "img": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Tiles Fixing Services",
    "slug": "tiles-fixing",
    "img": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Carpenter Services",
    "slug": "carpenter",
    "img": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Furniture Polish Services",
    "slug": "furniture-polish",
    "img": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Gypsum Work Services",
    "slug": "gypsum-work",
    "img": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "Handyman Services",
    "slug": "handyman",
    "img": "https://plus.unsplash.com/premium_photo-1664188701980-8798e169542e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    "name": "False Ceiling Services",
    "slug": "false-ceiling",
    "img": "https://plus.unsplash.com/premium_photo-1661443657373-10d6e6d1d739?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <Helmet>
        <title>Professional Home Maintenance Services in Dubai | Fakhar Al Mas</title>
        <meta name="description" content="Comprehensive home maintenance services in Dubai including AC repair, electrical, plumbing, painting, carpentry, and more. Quality guaranteed." />
        <meta name="keywords" content="Dubai home maintenance, AC repair Dubai, plumber Dubai, electrician Dubai, painting services Dubai" />
      </Helmet>

      <motion.h1 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary"
      >
        Our Services in Dubai
      </motion.h1>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-8 md:mb-12">Professional home maintenance across all areas of Dubai</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, idx) => (
          <motion.div 
            key={s.slug} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={'/service/' + s.slug} className="group block h-full">
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img loading="lazy" src={s.img} alt={s.name + ' Dubai'} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-4">{s.name}</h3>
                  <p className="text-accent font-bold mt-auto flex items-center gap-2">View Sub Services <span className="group-hover:translate-x-1 transition-transform">→</span></p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    "name": "Electrical Services",
    "slug": "electrical",
    "img": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "AC Repair and Installations",
    "slug": "ac-repair",
    "img": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Plumbing Services",
    "slug": "plumbing",
    "img": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Painting Services",
    "slug": "painting",
    "img": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Tiles Fixing Services",
    "slug": "tiles-fixing",
    "img": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Carpenter Services",
    "slug": "carpenter",
    "img": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Furniture Polish Services",
    "slug": "furniture-polish",
    "img": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Gypsum Work Services",
    "slug": "gypsum-work",
    "img": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "Handyman Services",
    "slug": "handyman",
    "img": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=60&w=800"
  },
  {
    "name": "False Ceiling Services",
    "slug": "false-ceiling",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800"
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
      <motion.h1 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary"
      >
        Our Services
      </motion.h1>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-8 md:mb-12">Professional home maintenance across all of Dubai</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, idx) => (
          <motion.div 
            key={s.slug} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/service/${s.slug}`} className="group block h-full">
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <img loading="lazy" src={s.img} alt={s.name} className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">{s.name}</h3>
                  <p className="text-accent font-medium mt-4">View all sub-services →</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
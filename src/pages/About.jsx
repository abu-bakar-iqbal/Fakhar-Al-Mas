import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const stats = [
  { label: 'Successful Projects', value: '15,000+', color: 'text-accent' },
  { label: 'Happy Families', value: '12,000+', color: 'text-accent' },
  { label: 'Skilled Technicians', value: '150+', color: 'text-accent' },
  { label: 'Years Experience', value: '10+', color: 'text-accent' },
];

const missionPoints = [
  { title: "Our Mission", text: "To provide every home in Dubai with immediate, transparent, and high-quality maintenance solutions that ensure safety and comfort for all families." },
  { title: "Our Vision", text: "To be the most trusted name in Dubai's technical services industry by maintaining 100% customer satisfaction and professional excellence." }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-24"
    >
      <Helmet>
        <title>About Fakhar Al Mas | Professional Dubai Home Maintenance Company</title>
        <meta name="description" content="Learn more about Fakhar Al Mas, your trusted partner for home maintenance in Dubai. Licensed, insured, and dedicated to quality service since 2018." />
      </Helmet>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] md:text-sm mb-4 block">Our Legacy in Dubai</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 text-primary leading-tight">
            Premium Technical Solutions
          </h1>
          <p className="text-base md:text-xl leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Founded on the pillars of **Safety, Quality, and Trust**, Fakhar Al Mas has emerged as Dubai's most reliable technical service partner. We specialize in comprehensive maintenance for residential villas and luxury apartments.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="bg-primary/5 px-5 py-3 rounded-xl border border-primary/10">
              <span className="block font-bold text-primary text-lg">DED Licensed</span>
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Trade Approved</span>
            </div>
            <div className="bg-primary/5 px-5 py-3 rounded-xl border border-primary/10">
              <span className="block font-bold text-primary text-lg">24/7 Support</span>
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Always Ready</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-2 md:px-0 order-1 lg:order-2"
        >
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
              alt="Technical Work in Dubai"
              className="rounded-[2rem] md:rounded-[3rem] shadow-2xl w-full h-[300px] md:h-[500px] object-cover"
            />
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-2 md:-bottom-8 md:-left-8 bg-accent text-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl"
            >
              <span className="text-3xl md:text-5xl font-black block leading-none">10+</span>
              <span className="font-bold uppercase tracking-wider text-[10px] md:text-sm">Years in Dubai</span>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      {/* Stats/Tasks Completion Grid */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-white mb-16 md:mb-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Global Standards,<br className="md:hidden" /> Local Expertise</h2>
          <p className="text-gray-300 text-sm md:text-lg">Delivering precision engineering and maintenance services to thousands of clients monthly.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl md:text-5xl font-black text-accent mb-1 md:mb-2">{stat.value}</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-[8px] md:text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {missionPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
            <h3 className="text-xl md:text-3xl font-black text-primary mb-4 md:mb-6">{point.title}</h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
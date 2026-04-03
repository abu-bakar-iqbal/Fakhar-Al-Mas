import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-primary">About Fakhar Al Mas Dubai</h1>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">We are a Dubai-based professional home services company owned and operated with full UAE trade license. With over 8 years of experience serving villas and apartments across Dubai, we specialize in fast, reliable, and affordable solutions for all your home maintenance needs.</p>
    </motion.div>
  );
}
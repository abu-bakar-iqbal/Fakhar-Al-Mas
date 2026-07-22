import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Fakhar Al Mas! 
I need a service quote:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Service: ${formData.service}
- Requirement: ${formData.message}`;

    const whatsappUrl = `https://wa.me/971529933482?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setStatus('✅ Redirecting you to WhatsApp...');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <Helmet>
        <title>Contact Fakhar Al Mas | Get a Quote for Home Maintenance in Dubai</title>
        <meta name="description" content="Contact Fakhar Al Mas for a free quote on home maintenance services in Dubai. Contact us for AC repair, plumbing, electrical, and more. 24/7 WhatsApp support." />
      </Helmet>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-primary">Book Your Service Today</h1>
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-2xl md:rounded-3xl p-6 md:p-10 space-y-6 md:space-y-8"
      >
        <input type="text" placeholder="Full Name" className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border text-sm md:text-base focus:ring-2 focus:ring-accent outline-none transition" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input type="tel" placeholder="Phone Number (with WhatsApp)" className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border text-sm md:text-base focus:ring-2 focus:ring-accent outline-none transition" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border text-sm md:text-base focus:ring-2 focus:ring-accent outline-none transition" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <select className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border text-sm md:text-base focus:ring-2 focus:ring-accent outline-none transition" value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
          <option value="">Select Service</option>
          <option value="Electrical Services">Electrical Services</option>
          <option value="AC Repair and Installations">AC Repair and Installations</option>
          <option value="Plumbing Services">Plumbing Services</option>
          <option value="Painting Services">Painting Services</option>
          <option value="Tiles Fixing Services">Tiles Fixing Services</option>
          <option value="Carpenter Services">Carpenter Services</option>
          <option value="Furniture Polish Services">Furniture Polish Services</option>
          <option value="Gypsum Work Services">Gypsum Work Services</option>
          <option value="Handyman Services">Handyman Services</option>
          <option value="False Ceiling Services">False Ceiling Services</option>
        </select>
        <textarea placeholder="Tell us more about your requirement..." className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border h-32 md:h-40 text-sm md:text-base focus:ring-2 focus:ring-accent outline-none transition" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>

        <button type="submit" className="w-full bg-accent text-white py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-600 shadow-md transition-transform hover:scale-105 active:scale-95">Submit &amp; Get Callback</button>
      </motion.form>
      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 md:mt-8 text-lg md:text-xl font-medium"
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
}
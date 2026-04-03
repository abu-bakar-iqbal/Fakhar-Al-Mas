const fs = require('fs');

const servicesData = {
    'electrical': {
        name: 'Electrical Services',
        desc: 'Safe and licensed electrical repairs, installations and upgrades for your property.',
        heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Electrical Installation', desc: 'Complete setups for wiring, sockets, lighting, and major appliances.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=60&w=800' },
            { title: 'Electric Repair', desc: 'Fast fixes for short circuits, tripping breakers, and faulty components.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=800' },
            { title: 'Safety Inspections', desc: 'Comprehensive safety tests to prevent fire hazards and ensure compliance.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=60&w=800' },
            { title: 'Emergency Services', desc: '24/7 rapid response for sudden power outages and dangerous electrical issues.', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=60&w=800' },
            { title: 'Smart Home Wiring', desc: 'Automation, CCTV, and smart switch panel wiring configuration.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=60&w=800' },
            { title: 'Electric Shock and Panel Upgrade', desc: 'Resolving shock leakages and upgrading distribution boards (DB).', image: 'https://images.unsplash.com/photo-1614083656113-6d0426f588aa?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'ac-repair': {
        name: 'AC Repair and Installations',
        desc: 'Professional AC maintenance, repair, and complete installations in Dubai.',
        heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Home AC Repair', desc: 'Expert diagnosis and repair for window, split, and central home AC units.', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=60&w=800' },
            { title: 'Commercial AC Installation', desc: 'Large scale HVAC design and installation for commercial spaces and offices.', image: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=60&w=800' },
            { title: 'AC Maintenance', desc: 'Predictive maintenance packages to increase the lifespan of your AC systems.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=800' },
            { title: 'Gas Refilling', desc: 'Proper refrigerant recharge to restore full cooling capacity.', image: 'https://images.unsplash.com/photo-1631557008779-7dddbfac23da?auto=format&fit=crop&q=60&w=800' },
            { title: 'AC Duct Cleaning', desc: 'Advanced duct cleaning to improve indoor air quality and remove dust/mold.', image: 'https://images.unsplash.com/photo-1545620958-3d120a174dfb?auto=format&fit=crop&q=60&w=800' },
            { title: 'Split AC Installation', desc: 'Safe, secure, and clean installation of split air conditioners.', image: 'https://images.unsplash.com/photo-1585822765363-2287c2fb2bf3?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'plumbing': {
        name: 'Plumbing Services',
        desc: 'Reliable plumbing solutions for leaks, blockages, installations and water system repairs.',
        heroImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Pipe repair and installations', desc: 'New pipe layouts, pipe replacements, and hidden pipe burst repairs.', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=60&w=800' },
            { title: 'Drain cleaning services', desc: 'Clearing choked kitchen sinks, bathroom drains, and main sewer lines.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=60&w=800' },
            { title: 'Leak detection and repair', desc: 'Non-destructive electronic acoustic leak detection and patching.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=60&w=800' },
            { title: 'Water heater repair and installations', desc: 'Thermostat replacement, tank repairs, and installing new boilers.', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=60&w=800' },
            { title: 'Toilet repair and installations', desc: 'Fixing flush tanks, bidet sprays, floor leaks, and installing new bowls.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=60&w=800' },
            { title: 'Faucet & fixture installation', desc: 'Mixers, showers, washbasins, and luxury bathroom fitting installation.', image: 'https://images.unsplash.com/photo-1585704033320-c11f71a78af0?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'painting': {
        name: 'Painting Services',
        desc: 'Premium interior and exterior painting with premium paints and professional finish.',
        heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Interior painting services', desc: 'Dust-free, premium paint applications for bedrooms and living rooms.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Exterior painting services', desc: 'Durable, weather-resistant paints designed to withstand high temperatures.', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2cebc?auto=format&fit=crop&q=60&w=800' },
            { title: 'Commercial painting services', desc: 'Timely and professional painting tailored for offices, shops, and warehouses.', image: 'https://images.unsplash.com/photo-1534065476313-8d070b4a4cb3?auto=format&fit=crop&q=60&w=800' },
            { title: 'Wall texture painting', desc: 'High-end decorative finishes, stucco, and luxurious accent wall textures.', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=60&w=800' },
            { title: 'Wood staining & varnishing', desc: 'Protective staining for wooden doors, cabinets, and pergolas.', image: 'https://images.unsplash.com/photo-1581428982868-e410dd4bfd58?auto=format&fit=crop&q=60&w=800' },
            { title: 'Waterproof & protective coating', desc: 'Roofing sealants, epoxy, and advanced coatings for ultimate protection.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'tiles-fixing': {
        name: 'Tiles Fixing Services',
        desc: 'Expert tile installation and repair for floors, walls, and decorative spaces.',
        heroImage: 'https://images.unsplash.com/photo-1523413555809-0fbac94a0808?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Tile installation', desc: 'Laying ceramic, porcelain, mosaic, and natural stone tiles securely.', image: 'https://images.unsplash.com/photo-1523413555809-0fbac94a0808?auto=format&fit=crop&q=60&w=800' },
            { title: 'Tile repair & replacement', desc: 'Fixing cracked, chipped, or hollowing tiles flawlessly.', image: 'https://images.unsplash.com/photo-1510006764491-a1288ed3b7cb?auto=format&fit=crop&q=60&w=800' },
            { title: 'Bathroom tiling', desc: 'Complete bathroom waterproof tiling and shower enclosures.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=60&w=800' },
            { title: 'Kitchen backsplash', desc: 'Adding elegant backsplash designs matching your kitchen countertops.', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=60&w=800' },
            { title: 'Grouting & sealing', desc: 'Whitening and sealing grout lines to prevent water seepage and mold.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356bfd?auto=format&fit=crop&q=60&w=800' },
            { title: 'Floor tile installation', desc: 'Large format floor tiling ensuring perfectly leveled ground.', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'carpenter': {
        name: 'Carpenter Services',
        desc: 'Professional carpentry, bespoke woodwork, and furniture repairs.',
        heroImage: 'https://images.unsplash.com/photo-1572043690412-1678f134ee0b?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Furniture repair', desc: 'Fixing broken chairs, tables, beds, and sagging sofa frames.', image: 'https://images.unsplash.com/photo-1595147395015-ab28a2a7a4cb?auto=format&fit=crop&q=60&w=800' },
            { title: 'Custom furniture', desc: 'Designing and building bespoke furniture tailored to your space.', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=60&w=800' },
            { title: 'Build in solutions', desc: 'Built-in wardrobes, floating shelves, and storage cabinets.', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=60&w=800' },
            { title: 'Door & window work', desc: 'Hanging doors, fixing noisy hinges, lock replacements, and window frames.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Kitchen cabinet installation', desc: 'Assembling and mounting modular or custom kitchen cabinetry.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Flooring & decking', desc: 'Laying hardwood, laminate flooring, and outdoor wooden decking.', image: 'https://images.unsplash.com/photo-1581428982868-e410dd4bfd58?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'furniture-polish': {
        name: 'Furniture Polish Services',
        desc: 'Restoring the shine and prolonging the life of your precious furniture.',
        heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Wood furniture polish', desc: 'Deep cleaning, waxing, and specialized polishing for wooden items.', image: 'https://images.unsplash.com/photo-1595147395015-ab28a2a7a4cb?auto=format&fit=crop&q=60&w=800' },
            { title: 'Antique furniture restoration', desc: 'Delicate handling and restoration of highly valuable antique pieces.', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=60&w=800' },
            { title: 'Office furniture polish', desc: 'Bulk desk polishing and boardroom table refinishing for businesses.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=60&w=800' },
            { title: 'Leather furniture care', desc: 'Conditioning, polishing, and crack-prevention for leather sofas.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=800' },
            { title: 'Metal furniture polish', desc: 'Rust removal, coating, and shining for indoor and outdoor metal seats.', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=60&w=800' },
            { title: 'Furniture repay & polish', desc: 'Combining structural repairs with a brand-new polished finish.', image: 'https://images.unsplash.com/photo-1581428982868-e410dd4bfd58?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'gypsum-work': {
        name: 'Gypsum Work Services',
        desc: 'Expert gypsum partitioning and ceiling installations for residential and commercial spaces.',
        heroImage: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Gypsum partition walls', desc: 'Erecting high-quality room dividers for office and apartment spaces.', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&q=60&w=800' },
            { title: 'Gypsum false ceilings', desc: 'Modern plain or multi-level gypsum ceiling execution with lighting integration.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Gypsum board installations', desc: 'Drywall setups for structural framing and interior finishes.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=800' },
            { title: 'Gypsum repair & maintenance', desc: 'Patching holes, water damage, and repainting damaged gypsum.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=60&w=800' },
            { title: 'Decorative gypsum work', desc: 'Cornices, moldings, ceiling roses, and luxury ornamental detailing.', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=60&w=800' },
            { title: 'Gypsun soundproofing', desc: 'Installing acoustic gypsum boards to heavily minimize noise transfer.', image: 'https://images.unsplash.com/photo-1595147395015-ab28a2a7a4cb?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'handyman': {
        name: 'Handyman Services',
        desc: 'All-around fixes, mounts, and general maintenance for your home.',
        heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Furniture assembly', desc: 'Quick and sturdy assembly of IKEA, Wayfair, and local flat-pack furniture.', image: 'https://images.unsplash.com/photo-1581428982868-e410dd4bfd58?auto=format&fit=crop&q=60&w=800' },
            { title: 'Plumbing repair', desc: 'Minor fixes for dripping taps, sluggish drains, and changing shower heads.', image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=60&w=800' },
            { title: 'Electrical fixes', desc: 'Swapping out light bulbs, fixing loose sockets, and cord repairs.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=60&w=800' },
            { title: 'Door and lock repairs', desc: 'Resolving jammed doors, changing cylinder locks, and installing smart locks.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Wall painting & parching', desc: 'Filling wall cracks, drill holes, and doing spot painting.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=800' },
            { title: 'General maintenance', desc: 'Hanging pictures, mounting TVs, installing curtains/blinds, and moving items.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=60&w=800' }
        ]
    },
    'false-ceiling': {
        name: 'False Ceiling Services',
        desc: 'High-quality false ceiling installations tailored for elegance and utility.',
        heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800',
        subclasses: [
            { title: 'Gypsun false ceiling', desc: 'Durable, seamless gypsum ceiling setups suitable for any room.', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&q=60&w=800' },
            { title: 'POP false ceiling', desc: 'Plaster of Paris ceilings offering highly intricate and stylized finishes.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=800' },
            { title: 'Grid false ceiling', desc: 'Acoustic 60x60 grid ceilings widely used for commercial and office spaces.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=60&w=800' },
            { title: 'Wooden false ceiling', desc: 'Warm, aesthetic wooden slats or panels for luxury interiors.', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=60&w=800' },
            { title: 'Metal false ceiling', desc: 'Sleek, highly durable metallic ceilings often used in modern architectures.', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=60&w=800' },
            { title: 'Designer false ceiling', desc: 'Custom, multi-layer designs with hidden strip lights and coves.', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=60&w=800' }
        ]
    }
};

const serviceDetailContent = `import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const allServices = ${JSON.stringify(servicesData, null, 2)};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = allServices[slug];

  if (!service) return <div className="text-center py-20 text-2xl md:text-3xl">Service not found</div>;

  return (
    <motion.div 
       initial={{ opacity: 0 }} 
       animate={{ opacity: 1 }} 
       exit={{ opacity: 0 }}
       className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        src={service.heroImage} 
        alt={service.name} 
        className="w-full h-64 md:h-96 object-cover rounded-2xl md:rounded-3xl mb-8 md:mb-10 shadow-xl" 
      />
      <motion.h1 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold mb-4 text-primary"
      >
        {service.name}
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-600 mb-12 md:mb-16"
      >
        {service.desc}
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {service.subclasses.map((sub, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white hover:bg-blue-50 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <img loading="lazy" src={sub.image} alt={sub.title} className="w-full h-48 md:h-64 object-cover" />
            <div className="p-6 md:p-8 flex flex-col justify-between h-[100%] md:h-[calc(100%-16rem)]">
              <div>
                <h3 className="text-xl md:text-3xl font-semibold mb-3 text-primary">{sub.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{sub.desc}</p>
              </div>
              <button
                onClick={() => window.open(\`https://wa.me/9752993382?text=I%20want%20\${encodeURIComponent(sub.title)}%20service\`, '_blank')}
                className="mt-6 md:mt-8 w-full bg-accent text-white py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg hover:bg-blue-600 shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                Make Deal
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 text-center"
      >
        <Link to="/contact" className="inline-block w-full sm:w-auto bg-primary text-white px-8 md:px-16 py-4 md:py-6 rounded-full text-lg md:text-2xl font-semibold hover:bg-opacity-90 shadow-xl transition-transform hover:scale-105 active:scale-95">
          Get Full Quote or Book Appointment
        </Link>
      </motion.div>
    </motion.div>
  );
}`;

const servicesList = Object.keys(servicesData).map(key => ({
    name: servicesData[key].name,
    slug: key,
    img: servicesData[key].heroImage
}));

const servicesContent = `import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = ${JSON.stringify(servicesList, null, 2)};

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
            <Link to={\`/service/\${s.slug}\`} className="group block h-full">
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
}`;

fs.writeFileSync('src/pages/ServiceDetail.jsx', serviceDetailContent);
fs.writeFileSync('src/pages/Services.jsx', servicesContent);
console.log('Successfully generated Services.jsx and ServiceDetail.jsx');

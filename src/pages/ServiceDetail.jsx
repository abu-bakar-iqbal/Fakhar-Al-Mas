import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

export const allServices = {
  "electrical": {
    "name": "Electrical Services",
    "desc": "Safe and licensed electrical repairs, installations and upgrades for your property in Dubai.",
    "heroImage": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Contact us for assessment",
      "On-site technical inspection",
      "Issue diagnosis & safe isolation",
      "Professional repair/installation",
      "Quality testing & safety check"
    ],
    "subclasses": [
      {
        "title": "Electrical Installation",
        "initialLikes": 425,
        "desc": "Complete setups for wiring, sockets, lighting, and major appliances.",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Electric Repair",
        "initialLikes": 382,
        "desc": "Fast fixes for short circuits, tripping breakers, and faulty components.",
        "image": "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Safety Inspections",
        "initialLikes": 294,
        "desc": "Comprehensive safety tests to prevent fire hazards and ensure compliance.",
        "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Emergency Services",
        "initialLikes": 512,
        "desc": "24/7 rapid response for sudden power outages and dangerous electrical issues.",
        "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Smart Home Wiring",
        "initialLikes": 301,
        "desc": "Automation, CCTV, and smart switch panel wiring configuration.",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Electric Shock and Panel Upgrade",
        "initialLikes": 256,
        "desc": "Resolving shock leakages and upgrading distribution boards (DB) correctly.",
        "image": "https://images.unsplash.com/photo-1621508650111-739327918501?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "ac-repair": {
    "name": "AC Repair and Installations",
    "desc": "Professional AC maintenance, repair, and complete installations in Dubai. Specialized in chilled water and split systems.",
    "heroImage": "https://images.unsplash.com/photo-1581092921461-7d15cb550ca1?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Schedule a visit",
      "Filter & coil inspection",
      "Gas pressure & leak check",
      "Precision repair or cleaning",
      "Final cooling performance test"
    ],
    "subclasses": [
      {
        "title": "Home AC Repair",
        "initialLikes": 684,
        "desc": "Expert diagnosis and repair for window, split, and central home AC units.",
        "image": "https://images.unsplash.com/photo-1413806151398-c4585516e637?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Commercial AC Installation",
        "initialLikes": 432,
        "desc": "Large scale HVAC design and installation for commercial spaces and offices.",
        "image": "https://images.unsplash.com/photo-1504384764125-c13cf37f1981?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "AC Maintenance",
        "initialLikes": 521,
        "desc": "Predictive maintenance packages to increase the lifespan of your AC systems.",
        "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Gas Refilling",
        "initialLikes": 345,
        "desc": "Proper refrigerant recharge (R22/R410A) to restore full cooling capacity.",
        "image": "https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "AC Duct Cleaning",
        "initialLikes": 478,
        "desc": "Advanced duct cleaning to improve indoor air quality and remove dust/mold.",
        "image": "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Split AC Installation",
        "initialLikes": 395,
        "desc": "Safe, secure, and clean installation of split air conditioners.",
        "image": "https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "plumbing": {
    "name": "Plumbing Services",
    "desc": "Reliable plumbing solutions for leaks, blockages, and installations in Dubai.",
    "heroImage": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Analyze the leak or blockage",
      "Turn off main water supply",
      "Specialized tool application",
      "Parts replacement or clearing",
      "Pressure test & leak confirmation"
    ],
    "subclasses": [
      {
        "title": "Pipe repair and installations",
        "initialLikes": 312,
        "desc": "New pipe layouts, pipe replacements, and hidden pipe burst repairs.",
        "image": "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Drain cleaning services",
        "initialLikes": 489,
        "desc": "Clearing choked kitchen sinks, bathroom drains, and main sewer lines.",
        "image": "https://images.unsplash.com/photo-1505773229415-9ad84e06bc8c?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Leak detection and repair",
        "initialLikes": 367,
        "desc": "Non-destructive electronic acoustic leak detection and patching.",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Water heater repair and installations",
        "initialLikes": 423,
        "desc": "Thermostat replacement, tank repairs, and installing new boilers.",
        "image": "https://images.unsplash.com/photo-1621253223113-5add82337d99?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Toilet repair and installations",
        "initialLikes": 289,
        "desc": "Fixing flush tanks, bidet sprays, floor leaks, and installing new bowls.",
        "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Faucet & fixture installation",
        "initialLikes": 341,
        "desc": "Mixers, showers, washbasins, and luxury bathroom fitting installation.",
        "image": "https://images.unsplash.com/photo-1589332560862-243e8ea06222?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "painting": {
    "name": "Painting Services",
    "desc": "Premium interior and exterior villa painting in Dubai. High-quality finishes.",
    "heroImage": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Furniture protection covering",
      "Wall surface preparation (Sanding)",
      "Cracks & holes filling",
      "Primer application",
      "Final double-coat painting"
    ],
    "subclasses": [
      {
        "title": "Interior painting services",
        "initialLikes": 567,
        "desc": "Dust-free, premium paint applications for bedrooms and living rooms.",
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Exterior painting services",
        "initialLikes": 421,
        "desc": "Durable, weather-resistant paints designed to withstand high temperatures.",
        "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Commercial painting services",
        "initialLikes": 324,
        "desc": "Timely and professional painting tailored for offices, shops, and warehouses.",
        "image": "https://images.unsplash.com/photo-1516962215378-7fa2e1372cf5?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Wall texture painting",
        "initialLikes": 398,
        "desc": "High-end decorative finishes, stucco, and luxurious accent wall textures.",
        "image": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Wood staining & varnishing",
        "initialLikes": 276,
        "desc": "Protective staining for wooden doors, cabinets, and pergolas.",
        "image": "https://images.unsplash.com/photo-1588644525994-f1738148b513?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Waterproof & protective coating",
        "initialLikes": 412,
        "desc": "Roofing sealants, epoxy, and advanced coatings for ultimate protection.",
        "image": "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "tiles-fixing": {
    "name": "Tiles Fixing Services",
    "desc": "Expert tile installation and repair in Dubai. Floors, walls, and decorative stone.",
    "heroImage": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Old tile removal (if needed)",
      "Surface leveling & waterproofing",
      "Adhesive application",
      "Precision tile laying",
      "Final grouting & cleaning"
    ],
    "subclasses": [
      {
        "title": "Tile installation",
        "initialLikes": 445,
        "desc": "Laying ceramic, porcelain, mosaic, and natural stone tiles securely.",
        "image": "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Tile repair & replacement",
        "initialLikes": 321,
        "desc": "Fixing cracked, chipped, or hollowing tiles flawlessly.",
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Bathroom tiling",
        "initialLikes": 589,
        "desc": "Complete bathroom waterproof tiling and shower enclosures.",
        "image": "https://images.unsplash.com/photo-1523413555809-0fb86866d860?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Kitchen backsplash",
        "initialLikes": 367,
        "desc": "Adding elegant backsplash designs matching your kitchen countertops.",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Grouting & sealing",
        "initialLikes": 412,
        "desc": "Whitening and sealing grout lines to prevent water seepage and mold.",
        "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200"
      },
      {
        "title": "Floor tile installation",
        "initialLikes": 378,
        "desc": "Large format floor tiling ensuring perfectly leveled ground.",
        "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "carpenter": {
    "name": "Carpenter Services",
    "desc": "Professional carpentry and bespoke woodwork in Dubai.",
    "heroImage": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Design requirements discussion",
      "Accurate measurements taking",
      "Material selection & sourcing",
      "Expert cutting & assembly",
      "Polishing or final installation"
    ],
    "subclasses": [
      {
        "title": "Furniture repair",
        "initialLikes": 298,
        "desc": "Fixing broken chairs, tables, beds, and sagging sofa frames.",
        "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Custom furniture",
        "initialLikes": 412,
        "desc": "Designing and building bespoke furniture tailored to your space.",
        "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Build in solutions",
        "initialLikes": 345,
        "desc": "Built-in wardrobes, floating shelves, and storage cabinets.",
        "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Door & window work",
        "initialLikes": 267,
        "desc": "Hanging doors, fixing noisy hinges, lock replacements, and window frames.",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Kitchen cabinet installation",
        "initialLikes": 389,
        "desc": "Assembling and mounting modular or custom kitchen cabinetry.",
        "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Flooring & decking",
        "initialLikes": 312,
        "desc": "Laying hardwood, laminate flooring, and outdoor wooden decking.",
        "image": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "furniture-polish": {
    "name": "Furniture Polish Services",
    "desc": "Professional furniture polishing and restoration in Dubai.",
    "heroImage": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Surface deep cleaning",
      "Sanding down old polish",
      "Stain application (optional)",
      "Premium wax or spray polish",
      "Buffing for mirror finish"
    ],
    "subclasses": [
      {
        "title": "Wood furniture polish",
        "initialLikes": 411,
        "desc": "Deep cleaning, waxing, and specialized polishing for wooden items.",
        "image": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Antique furniture restoration",
        "initialLikes": 324,
        "desc": "Delicate handling and restoration of highly valuable antique pieces.",
        "image": "https://plus.unsplash.com/premium_photo-1661609146110-85f838612ca4?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Office furniture polish",
        "initialLikes": 267,
        "desc": "Bulk desk polishing and boardroom table refinishing for businesses.",
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Leather furniture care",
        "initialLikes": 312,
        "desc": "Conditioning, polishing, and crack-prevention for leather sofas.",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Metal furniture polish",
        "initialLikes": 356,
        "desc": "Rust removal, coating, and shining for indoor and outdoor metal seats.",
        "image": "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Furniture repair & polish",
        "initialLikes": 389,
        "desc": "Combining structural repairs with a brand-new polished finish.",
        "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "gypsum-work": {
    "name": "Gypsum Work Services",
    "desc": "Expert gypsum partitioning and ceiling installations in Dubai.",
    "heroImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Framing layout design",
      "Metal track installation",
      "Gypsum board fixing",
      "Joint taping & putty application",
      "Sanding & final decoration"
    ],
    "subclasses": [
      {
        "title": "Gypsum partition walls",
        "initialLikes": 432,
        "desc": "Erecting high-quality room dividers for office and apartment spaces.",
        "image": "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Gypsum false ceilings",
        "initialLikes": 567,
        "desc": "Modern plain or multi-level gypsum ceiling execution with lighting integration.",
        "image": "https://images.unsplash.com/photo-1504384764125-c13cf37f1981?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Gypsum board installations",
        "initialLikes": 312,
        "desc": "Drywall setups for structural framing and interior finishes.",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Gypsum repair & maintenance",
        "initialLikes": 289,
        "desc": "Patching holes, water damage, and repainting damaged gypsum.",
        "image": "https://plus.unsplash.com/premium_photo-1664303102434-f67d4cccd60f?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Decorative gypsum work",
        "initialLikes": 345,
        "desc": "Cornices, moldings, ceiling roses, and luxury ornamental detailing.",
        "image": "https://plus.unsplash.com/premium_photo-1661443657373-10d6e6d1d739?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Gypsum soundproofing",
        "initialLikes": 312,
        "desc": "Installing acoustic gypsum boards to heavily minimize noise transfer.",
        "image": "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "handyman": {
    "name": "Handyman Services",
    "desc": "Professional handyman and general maintenance across Dubai.",
    "heroImage": "https://plus.unsplash.com/premium_photo-1664188701980-8798e169542e?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Tool set preparation",
      "Area protection covering",
      "Problem analysis & expert fix",
      "Structural integrity check",
      "Clean-up & hand-over"
    ],
    "subclasses": [
      {
        "title": "Furniture assembly",
        "initialLikes": 523,
        "desc": "Quick and sturdy assembly of IKEA, Wayfair, and local flat-pack furniture.",
        "image": "https://images.unsplash.com/photo-1581578731522-7b7547c87042?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Plumbing repair",
        "initialLikes": 341,
        "desc": "Minor fixes for dripping taps, sluggish drains, and changing shower heads.",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Electrical fixes",
        "initialLikes": 412,
        "desc": "Swapping out light bulbs, fixing loose sockets, and cord repairs.",
        "image": "https://images.unsplash.com/photo-1661718012626-d62f6b865672?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Door and lock repairs",
        "initialLikes": 367,
        "desc": "Resolving jammed doors, changing cylinder locks, and installing smart locks.",
        "image": "https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Wall painting & patches",
        "initialLikes": 289,
        "desc": "Filling wall cracks, drill holes, and doing spot painting.",
        "image": "https://plus.unsplash.com/premium_photo-1661609146110-85f838612ca4?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "General maintenance",
        "initialLikes": 456,
        "desc": "Hanging pictures, mounting TVs, installing curtains/blinds, and moving items.",
        "image": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "false-ceiling": {
    "name": "False Ceiling Services",
    "desc": "Aesthetic false ceiling design and installation in Dubai.",
    "heroImage": "https://plus.unsplash.com/premium_photo-1661443657373-10d6e6d1d739?auto=format&fit=crop&q=80&w=1200",
    "steps": [
      "Height & plan measurement",
      "Frame suspension system setup",
      "Panel insertion or fixing",
      "Lighting wire integration",
      "Final alignment & finishing"
    ],
    "subclasses": [
      {
        "title": "Gypsum false ceiling",
        "initialLikes": 534,
        "desc": "Durable, seamless gypsum ceiling setups suitable for any room.",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "POP false ceiling",
        "initialLikes": 421,
        "desc": "Plaster of Paris ceilings offering highly intricate and stylized finishes.",
        "image": "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Grid false ceiling",
        "initialLikes": 312,
        "desc": "Acoustic 60x60 grid ceilings widely used for commercial and office spaces.",
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Wooden false ceiling",
        "initialLikes": 456,
        "desc": "Warm, aesthetic wooden slats or panels for luxury interiors.",
        "image": "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Metal false ceiling",
        "initialLikes": 389,
        "desc": "Sleek, highly durable metallic ceilings often used in modern architectures.",
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
      },
      {
        "title": "Designer false ceiling",
        "initialLikes": 567,
        "desc": "Custom, multi-layer designs with hidden strip lights and coves.",
        "image": "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
};

function LikeButton({ serviceSlug, subTitle, initialLikes }) {
  const storageKey = `likes_${serviceSlug}_${subTitle}`;
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : initialLikes;
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`${storageKey}_clicked`) === 'true';
  });

  useEffect(() => {
    localStorage.setItem(storageKey, likes.toString());
    localStorage.setItem(`${storageKey}_clicked`, isLiked.toString());
  }, [likes, isLiked, storageKey]);

  const toggleLike = (e) => {
    e.preventDefault();
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button 
      onClick={toggleLike}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
        isLiked ? 'bg-red-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
       <svg className={`w-4 h-4 ${isLiked ? 'fill-current' : 'fill-none stroke-current'}`} strokeWidth="2" viewBox="0 0 24 24">
         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
       </svg>
       {likes}
    </button>
  );
}

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
      <Helmet>
        <title>{service.name} in Dubai | Fakhar Al Mas</title>
        <meta name="description" content={service.desc} />
        <meta name="keywords" content={`${service.name}, maintenance Dubai, home repair Dubai, ${service.name.split(' ')[0]} repair`} />
      </Helmet>
      
      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        src={service.heroImage} 
        alt={service.name + ' in Dubai'} 
        className="w-full h-64 md:h-[450px] object-cover rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-2xl" 
      />
      
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-16">
        <div className="lg:w-2/3">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight"
          >
            {service.name} in Dubai
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-gray-600 leading-relaxed"
          >
            {service.desc}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/3 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary flex items-center gap-2">
            <span className="bg-accent w-2 h-8 rounded-full inline-block"></span>
            Steps we follow
          </h2>
          <ul className="space-y-4 relative z-10">
            {service.steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700 font-medium md:text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {service.subclasses.map((sub, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 relative"
          >
            <div className="aspect-video w-full overflow-hidden">
               <img loading="lazy" src={sub.image} alt={sub.title + ' Dubai'} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-10 font-sans relative z-10">
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight text-wrap">{sub.title}</h3>
                <LikeButton serviceSlug={slug} subTitle={sub.title} initialLikes={sub.initialLikes} />
              </div>
              <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">{sub.desc}</p>
              <div className="flex items-center gap-2">
                <a
                  href={'https://wa.me/971529933482?text=Hello%20Fakhar%20Al%20Mas!%20I%20am%20interested%20in%20the%20*' + encodeURIComponent(sub.title) + '*%20service.%0A%0ADetail:%20' + encodeURIComponent(sub.desc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-primary text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-accent border border-accent/20 transition-all duration-500 shadow-lg group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 skew-x-[-20deg] translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 pointer-events-none"></div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 fill-current text-accent group-hover/btn:text-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+971529933482"
                  className="flex items-center justify-center gap-2 bg-accent text-white px-3 md:px-5 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-primary transition-all duration-500 shadow-lg"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <span className="hidden sm:inline">Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-24 text-center pb-12"
      >
        <Link to="/contact" className="inline-block w-full sm:w-auto bg-primary text-white px-10 md:px-16 py-5 md:py-6 rounded-full text-lg md:text-2xl font-bold hover:bg-opacity-90 shadow-2xl transition-all hover:scale-105 active:scale-95">
          Get Full Quote or Book Appointment
        </Link>
      </motion.div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "10 Essential Tips for AC Maintenance in Dubai Heat",
        excerpt: "With temperatures soaring above 40°C, keeping your AC unit in top shape is crucial. Here are the top 10 tips from our experts...",
        date: "April 1, 2026",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Why You Should Never Ignore a Leaky Pipe",
        excerpt: "Small leaks can lead to big bills and structural damage. Learn why immediate plumbing repair is the best investment for your villa...",
        date: "March 25, 2026",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Modern Villa Painting Trends in Dubai for 2026",
        excerpt: "Explore the most popular color palettes and texture techniques that are transforming Dubai homes this year...",
        date: "March 18, 2026",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "How to Prevent Electrical Fires in Older Villas",
        excerpt: "Electrical safety is the #1 concern for home maintenance. Our master electricians provide a checklist of what to watch for in your circuit board...",
        date: "March 10, 2026",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Blog() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
        >
            <Helmet>
                <title>Maintenance Blog | Facts and Tips for Dubai Homeowners | Fakhar Al Mas</title>
                <meta name="description" content="Expert tips on AC repair, plumbing, painting, and general home maintenance in Dubai. Read our blog for the latest trends and advice." />
                <meta name="keywords" content="Dubai maintenance blog, AC tips Dubai, home repair advice, painting trends Dubai" />
            </Helmet>

            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary"
            >
                Maintenance Expert Blog
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, idx) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Useful Tips</div>
                        </div>
                        <div className="p-8">
                            <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                            <Link to="/contact" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Read More <span>→</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

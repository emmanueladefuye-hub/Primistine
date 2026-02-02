import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogList from '../components/blog/BlogList';
import CTASection from '../components/home/CTASection';

const Blog = () => {
    // Categories are hardcoded for now, but in future can be dynamic
    const categories = [
        "Solar Education",
        "Electrical Safety",
        "Power Systems",
        "CCTV & Security",
        "Technical Explainers",
        "Industry Insights"
    ];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#020C1B]"
        >
            <SEO
                title="Engineering Insights"
                description="Deep dives into electrical engineering, solar technology, and safety standards."
                keywords="Solar Blog, Electrical Tips, Safety Guides, Primistine Insights"
            />

            {/* Blog Hero */}
            <section className="py-16 md:py-20 bg-[#0A192F] text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-b from-blue-900/10 to-transparent"></div>

                <div className="section-padding pt-0 px-4 md:px-8 relative z-10">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Knowledge & Education</span>
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Primistine Power Hub</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Deep dives into electrical engineering, solar technology, and safety standards.
                    </p>
                </div>
            </section>

            {/* Category Filter - Visual only for Mock Phase */}
            <section className="bg-[#020C1B] pb-12 pt-8 overflow-x-auto no-scrollbar scroll-smooth sticky top-[64px] z-30 border-b border-white/5 backdrop-blur-md bg-[#020C1B]/90">
                <div className="section-padding py-0 min-w-max md:min-w-0">
                    <div className="flex justify-center md:flex-wrap gap-2 md:gap-3 px-4 md:px-0">
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeCategory === "All"
                                ? "bg-accent-teal text-[#0A192F] border-accent-teal"
                                : "text-slate-400 border-white/10 hover:border-slate-500 hover:bg-white/5"
                                }`}
                        >
                            All Posts
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeCategory === cat
                                    ? "bg-accent-teal text-[#0A192F] border-accent-teal"
                                    : "text-slate-400 border-white/10 hover:border-slate-500 hover:bg-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding py-16 bg-[#020C1B]">
                <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
                    <BlogList limit={100} />
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default Blog;

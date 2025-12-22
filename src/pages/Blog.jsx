import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import CTASection from '../components/home/CTASection';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Blog Hero */}
            <section className="py-16 md:py-20 bg-primary text-center">
                <div className="section-padding pt-0 px-4 md:px-8">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Knowledge & Education</span>
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Primistine Power Hub</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Deep dives into electrical engineering, solar technology, and safety standards to help you make informed power decisions.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-primary pb-12 overflow-x-auto no-scrollbar scroll-smooth">
                <div className="section-padding py-0 min-w-max md:min-w-0">
                    <div className="flex justify-center md:flex-wrap gap-2 md:gap-3 px-4 md:px-0">
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeCategory === "All"
                                ? "bg-accent-teal text-[#0A192F] border-accent-teal"
                                : "text-slate-400 border-white/10 hover:border-slate-500"
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
                                    : "text-slate-400 border-white/10 hover:border-slate-500"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding py-0 pb-20 bg-primary">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-primary-light rounded-xl overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-all flex flex-col"
                        >
                            <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-video">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </Link>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-accent-teal mb-4">
                                    <span>{post.category}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-4 text-slate-500 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="text-accent-gold hover:text-white transition-colors">
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default Blog;

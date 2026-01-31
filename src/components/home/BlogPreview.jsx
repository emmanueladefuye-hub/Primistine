import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogPreview = () => {
    // Get the latest 3 posts
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="section-padding py-32 relative overflow-hidden bg-[#020C1B]">
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-accent-gold/50"></div>
                            <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-xs">Knowledge & Insights</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl text-white font-display font-bold leading-[1.1]">Engineering <br /><span className="gradient-text">Intelligence</span></h2>
                    </div>
                    <Link to="/blog" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest mb-4 hover:translate-x-2">
                        Explore All Articles
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-accent-gold" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {featuredPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group flex flex-col p-8 rounded-[3rem] glass-panel border border-white/5 hover:border-accent-gold/20 transition-all duration-700 hover:bg-white/[0.03]"
                        >
                            <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-[2.5rem] aspect-[16/10] mb-8 border border-white/5 relative shadow-2xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                            </Link>

                            <div className="px-2 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold mb-6">
                                    <span className="glass-panel-light px-3 py-1 rounded-full border border-white/10 uppercase">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                    <span className="text-slate-500 font-medium italic lowercase">{post.readTime}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-gold transition-colors duration-500 leading-tight">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>

                                <p className="text-slate-400 text-sm md:text-base font-light mb-10 line-clamp-3 leading-relaxed opacity-80">
                                    {post.excerpt}
                                </p>

                                <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-accent-gold transition-all border-b border-white/10 pb-2 self-start">
                                    Read Insight
                                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-3 transition-transform text-accent-gold" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;

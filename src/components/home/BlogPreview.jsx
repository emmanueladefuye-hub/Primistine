import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogPreview = () => {
    // Get the latest 3 posts
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="section-padding py-24 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-accent-gold/50"></div>
                        <span className="text-accent-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Blog & Education</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl text-white font-display font-bold leading-tight">Latest Engineering <br />Insights</h2>
                </div>
                <Link to="/blog" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-2">
                    Visit Blog
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {featuredPosts.map((post, idx) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col p-6 rounded-[2.5rem] bg-[#112240]/40 border border-white/5 hover:border-accent-teal/20 transition-all duration-500 hover:bg-[#112240]/60"
                    >
                        <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-[2rem] aspect-[16/10] mb-8 border border-white/5 relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>

                        <div className="px-2">
                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold mb-4">
                                <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">{post.category}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                <span className="text-slate-500 font-medium italic lowercase">{post.readTime}</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-teal transition-colors duration-500 leading-tight">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>

                            <p className="text-slate-400 text-sm font-light mb-8 line-clamp-2 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-accent-teal transition-colors">
                                Read Article
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform text-accent-teal" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogPreview;

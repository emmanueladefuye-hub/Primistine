import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogPreview = () => {
    // Get the latest 3 posts
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="section-padding bg-primary border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-2 block">Blog & Education</span>
                    <h2 className="text-3xl md:text-5xl text-white font-display font-bold">Latest Blog Posts</h2>
                </div>
                <Link to="/blog" className="inline-flex items-center text-accent-teal font-medium hover:gap-2 transition-all gap-1">
                    Visit Blog <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post, idx) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col"
                    >
                        <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl aspect-[16/10] mb-6 border border-white/5">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </Link>

                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-accent-gold mb-3">
                            <span>{post.category}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="text-slate-500 font-medium lowercase italic">{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                            {post.excerpt}
                        </p>

                        <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 text-white text-sm font-bold group-hover:text-accent-teal transition-colors">
                            Read Article
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-accent-teal" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogPreview;

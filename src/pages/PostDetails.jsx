import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Zap, ArrowRight } from 'lucide-react';
import { wordpressService } from '../services/wordpressService'; // Import service
import CTASection from '../components/home/CTASection';
import ReadingProgressBar from '../components/blog/ReadingProgressBar'; // Ensure this exists or mock it
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const PostDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const data = await wordpressService.getPostBySlug(slug);
                if (data && data.length > 0) {
                    setPost(data[0]);
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);


    if (loading) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-gold"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center text-center px-4">
                <div className="max-w-md bg-primary-light p-10 rounded-2xl border border-white/10 shadow-xl">
                    <h1 className="text-4xl font-bold mb-4 text-white">Article Not Found</h1>
                    <p className="text-slate-400 mb-8">The engineering insight you're looking for might have been moved or archived.</p>
                    <Link to="/blog" className="btn-primary w-full justify-center text-accent-gold border border-accent-gold p-3 rounded-lg hover:bg-accent-gold hover:text-primary transition-colors">Back to Knowledge Hub</Link>
                </div>
            </div>
        );
    }

    // Estimate reading time if not provided
    const wordCount = post.content.rendered.replace(/<[^>]+>/g, '').length;
    const readTime = Math.ceil(wordCount / 1000) + " min read";
    const authorName = post.author_name || "Primistine Engineering";
    const categoryName = "Insights"; // WordPress API might need category expansion


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-primary selection:bg-accent-teal/30"
        >
            <SEO
                title={post.title.rendered}
                description={post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160)}
                image={post.featured_media_url}
            />
            <SchemaMarkup
                type="Article"
                data={{
                    title: post.title.rendered,
                    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160),
                    image: post.featured_media_url,
                    author: authorName,
                    datePublished: post.date,
                    url: window.location.href // Dynamically get current URL
                }}
            />

            {/* <ReadingProgressBar />  -- Commenting out if not confirmed to exist or needing import */}

            {/* Header Content */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F223C] to-[#0A192F] border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,255,218,0.05),transparent_50%)]" />

                <div className="max-w-4xl mx-auto px-5 md:px-0 relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-gold transition-colors mb-10 text-xs font-bold uppercase tracking-widest group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Knowledge Hub
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-accent-gold/20">
                            {categoryName}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-medium uppercase tracking-widest">
                            <Clock className="h-3.5 w-3.5 text-accent-teal" />
                            {readTime}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-10 leading-[1.2]">
                        {parse(post.title.rendered)}
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                                <User className="h-6 w-6 text-accent-teal" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Author</p>
                                <p className="text-sm text-white font-medium">{authorName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Published</p>
                                <p className="text-sm text-white font-medium">{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            {post.featured_media_url && (
                <div className="max-w-5xl mx-auto px-4 -mt-10 mb-16 relative z-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] aspect-video lg:aspect-[21/9] group"
                    >
                        <img
                            src={post.featured_media_url}
                            alt={post.title.rendered}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            )}

            {/* Main Content Area with Sidebar Layout */}
            <div className="max-w-6xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-16 pb-24">
                {/* Article Body */}
                <article className="lg:w-2/3 px-1 md:px-0">
                    <div
                        className="prose prose-invert prose-base md:prose-lg max-w-none 
                                   prose-headings:text-white prose-headings:font-display prose-headings:font-bold
                                   prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                                   prose-strong:text-white prose-strong:font-bold
                                   prose-a:text-accent-teal hover:prose-a:text-accent-gold prose-a:no-underline prose-a:border-b prose-a:border-accent-teal/30
                                   prose-blockquote:border-l-4 prose-blockquote:border-accent-gold prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-slate-200
                                   prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                                   prose-ul:list-disc prose-li:text-slate-300"
                    >
                        {parse(DOMPurify.sanitize(post.content.rendered))}
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                        <div>
                            <p className="text-white font-bold mb-2 text-lg">Knowledge is Power.</p>
                            <p className="text-slate-400 text-sm">Was this engineering insight helpful to you?</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-gold transition-all group">
                                <Share2 className="h-4 w-4 text-accent-gold" />
                                <span className="text-sm font-bold">Share Article</span>
                            </button>
                        </div>
                    </div>
                </article>

                {/* Desktop Sidebar */}
                <aside className="lg:w-1/3 space-y-10">
                    {/* Key Takeaways Card */}
                    <div className="sticky top-24 space-y-10">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#172A45] to-[#0A192F] border border-white/10 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal opacity-[0.03] blur-3xl rounded-full -mr-10 -mt-10" />
                            <h4 className="text-white font-display font-bold text-xl mb-6 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-accent-gold" />
                                Engineering Focus
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    '100% Safety Compliance',
                                    'Long-term Durability',
                                    'Cost-Effective Solutions'
                                ].map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-teal flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <Link to="/contact-us" className="text-accent-teal font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
                                    Book an Audit
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Professional Note */}
                        <div className="p-6 rounded-2xl border border-dashed border-white/20 text-center">
                            <p className="text-xs text-slate-500 italic">
                                Note: These articles are for educational purposes only. Always consult a licensed engineer before attempting electrical work.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>

            <CTASection />
        </motion.div>
    );
};

export default PostDetails;

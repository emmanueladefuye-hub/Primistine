import React from 'react';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const BlogPost = ({ post }) => {
    if (!post) return null;

    // Estimate reading time
    const wordCount = post.content.rendered.replace(/<[^>]+>/g, '').length;
    const readTime = Math.ceil(wordCount / 1000); // Rough estimate

    return (
        <article className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-accent-gold mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
                <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>

            <header className="mb-12 text-center">
                <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-mono mb-6">
                    <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent-gold" />
                        {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent-gold" />
                        {readTime} min read
                    </span>
                    <span className="flex items-center gap-2">
                        <User className="h-4 w-4 text-accent-gold" />
                        {post.author_name || 'Admin'}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                    {parse(post.title.rendered)}
                </h1>

                {post.featured_media_url && (
                    <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                        <img
                            src={post.featured_media_url}
                            alt={post.title.rendered}
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </header>

            <div className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:font-light prose-p:leading-relaxed prose-a:text-accent-gold prose-strong:text-white prose-li:text-slate-300">
                {parse(DOMPurify.sanitize(post.content.rendered))}
            </div>
        </article>
    );
};

export default BlogPost;

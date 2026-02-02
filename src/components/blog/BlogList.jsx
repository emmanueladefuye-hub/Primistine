import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { wordpressService } from '../../services/wordpressService';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const BlogList = ({ limit, category }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const data = await wordpressService.getPosts(1, limit || 10, category);
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [limit, category]);

    if (loading) {
        return <div className="text-white text-center py-10">Loading insights...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
                <article key={post.id} className="group relative bg-[#020C1B] rounded-[2rem] overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-all flex flex-col h-full">
                    {/* Image */}
                    {post.featured_media_url && (
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={post.featured_media_url}
                                alt={post.title.rendered}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] to-transparent opacity-60"></div>
                        </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-mono mb-4">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3 w-3 text-accent-gold" />
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User className="h-3 w-3 text-accent-gold" />
                                {post.author_name || 'Admin'}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent-gold transition-colors">
                            {parse(post.title.rendered)}
                        </h3>

                        <div className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-light flex-1">
                            {parse(DOMPurify.sanitize(post.excerpt.rendered))}
                        </div>

                        <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-accent-teal transition-colors mt-auto"
                        >
                            Read Article <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default BlogList;

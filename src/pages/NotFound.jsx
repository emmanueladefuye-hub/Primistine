import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, ZapOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-5">
            <div className="max-w-xl w-full text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-24 h-24 bg-accent-gold/10 rounded-3xl flex items-center justify-center border border-accent-gold/20">
                        <ZapOff className="w-12 h-12 text-accent-gold" />
                    </div>
                </motion.div>

                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-display font-bold text-white mb-4"
                >
                    404
                </motion.h1>

                <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-display font-medium text-slate-300 mb-6"
                >
                    Voltage Drop: Page Not Found
                </motion.h2>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-500 mb-10 text-lg leading-relaxed"
                >
                    The circuit you're looking for seems to have been disconnected or never existed. Let's get you back on the main grid.
                </motion.p>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/" className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2">
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="btn-premium-white w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 border border-white/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous Page
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;

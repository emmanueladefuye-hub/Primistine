import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorResult = ({ title, results, advice, ctaLabel = "Book Free Assessment" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#172A45] to-[#0A192F] border border-white/10 shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 blur-[100px] rounded-full -mr-32 -mt-32" />

            <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                {title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 mb-10">
                {results.map((res, i) => (
                    <div key={i} className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent-teal/30 transition-colors">
                        <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1 md:mb-2">{res.label}</p>
                        <p className="text-base md:text-xl font-display font-bold text-white group-hover:text-accent-teal transition-colors break-words">{res.value}</p>
                    </div>
                ))}
            </div>

            <div className="p-6 rounded-2xl bg-accent-teal/[0.03] border border-accent-teal/10 mb-10">
                <div className="flex gap-4">
                    <Info className="h-5 w-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                        {advice}
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                <div className="text-sm text-slate-500 font-medium">
                    Want a precise design tailored to your home?
                </div>
                <Link to="/contact-us" className="btn-primary group">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export default CalculatorResult;

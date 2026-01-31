import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorResult = ({ title, results, advice, ctaLabel = "Book Free Assessment" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 md:p-10 lg:p-12 rounded-[4rem] glass-panel border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
            {/* Dynamic Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="h-px w-12 bg-accent-gold/50 mb-6"></div>
                    <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Your Results</span>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                        {title}
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                    {results.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 group hover:border-accent-gold/30 transition-all duration-500 flex flex-col justify-center"
                        >
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black mb-4">{res.label}</p>
                            <p className="text-2xl lg:text-3xl font-display font-black text-white group-hover:text-accent-gold transition-colors leading-none tracking-tight break-keep">{res.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="p-8 rounded-3xl bg-accent-gold/[0.03] border border-accent-gold/10 mb-8 backdrop-blur-sm">
                    <div className="flex gap-6 items-start">
                        <div className="p-3 rounded-xl bg-accent-gold/10">
                            <Info className="h-5 w-5 text-accent-gold flex-shrink-0" />
                        </div>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light italic">
                            {advice}
                        </p>
                    </div>
                </div>

                {/* Estimate Disclaimer */}
                <div className="mb-12 p-6 rounded-3xl bg-slate-900/50 border border-white/5 flex gap-5 items-start">
                    <div className="p-2 bg-white/5 rounded-xl flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Estimate Only</p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            This tool provides a simplified estimate based on standard profiles. Every building has unique wiring and structural nuances.
                            We strongly recommend a professional site audit before final procurement.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-12 border-t border-white/5">
                    <div className="max-w-md text-center lg:text-left">
                        <p className="text-white font-bold text-lg mb-2">Ready for a precise engineering design?</p>
                        <p className="text-sm text-slate-500 font-medium">Get a custom load analysis tailored specifically to your property layout and energy goals.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/contact-us" className="btn-secondary px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest">
                            Request Site Audit
                        </Link>
                        <Link to="/contact-us" className="btn-premium-glossy px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-2xl active:scale-95 group flex items-center justify-center gap-4 transition-all whitespace-nowrap">
                            {ctaLabel}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CalculatorResult;

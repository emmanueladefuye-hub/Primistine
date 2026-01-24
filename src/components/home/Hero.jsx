import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/images/hero_engineering.png';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#172A45] opacity-50 skew-x-[-12deg] translate-x-20"></div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-gold/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="section-padding relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 md:py-32">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    <div className="flex items-center gap-2 text-accent-gold font-bold text-xs md:text-sm tracking-widest uppercase">
                        <Zap className="h-4 w-4" />
                        <span>Reliable Power Systems</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1] max-w-2xl">
                        Power. Safety. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-200">
                            Engineered Right.
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed">
                        The anti-chaos solution for Nigeria’s power needs. We don’t just install wires; we design reliable electrical systems for homes, businesses, and specialized industries.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <Link to="/contact-us" className="btn-premium-glossy text-primary w-full sm:w-auto py-5 sm:py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-2">
                            Talk to an Engineer
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link to="/calculators" className="btn-secondary border-accent-gold/50 text-accent-gold hover:bg-accent-gold hover:text-primary w-full sm:w-auto py-5 sm:py-3">
                            Use Power Calculators
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative group gpu-accelerated"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A192F]/50 lg:backdrop-blur-sm p-2">
                        <img
                            src={heroImg}
                            alt="Electrical Engineering Precision"
                            className="rounded-xl w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                            loading="eager"
                            decoding="async"
                        />
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:left-6 bg-primary/90 p-4 rounded-lg border-l-4 border-accent-gold shadow-lg">
                            <p className="text-accent-teal text-[10px] font-bold uppercase mb-1">System Status</p>
                            <p className="text-white font-mono text-xs md:text-sm">Load Balanced: <span className="text-accent-gold">98.4%</span></p>
                            <p className="text-white font-mono text-xs md:text-sm">Design Optimized: <span className="text-accent-gold">TRUE</span></p>
                        </div>
                    </div>
                    {/* Decorative shapes */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl will-change-transform"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

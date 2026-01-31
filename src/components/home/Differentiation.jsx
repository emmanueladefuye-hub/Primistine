import React from 'react';
import { X, Check, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import pylonImg from '../../assets/media/images/high-voltage-pylon.jpg';
import panelImg from '../../assets/media/images/wiring-panel.jpg';

const Differentiation = () => {
    return (
        <section className="section-padding py-32 bg-[#020C1B] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${pylonImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-accent-gold/50"></div>
                        <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-xs">Why Choose Us</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl text-white font-display font-bold leading-tight mb-8">
                        The <span className="gradient-text">Primistine</span><br />Standard
                    </h2>
                    <p className="text-slate-300 text-lg mb-12 leading-relaxed font-light opacity-80">
                        Most electrical problems aren't accidents—they are caused by poor design and fake parts. We do things differently to ensure your safety.
                    </p>

                    <div className="space-y-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 group hover:bg-red-500/[0.02] hover:border-red-500/20 transition-all duration-500"
                        >
                            <div className="shrink-0 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                                <ShieldAlert className="h-8 w-8 text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-red-400 font-bold text-xl mb-2">The Usual Way</h4>
                                <p className="text-slate-400 text-base font-light italic">Messy wiring, fake components, and guesswork that put your home and family at risk.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex gap-6 p-8 rounded-[2rem] glass-panel border border-accent-gold/20 relative group hover:border-accent-gold/50 transition-all duration-500"
                        >
                            <div className="absolute -top-4 -right-4 glass-panel px-4 py-2 rounded-xl text-accent-gold text-[10px] font-bold uppercase tracking-widest border border-accent-gold/30">
                                The Primistine Standard
                            </div>
                            <div className="shrink-0 p-4 rounded-2xl bg-accent-gold/10 border border-accent-gold/20">
                                <Award className="h-8 w-8 text-accent-gold" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-2">Professional Engineering</h4>
                                <p className="text-slate-300 text-base font-light">Calculated load analysis, neat wiring, and 100% genuine parts for long-term reliability.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#020C1B] p-4">
                        <img
                            src={panelImg}
                            alt="Precision Distribution Panel"
                            className="w-full h-auto rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            loading="lazy"
                        />

                        {/* Status HUD Overlay */}
                        <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl max-w-[280px] animate-premium-in">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="h-3 w-3 rounded-full bg-accent-teal animate-pulse"></div>
                                <p className="text-white font-mono text-sm uppercase tracking-tighter">System Health: Optimal</p>
                            </div>
                            <p className="text-slate-400 text-xs font-mono leading-relaxed">Integrated Surge Protection<br />Active Load Balancing: ON</p>
                        </div>
                    </div>

                    {/* Decorative aura */}
                    <div className="absolute -inset-10 bg-accent-gold/5 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiation;

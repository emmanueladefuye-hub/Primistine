import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Ruler, Users, Target, Award } from 'lucide-react';
import CTASection from '../components/home/CTASection';
import teamImg from '../assets/media/images/team-collaboration.jpg';
import factoryImg from '../assets/media/images/team-factory.jpg';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020C1B]"
        >
            {/* Cinematic Hero */}
            <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={factoryImg}
                        alt="Primistine Engineering Factory"
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020C1B] via-transparent to-[#020C1B]" />
                </div>

                <div className="section-padding relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Approach</span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[1.1]">Electrical Engineering <span className="gradient-text">Done Right</span></h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light opacity-90">
                            At Primistine, we believe in doing things once and doing them correctly. We focus on safety, precision, and high-quality materials to provide reliable power for your property.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission - Image Integrated */}
            <section className="section-padding py-24 relative overflow-hidden bg-[#0A192F]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="glass-panel p-10 rounded-[3rem] border-l-4 border-accent-gold">
                            <h3 className="text-3xl font-display font-bold text-white mb-4 flex items-center gap-4">
                                <Target className="text-accent-gold h-8 w-8" />
                                Our Mission
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed font-light">
                                To provide safe and reliable electrical solutions for Nigerian homes and businesses by following international engineering standards and using only genuine parts.
                            </p>
                        </div>
                        <div className="glass-panel p-10 rounded-[3rem] border-l-4 border-accent-teal">
                            <h3 className="text-3xl font-display font-bold text-white mb-4 flex items-center gap-4">
                                <Award className="text-accent-teal h-8 w-8" />
                                Our Vision
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed font-light">
                                To be the most trusted name for electrical infrastructure in West Africa—known for safety, quality, and professional integrity.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                            <img
                                src={teamImg}
                                alt="Primistine Collaboration"
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-accent-gold/5 group-hover:bg-transparent transition-colors duration-1000" />
                        </div>
                        {/* Decorative HUD Element */}
                        <div className="absolute -bottom-10 -left-10 glass-panel p-6 rounded-2xl border border-white/10 hidden md:block">
                            <p className="text-accent-gold font-mono text-xs uppercase tracking-widest mb-1">Quality Control</p>
                            <p className="text-white font-display text-2xl font-bold">VERIFIED</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Primistine Process */}
            <section className="section-padding py-32 bg-[#020C1B]">
                <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6">Our <span className="gradient-text">Working</span> Process</h2>
                    <p className="text-slate-400 font-light text-lg">Every project follows a clear professional process to ensure long-term reliability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {[
                        { title: "Audit", desc: "We analyze your site and power needs.", color: "accent-gold" },
                        { title: "Design", desc: "We map out a safe and efficient system.", color: "accent-teal" },
                        { title: "Execute", desc: "Clean and professional installation by experts.", color: "accent-gold" },
                        { title: "Certify", desc: "Rigorous testing before final sign-off.", color: "accent-teal" }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel p-8 rounded-[2.5rem] border border-white/10 hover:border-accent-gold/30 transition-all group text-center"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl font-display font-bold text-white border border-white/10 group-hover:text-accent-gold group-hover:border-accent-gold/50 transition-all">
                                0{idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{step.title}</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default About;

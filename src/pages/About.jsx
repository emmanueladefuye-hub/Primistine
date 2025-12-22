import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Ruler, Users } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <section className="py-16 md:py-24 bg-primary border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#172A45]/50 skew-x-12 translate-x-20"></div>
                <div className="section-padding relative z-10 text-center max-w-4xl mx-auto">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">About Primistine</span>
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Bringing Order to the Power Sector</h1>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed md:px-10">
                        In an industry often plagued by shortcuts and "manage it like that" attitudes, Primistine stands apart. We believe electricity is not a hobby—it is a science. Our mission is to provide Nigerian property owners with electrical systems that are safe, efficient, and worthy of peace of mind.
                    </p>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding py-20 bg-primary-light">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10">
                            <Users className="text-accent-teal h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Transparency</h3>
                        <p className="text-slate-400 leading-relaxed">
                            You will understand exactly what you are paying for and why. No hidden costs, no vague explanations. We explain the 'why' behind every engineering decision.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10">
                            <Ruler className="text-accent-teal h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Precision</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We adhere to global engineering standards (IEC/IEE Wiring Regulations). Measurements are exact, and load calculations are verified before installation.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10">
                            <ShieldCheck className="text-accent-teal h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Integrity</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We never compromise on safety for profit. If a cheaper component is unsafe, we simply won't use it. Our reputation is built on reliability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding py-16 md:py-20 bg-primary">
                <h2 className="text-3xl font-bold text-center mb-12 md:mb-16">The Primistine Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10 z-0"></div>

                    {[
                        { title: "1. Site Audit", desc: "We analyze your site and energy needs." },
                        { title: "2. System Design", desc: "Scientific load calculation and circuit mapping." },
                        { title: "3. Installation", desc: "Clean, code-compliant execution." },
                        { title: "4. Testing & Handover", desc: "Rigorous stress testing before sign-off." }
                    ].map((step, idx) => (
                        <div key={idx} className="relative z-10 bg-primary pt-4 md:pt-0">
                            <div className="w-16 h-16 bg-[#0A192F] border-2 border-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white text-center mb-2">{step.title}</h3>
                            <p className="text-slate-400 text-center text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default About;

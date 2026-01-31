import React from 'react';
import { PenTool, CheckSquare, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreValues = () => {
    const values = [
        {
            icon: PenTool,
            title: "Designed, Not Just Installed",
            desc: "We calculate loads, design circuits, and plan every cable route before a single tool touches your wall. Precision engineering is our baseline.",
            color: "accent-gold"
        },
        {
            icon: CheckSquare,
            title: "Zero Counterfeits",
            desc: "We use only verified, authentic components. If the breaker or cable isn't genuine, it doesn't go into our systems. Period.",
            color: "accent-teal"
        },
        {
            icon: Zap,
            title: "Safety Obsession",
            desc: "Compliance with all relevant ISO/IEC standards. We build systems that protect property and life, ensuring total peace of mind.",
            color: "accent-gold"
        }
    ];

    return (
        <section className="section-padding py-32 relative overflow-hidden bg-[#0A192F]">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-gold/5 blur-[180px] rounded-full pointer-events-none opacity-50"></div>

            <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-10 bg-accent-gold/50"></div>
                    <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs">The Primistine Edge</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[1.1]">Elite <span className="gradient-text">Values</span> <br />Proven Results</h2>
                <p className="text-slate-400 font-light text-lg">Our commitment to excellence isn't just a marketing slogan; it's an engineering requirement.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 max-w-[1440px] mx-auto">
                {values.map((val, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group flex flex-col p-12 rounded-[3rem] glass-panel border border-white/5 hover:border-accent-gold/20 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                    >
                        <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:border-${val.color}/50 group-hover:bg-${val.color}/5 transition-all duration-500 shadow-xl`}>
                            <val.icon className={`h-10 w-10 text-${val.color} group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-accent-gold transition-colors duration-500">{val.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                            {val.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;

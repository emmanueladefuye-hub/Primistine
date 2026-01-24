import React from 'react';
import { PenTool, CheckSquare, Zap } from 'lucide-react';

const CoreValues = () => {
    const values = [
        {
            icon: PenTool,
            title: "Designed, Not Just Installed",
            desc: "We calculate loads, design circuits, and plan every cable route before a single tool touches your wall. No freestyling."
        },
        {
            icon: CheckSquare,
            title: "Zero Counterfeits",
            desc: "We use only verified, authentic components. If the breaker or cable isn't genuine, it doesn't go into our systems."
        },
        {
            icon: Zap,
            title: "Safety First",
            desc: "Compliance with all relevant standards. We build systems that protect property and life, not just supply power."
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-8 bg-accent-teal/50"></div>
                    <span className="text-accent-teal font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">The Primistine Edge</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Why Smart Homeowners <br />Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {values.map((val, idx) => (
                    <div key={idx} className="group flex flex-col p-10 rounded-[2rem] bg-[#112240]/40 border border-white/5 hover:border-accent-teal/20 transition-all duration-500 hover:bg-[#112240]/60">
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-teal/30 transition-all duration-500">
                            <val.icon className="h-8 w-8 text-accent-teal group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-teal transition-colors duration-500">{val.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                            {val.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;

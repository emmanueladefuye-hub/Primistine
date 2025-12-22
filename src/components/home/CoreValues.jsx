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
        <section className="section-padding bg-primary relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl mb-4">Why Smart Homeowners Choose Primistine</h2>
                <p className="text-slate-400">Engineering discipline applied to every connection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((val, idx) => (
                    <div key={idx} className="bg-primary-light p-8 rounded-xl border border-white/5 hover:border-accent-teal/30 transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 border border-white/10">
                            <val.icon className="h-7 w-7 text-accent-teal" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {val.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;

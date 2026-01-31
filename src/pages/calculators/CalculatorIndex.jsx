import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';

const CalculatorIndex = () => {
    const tools = [
        {
            title: "Solar Load Calculator",
            desc: "Estimate exactly how much power your home consumes and find your ideal system size.",
            icon: Zap,
            link: "/calculators/solar-load",
            color: "text-accent-gold",
            bg: "bg-accent-gold/5"
        },
        {
            title: "Solar Budget Estimator",
            desc: "Get an engineering-backed budget range for your solar project based on current market rates.",
            icon: DollarSign,
            link: "/calculators/budget",
            color: "text-accent-teal",
            bg: "bg-accent-teal/5"
        },
        {
            title: "Safety & Load Check",
            desc: "Assess the health of your electrical wiring and identify potential stress risks.",
            icon: ShieldCheck,
            link: "/calculators/safety",
            color: "text-red-500",
            bg: "bg-red-500/5"
        }
    ];

    return (
        <div className="bg-primary min-h-screen pt-32 pb-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Smart Planning Tools</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Decision Calculators</h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Engineering data, simplified. Use our professional tools to plan your energy transition with absolute confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={tool.link} className="group block h-full p-10 rounded-3xl bg-primary-light border border-white/5 hover:border-accent-teal/30 transition-all card-shadow-hover relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${tool.bg} blur-3xl rounded-full -mr-16 -mt-16`} />
                                <tool.icon className={`h-12 w-12 ${tool.color} mb-8`} />
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-teal transition-colors">{tool.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-10">{tool.desc}</p>
                                <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest group-hover:gap-4 transition-all uppercase">
                                    Launch Tool <ArrowRight className="h-4 w-4 text-accent-teal" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalculatorIndex;

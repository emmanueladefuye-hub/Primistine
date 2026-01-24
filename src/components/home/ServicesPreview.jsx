import React from 'react';
import { Sun, Zap, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
    const services = [
        {
            icon: Sun,
            title: "Solar Installation Services",
            desc: "Stop replacing batteries every year. Get a system designed for 24/7 power availability with proper load balancing.",
            link: "/services",
            calculatorLink: "/calculators/solar-load"
        },
        {
            icon: Zap,
            title: "Premium Wiring",
            desc: "Clean, organized, and code-compliant electrical infrastructure for residential and commercial properties.",
            link: "/services"
        },
        {
            icon: Search,
            title: "Audits & Repairs",
            desc: "We find the faults others miss. Comprehensive safety audits, earthing tests, and permanent troubleshooting.",
            link: "/services"
        }
    ];

    return (
        <section className="section-padding py-24 relative overflow-hidden">
            {/* Minimal Decorative Light */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-accent-gold/50"></div>
                        <span className="text-accent-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Our Engineering Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl text-white font-display font-bold leading-tight">Comprehensive <br />Power Solutions</h2>
                </div>
                <Link to="/services" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-2">
                    View All Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {services.map((svc, idx) => (
                    <div key={idx} className="group flex flex-col p-10 rounded-[2rem] bg-[#112240]/40 border border-white/5 hover:border-accent-teal/20 transition-all duration-500 hover:bg-[#112240]/60 relative overflow-hidden">
                        {/* Subtle inner corner glow on hover */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-gold/30 transition-all duration-500">
                            <svc.icon className="h-8 w-8 text-accent-gold group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-teal transition-colors duration-500">{svc.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed mb-10 flex-grow text-sm md:text-base">
                            {svc.desc}
                        </p>

                        <div className="flex items-center flex-wrap gap-6 mt-auto">
                            <Link to={svc.link} className="inline-flex items-center text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-accent-teal transition-colors border-b border-white/10 pb-1">
                                Details
                            </Link>
                            {svc.calculatorLink && (
                                <Link to={svc.calculatorLink} className="inline-flex items-center gap-2 text-accent-gold/80 text-xs font-bold uppercase tracking-[0.2em] hover:text-accent-gold transition-colors">
                                    <Zap className="h-3 w-3 fill-accent-gold/20" /> Calculator
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center relative z-10">
                <Link to="/contact-us" className="btn-premium-white inline-flex items-center gap-4 px-10 py-5 rounded-full font-bold hover:bg-accent-gold transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,215,0,0.2)] active:scale-95 group">
                    Request a Custom Quote
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
};

export default ServicesPreview;

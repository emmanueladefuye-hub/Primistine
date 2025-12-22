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
        <section className="section-padding py-20 bg-primary-light border-y border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl text-white font-display font-bold">Comprehensive Power Solutions</h2>
                </div>
                <Link to="/services" className="btn-secondary text-sm">
                    View All Services
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((svc, idx) => (
                    <div key={idx} className="group p-8 rounded-xl bg-[#0F223C] border border-white/5 hover:border-accent-gold/50 transition-all hover:bg-[#0F223C]/80">
                        <svc.icon className="h-10 w-10 text-accent-gold mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-4">{svc.title}</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {svc.desc}
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <Link to={svc.link} className="inline-flex items-center text-accent-teal text-sm font-medium hover:gap-2 transition-all gap-1">
                                Learn more <ArrowRight className="h-4 w-4" />
                            </Link>
                            {svc.calculatorLink && (
                                <Link to={svc.calculatorLink} className="inline-flex items-center text-accent-gold text-sm font-medium border border-accent-gold/20 px-3 py-1 rounded hover:bg-accent-gold/10 transition-all gap-1">
                                    <Zap className="h-3 w-3" /> Calculator
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link to="/contact-us" className="btn-primary">
                    Request a Quote
                </Link>
            </div>
        </section>
    );
};

export default ServicesPreview;

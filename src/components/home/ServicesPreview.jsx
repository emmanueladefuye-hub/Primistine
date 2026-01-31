import React from 'react';
import { Sun, Zap, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import solarImg from '../../assets/media/images/solar-panel-array.jpg';
import wiringImg from '../../assets/media/images/wiring-panel.jpg';
import auditImg from '../../assets/media/images/team-collaboration.jpg';

const ServicesPreview = () => {
    const services = [
        {
            icon: Sun,
            title: "Solar Installation",
            desc: "Stop replacing batteries every year. Get a system designed for 24/7 power availability with industrial-grade load balancing.",
            link: "/services",
            calculatorLink: "/calculators/solar-load",
            image: solarImg
        },
        {
            icon: Zap,
            title: "Premium Wiring",
            desc: "Clean, organized, and code-compliant electrical infrastructure for residential and commercial properties.",
            link: "/services",
            image: wiringImg
        },
        {
            icon: Search,
            title: "Audits & Recovery",
            desc: "We find the faults others miss. Comprehensive safety audits, earthing tests, and permanent troubleshooting.",
            link: "/services",
            image: auditImg
        }
    ];

    return (
        <section className="section-padding py-32 relative overflow-hidden bg-[#0A192F]">
            {/* Minimal Decorative Light */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-accent-gold/50"></div>
                            <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-xs">Innovation in Power</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl text-white font-display font-bold leading-[1.1]">Elite Engineering<br /><span className="gradient-text">Solutions</span></h2>
                    </div>
                    <Link to="/services" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest mb-4 hover:translate-x-2">
                        View Full Portfolio
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-accent-gold" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col h-[500px] rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 hover:border-accent-gold/20 transition-all duration-700"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={svc.image}
                                    alt={svc.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-[#020C1B]/80 to-transparent" />
                            </div>

                            <div className="relative z-10 p-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-gold/50 group-hover:bg-accent-gold/10 transition-all duration-500 shadow-2xl">
                                    <svc.icon className="h-8 w-8 text-accent-gold group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-4 transition-colors duration-500">{svc.title}</h3>
                                <p className="text-slate-300 font-light leading-relaxed mb-10 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                                    {svc.desc}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10">
                                    <Link to={svc.link} className="inline-flex items-center text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-accent-gold transition-colors">
                                        Exploration <ArrowRight className="ml-2 h-4 w-4 text-accent-gold" />
                                    </Link>
                                    {svc.calculatorLink && (
                                        <Link to={svc.calculatorLink} className="glass-panel-light px-4 py-2 rounded-lg text-accent-gold text-[10px] font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-primary transition-all shadow-lg border-white/10">
                                            Run Wizard
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;

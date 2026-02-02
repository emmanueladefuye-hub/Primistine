import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Activity, Shield, RotateCcw, Umbrella, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection';

import solarImg from '../assets/media/images/solar-panel-array.jpg';
import wiringImg from '../assets/media/images/wiring-panel.jpg';
import auditImg from '../assets/media/images/team-collaboration.jpg';
import factoryImg from '../assets/media/images/team-factory.jpg';
import pylonImg from '../assets/media/images/high-voltage-pylon.jpg';

import SEO from '../components/SEO';

const Services = () => {
    const servicesList = [
        {
            id: "solar",
            icon: Sun,
            title: "Solar & Energy Storage",
            subtitle: "Reliable Backup Power.",
            desc: "Stop replacing batteries every year. We design solar systems correctly from the start, ensuring you have steady power when you need it most.",
            features: ['Inverter Installations', 'Lithium Battery Upgrades', 'Solar Panel Mounting', 'Backup Power Design'],
            image: solarImg,
            accent: "accent-gold",
            calculator: true
        },
        {
            id: "wiring",
            icon: Zap,
            title: "Full Building Wiring",
            subtitle: "Done Once, Done Right.",
            desc: "Professional wiring for homes and offices. We ensure every cable is safe, organized, and properly connected to prevent future faults.",
            features: ['House & Office Wiring', 'Distribution Board Setup', 'Smart Home Systems', 'Building Rewiring'],
            image: wiringImg,
            accent: "accent-teal"
        },
        {
            id: "audits",
            icon: Activity,
            title: "Safety Audits",
            subtitle: "Protect Your Property.",
            desc: "Is your wiring safe? We conduct thorough safety checks to find hidden faults, earthing issues, and fire risks before they become problems.",
            features: ['Safety System Checks', 'Earthing Protection', 'Load Analysis', 'Electrical Troubleshooting'],
            image: auditImg,
            accent: "red-400"
        },
        {
            id: "industrial",
            icon: Cpu,
            title: "Industrial Support",
            subtitle: "Steady Commercial Power.",
            desc: "We provide professional electrical support for warehouses and factories, including automatic changeover switches for seamless power transition.",
            features: ['Automatic Changeovers (ATS)', 'Inverter/Gen Sync', 'Control Panel Setup', 'Industrial Wiring'],
            image: factoryImg,
            accent: "accent-gold"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020C1B]"
        >
            <SEO
                title="Our Services"
                description="Professional electrical and solar engineering services. Solar installation, building wiring, safety audits, and industrial power solutions."
                keywords="Solar Services, Electrical Wiring, Safety Audits, Industrial Electrician, Lagos"
            />
            {/* Page Hero */}
            <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden bg-[#0A192F]">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${pylonImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="section-padding relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[1.1]">Professional <br /><span className="gradient-text">Services</span></h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light opacity-80">
                            We provide high-quality electrical solutions for residential and commercial properties. From solar systems to building wiring, we focus on safety and reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Sections */}
            {servicesList.map((svc, idx) => (
                <section key={svc.id} className={`py-32 relative overflow-hidden ${idx % 2 === 0 ? 'bg-[#020C1B]' : 'bg-[#0A192F]'}`} id={svc.id}>
                    <div className="max-w-[1440px] mx-auto px-5 md:px-10 section-padding grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={idx % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}
                        >
                            <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-${svc.accent}/50 transition-all shadow-xl`}>
                                <svc.icon className={`h-8 w-8 text-${svc.accent === 'accent-teal' ? 'accent-teal' : svc.accent === 'red-400' ? 'red-400' : 'accent-gold'}`} />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{svc.title}</h2>
                            <h3 className={`text-xl font-bold mb-8 uppercase tracking-widest text-${svc.accent === 'accent-teal' ? 'accent-teal' : svc.accent === 'red-400' ? 'red-400' : 'accent-gold'}`}>{svc.subtitle}</h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light opacity-90">
                                {svc.desc}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {svc.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className={`h-1.5 w-1.5 rounded-full bg-${svc.accent === 'accent-teal' ? 'accent-teal' : svc.accent === 'red-400' ? 'red-400' : 'accent-gold'}`}></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-6">
                                <Link to="/contact-us" className="btn-premium-gloss px-10 py-5 rounded-2xl font-bold bg-white text-[#020C1B] hover:bg-accent-gold transition-all active:scale-95 shadow-xl uppercase tracking-widest text-xs">
                                    Get Started
                                </Link>
                                {svc.calculator && (
                                    <Link to="/calculators/solar-load" className="glass-panel-light px-10 py-5 rounded-2xl font-bold text-accent-gold border border-accent-gold/30 hover:bg-accent-gold/10 transition-all flex items-center gap-3 uppercase tracking-widest text-xs">
                                        <Zap className="h-4 w-4" /> Run Solar Calculator
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className={`relative ${idx % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}
                        >
                            <div className="rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] bg-[#020C1B] p-4 group">
                                <img
                                    src={svc.image}
                                    alt={svc.title}
                                    className="w-full h-auto rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                            </div>
                            {/* Technical Overlay */}
                            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl max-w-[280px] hidden md:block animate-premium-in">
                                <div className="flex items-center gap-3 mb-3">
                                    <ShieldCheck className="h-5 w-5 text-accent-gold" />
                                    <p className="text-white font-mono text-xs uppercase tracking-widest">Quality Standards</p>
                                </div>
                                <p className="text-slate-400 text-xs font-mono leading-relaxed">International Standards Compliant<br />High-Quality Materials Only.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            <CTASection />
        </motion.div>
    );
};

export default Services;

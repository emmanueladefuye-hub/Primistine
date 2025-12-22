import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Activity, Shield, RotateCcw, Umbrella, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection';

import solarImg from '../assets/images/solar_roof.png';
import wiringImg from '../assets/images/neat_wiring.png';
import auditImg from '../assets/images/engineer_audit.png';
import boardImg from '../assets/images/clean_distribution_board.png';

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="py-16 md:py-20 bg-primary text-center">
                <div className="section-padding pt-0">
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Our Services</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive electrical engineering solutions designed for longevity, safety, and efficiency.
                    </p>
                </div>
            </section>

            {/* Solar */}
            <section className="py-16 md:py-20 bg-primary-light border-y border-white/5" id="solar">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <Sun className="text-accent-gold h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Installation Services</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Energy Independence, Engineered.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            A solar system is only as good as its design. We analyze your true energy profile to spec the right inverter, battery bank, and array. Don't waste money on undersized systems that fail.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Hybrid Inverter Setups', 'Lithium-Ion Battery Integration', 'Roof & Ground Mounts', 'Industrial Power Backup'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact-us" className="btn-primary">
                                Get a Solar Assessment
                            </Link>
                            <Link to="/calculators/solar-load" className="px-8 py-3 rounded-md font-bold text-white border border-white/10 hover:border-accent-teal transition-all flex items-center gap-2">
                                <Zap className="h-4 w-4 text-accent-gold" />
                                Use Solar Calculator
                            </Link>
                        </div>
                    </div>
                    {/* Visual */}
                    <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={solarImg} alt="Solar Installation" className="w-full h-auto object-cover aspect-video" />
                    </div>
                </div>
            </section>

            {/* Wiring */}
            <section className="py-16 md:py-20 bg-primary" id="wiring">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Visual */}
                    <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={wiringImg} alt="Premium Wiring" className="w-full h-auto object-cover aspect-video" />
                    </div>

                    <div>
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <Zap className="text-accent-teal h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Electrical Installations</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Wiring Done Correctly.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            From luxury residences to automated office blocks, we provide structured cabling that is neat, labeled, and safe. We fix the mess behind the walls so you sleep soundly.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Conduit Surface/Concealed Wiring', '3-Phase Distribution Boards', 'Smart Home Integration', 'Full Building Rewiring'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn-secondary">
                            Request Installation Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* CCTV */}
            <section className="py-20 bg-primary-light border-y border-white/5" id="cctv">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <Shield className="text-accent-teal h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">CCTV Installation & Surveillance</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Eyes Everywhere, Always.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Protect your assets with high-definition surveillance systems. We design integrated security networks that provide remote viewing and AI-driven motion detection.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['IP & Analog Camera Systems', 'NVR/DVR Remote Access', 'Motion Detection Alerts', 'Perimeter Security Integration'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn-secondary">
                            Explore Security Solutions
                        </Link>
                    </div>
                    {/* Visual */}
                    <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={wiringImg} alt="Surveillance Engineering" className="w-full h-auto object-cover aspect-video" />
                    </div>
                </div>
            </section>

            {/* Generator */}
            <section className="py-20 bg-primary" id="generator">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={boardImg} alt="Power Integration" className="w-full h-auto object-cover aspect-video" />
                    </div>

                    <div>
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <RotateCcw className="text-white h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Generator Changeover & Integration</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Seamless Transitions.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Stop manually switching breakers. We install reliable automatic changeover panels (ATS) and power integration systems that manage load transfers safely.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Automatic Transfer Switches (ATS)', 'Manual Changeover Panels', 'Inverter/Gen Synergy', 'Load Management Controls'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn-secondary">
                            Request Integration Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Audits */}
            <section className="py-20 bg-primary-light border-y border-white/5" id="audits">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <Activity className="text-red-400 h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrial & Safety Audits</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Protecting Your Assets.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Electrical fires and equipment damage are preventable. Our comprehensive audits identify Earthing faults, overload risks, and outdated breakers before they cause disaster.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Comprehensive Safety Audits', 'Earthing & Lightning Protection', 'Load Analysis', 'Fault Troubleshooting'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn-secondary hover:border-red-400 hover:text-red-400">
                            Schedule a Safety Audit
                        </Link>
                    </div>
                    {/* Visual */}
                    <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={auditImg} alt="Engineering Audit" className="w-full h-auto object-cover aspect-video" />
                    </div>
                </div>
            </section>

            {/* Earthing */}
            <section className="py-20 bg-primary" id="earthing">
                <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img src={auditImg} alt="Earthing & Protection" className="w-full h-auto object-cover aspect-video" />
                    </div>

                    <div>
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center border border-white/10 mb-6">
                            <Umbrella className="text-accent-gold h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Earthing & Surge Protection</h2>
                        <h3 className="text-xl text-accent-teal mb-6">Zero Impact, Zero Fear.</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            High-voltage surges and lightning strikes can destroy your equipment in milliseconds. Our engineered earthing systems provide a low-resistance path to safety.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Copper Earth Pit Construction', 'Surge Protective Devices (SPDs)', 'Lightning Arrestors', 'Resistance Testing & Certification'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn-secondary">
                            Get Protection Quote
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default Services;

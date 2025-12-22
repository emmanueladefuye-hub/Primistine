import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/home/CTASection';

import solarImg from '../assets/images/solar_roof.png';
import wiringImg from '../assets/images/neat_wiring.png';
import boardImg from '../assets/images/clean_distribution_board.png';
import auditImg from '../assets/images/engineer_audit.png';

const Projects = () => {
    const projects = [
        {
            title: "Commercial Solar Array",
            location: "Lekki, Lagos",
            desc: "50kW Hybrid System for a manufacturing facility. Zero downtime achieved.",
            type: "Solar",
            image: solarImg
        },
        {
            title: "Luxury Villa Wiring",
            location: "Banana Island, Lagos",
            desc: "Complete concealed conduit wiring and smart automation integration.",
            type: "Residential",
            image: wiringImg
        },
        {
            title: "Factory Safety Audit",
            location: "Ogun State",
            desc: "Comprehensive earthing improvement and distribution panel upgrade.",
            type: "Industrial",
            image: auditImg
        },
        {
            title: "Office Complex Backup",
            location: "Abuja",
            desc: "20kVA Inverter setup with lithium battery bank for 24/7 IT operations.",
            type: "Commercial",
            image: solarImg
        },
        {
            title: "Estate Street Lighting",
            location: "Ikeja GRA",
            desc: "Solar-powered automated street lighting system for 50-unit estate.",
            type: "Infrastructure",
            image: solarImg
        },
        {
            title: "Hotel Power Upgrade",
            location: "Victoria Island",
            desc: "Switchgear replacement and load balancing for 100-room hotel.",
            type: "Commercial",
            image: boardImg
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="py-16 md:py-20 bg-primary text-center">
                <div className="section-padding pt-0">
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Our Projects</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A selection of our engineering work across Nigeria. Real results, built to last.
                    </p>
                </div>
            </section>

            <section className="section-padding py-0 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="group bg-primary-light rounded-xl overflow-hidden border border-white/5 hover:border-accent-gold/50 transition-all">
                            {/* Project Image */}
                            <div className="h-48 bg-[#0F223C] overflow-hidden relative group">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F223C] to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-accent-teal text-xs font-bold uppercase tracking-wider">{proj.type}</span>
                                    <span className="text-slate-500 text-xs">{proj.location}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">{proj.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {proj.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/home/CTASection';

import solarImg from '../assets/images/solar_roof.png';
import wiringImg from '../assets/images/neat_wiring.png';
import boardImg from '../assets/images/clean_distribution_board.png';
import auditImg from '../assets/images/engineer_audit.png';

import { wordpressService } from '../services/wordpressService';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await wordpressService.getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Failed to load projects", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="pt-12 md:pt-16 pb-2 bg-primary text-center">
                <div className="section-padding py-0">
                    <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-6">Our Projects</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A selection of our engineering work across Nigeria. Real results, built to last.
                    </p>
                </div>
            </section>

            <section className="section-padding py-0 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-full text-center text-white py-20">Loading Projects...</div>
                    ) : (
                        projects.map((proj) => (
                            <div key={proj.id} className="group bg-primary-light rounded-xl overflow-hidden border border-white/5 hover:border-accent-gold/50 transition-all">
                                {/* Project Image */}
                                <div className="h-48 bg-[#0F223C] overflow-hidden relative group">
                                    <img
                                        src={proj.featured_media_url}
                                        alt={proj.title.rendered}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F223C] to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-accent-teal text-xs font-bold uppercase tracking-wider">{proj.acf.type}</span>
                                        <span className="text-slate-500 text-xs">{proj.acf.location}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">{proj.title.rendered}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {proj.acf.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <CTASection />
        </motion.div>
    );
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/media/videos/hero-bg.mp4';
import teamImg from '../../assets/media/images/team-factory.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-start overflow-hidden bg-[#020C1B] pt-6 md:pt-10 pb-12">
            {/* Cinematic Video Background */}
            <div className="video-bg-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="video-overlay" />
            </div>

            <div className="section-padding relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4 md:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    <div className="flex items-center gap-2 text-accent-gold font-bold text-[10px] md:text-xs tracking-widest uppercase bg-white/5 py-1.5 px-4 rounded-full border border-white/10 backdrop-blur-md">
                        <Zap className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Professional Electrical Engineering</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
                        Power. Safety.<br />
                        <span className="gradient-text">Engineered</span><br />
                        <span className="text-white">Right.</span>
                    </h1>

                    <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-lg leading-relaxed font-light opacity-80">
                        Expert electrical design, installation, and solar solutions built for reliability and safety. We build systems that last.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <Link to="/contact-us" className="btn-premium-glossy text-primary w-full sm:w-auto py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all text-sm">
                            Get a Free Quote
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link to="/calculators" className="glass-panel-light text-white hover:bg-white/10 w-full sm:w-auto py-3 px-8 rounded-xl font-semibold border border-white/20 transition-all flex items-center justify-center text-xs">
                            Free Solar Audit
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Content / Featured Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <div className="glass-panel p-2 rounded-[2.5rem] relative z-10 hover-magnetic group">
                        <div className="overflow-hidden rounded-[2.2rem]">
                            <img
                                src={teamImg}
                                alt="Primistine Engineering Team"
                                className="w-full h-auto object-cover aspect-[2/1.2] scale-105 group-hover:scale-100 transition-transform duration-700 max-h-[40vh]"
                            />
                        </div>

                        {/* Floating Metrics Overlay */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 glass-panel p-4 rounded-2xl border-l-4 border-accent-gold shadow-2xl max-w-[170px] backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Cpu className="text-accent-gold h-4 w-4" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Smart Grid</span>
                            </div>
                            <p className="text-2xl font-display font-bold text-white">99.9%</p>
                            <p className="text-[9px] text-slate-400 uppercase font-semibold">Reliability Index</p>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute -left-8 bottom-4 glass-panel p-4 rounded-2xl border-l-4 border-accent-teal shadow-2xl backdrop-blur-xl"
                        >
                            <ShieldCheck className="text-accent-teal h-5 w-5 mb-2" />
                            <p className="text-white font-mono text-[10px] uppercase tracking-tighter leading-tight font-bold">ISO Standards<br /><span className="text-accent-teal">Compliant</span></p>
                        </motion.div>
                    </div>

                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent-gold/5 blur-[120px] rounded-full -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

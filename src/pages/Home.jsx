import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';

import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import CoreValues from '../components/home/CoreValues';
import ServicesPreview from '../components/home/ServicesPreview';
import Differentiation from '../components/home/Differentiation';
import CTASection from '../components/home/CTASection';
import BlogPreview from '../components/home/BlogPreview';

import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO />
            <SchemaMarkup type="Organization" />
            <Hero />
            <TrustBar />
            <CoreValues />

            {/* Calculators Entry Section */}
            <section className="py-12 md:py-16 relative overflow-hidden">

                <div className="absolute inset-0 bg-[#112240]/40" />
                <div className="max-w-[1440px] mx-auto px-5 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-8 bg-accent-teal/50"></div>
                                <span className="text-accent-teal font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Precision Planning</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                                Not sure <span className="text-accent-gold italic font-light">how much</span> power you need?
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
                                Use our professional engineering calculators to <span className="text-white/80">estimate your load</span>, plan your budget, and check your wiring safety in seconds.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link to="/calculators" className="btn-premium-white px-10 py-4 rounded-full font-bold hover:bg-accent-gold transition-all duration-500 group flex items-center gap-2">
                                    Explore Tools
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link to="/services" className="text-white text-sm font-bold uppercase tracking-widest hover:text-accent-teal transition-all flex items-center gap-2">
                                    Our Services
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link to="/calculators/solar-load" className="p-10 rounded-[2rem] bg-primary/80 border border-white/5 hover:border-accent-teal/30 transition-all group">
                                <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-teal/20 transition-colors">
                                    <Zap className="h-6 w-6 text-accent-gold" />
                                </div>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Load Audit</h4>
                                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-accent-teal transition-colors" />
                            </Link>
                            <Link to="/calculators/safety" className="p-10 rounded-[2rem] bg-primary/80 border border-white/5 hover:border-red-500/30 transition-all group">
                                <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/20 transition-colors">
                                    <ShieldCheck className="h-6 w-6 text-red-500" />
                                </div>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Safety Check</h4>
                                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-red-500 transition-colors" />
                            </Link>
                            <div className="col-span-full p-8 rounded-[2rem] bg-gradient-to-r from-accent-teal/5 to-transparent border border-white/5">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
                                    <p className="text-accent-teal font-bold text-[10px] uppercase tracking-widest">1,200+ Homes Audited</p>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed font-light italic">Our data models provide 95% accuracy on initial budget estimates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesPreview />
            <Differentiation />
            <BlogPreview />

            <CTASection />
        </motion.div>
    );
};

export default Home;

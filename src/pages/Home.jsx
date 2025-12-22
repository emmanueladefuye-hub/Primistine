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

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <TrustBar />
            <CoreValues />

            {/* Calculators Entry Section */}
            <section className="py-24 bg-[#0F223C] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(100,255,218,0.05),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Smart Planning</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                                Not sure <span className="text-accent-teal italic">how much</span> power you need?
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                                Stop guessing. Use our professional engineering calculators to estimate your load, plan your budget, and check your wiring safety in seconds.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/calculators" className="btn-primary group">
                                    Explore Tools
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link to="/services" className="px-8 py-3 rounded-md font-bold text-white border border-white/10 hover:border-accent-gold transition-all">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/calculators/solar-load" className="p-8 rounded-2xl bg-primary border border-white/5 hover:border-accent-teal transition-all group">
                                <Zap className="h-8 w-8 text-accent-gold mb-4" />
                                <h4 className="text-white font-bold mb-2">Load Audit</h4>
                                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-accent-teal transition-colors" />
                            </Link>
                            <Link to="/calculators/safety" className="p-8 rounded-2xl bg-primary border border-white/5 hover:border-red-500 transition-all group">
                                <ShieldCheck className="h-8 w-8 text-red-500 mb-4" />
                                <h4 className="text-white font-bold mb-2">Safety Check</h4>
                                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-red-500 transition-colors" />
                            </Link>
                            <div className="col-span-2 p-8 rounded-2xl bg-gradient-to-r from-accent-teal/10 to-transparent border border-accent-teal/20">
                                <p className="text-accent-teal font-bold text-sm mb-2">1,200+ Homes Audited</p>
                                <p className="text-slate-400 text-xs leading-relaxed italic">Our internal data helps us provide 95% accuracy on initial budget estimates.</p>
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

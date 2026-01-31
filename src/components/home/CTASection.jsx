import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section-padding py-32 relative overflow-hidden bg-[#0A192F]">
            {/* High-Impact Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-gold/10 blur-[200px] rounded-full pointer-events-none animate-pulse"></div>

            <div className="relative z-10 text-center max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] glass-panel border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col items-center mb-12">
                    <div className="h-px w-16 bg-accent-gold/50 mb-8"></div>
                    <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-sm">Expert Engineering Consultation</span>
                    <h2 className="text-5xl md:text-8xl font-display font-extrabold mt-8 text-white leading-[1.05] tracking-tight">Ready to Secure <br /><span className="gradient-text">Your Power?</span></h2>
                </div>

                <p className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed font-light max-w-3xl mx-auto opacity-90">
                    Don’t leave your safety to chance. Speak with a Primistine engineer today and get a system designed for <span className="text-white font-semibold">stability</span> and <span className="text-white font-semibold">peace of mind</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <Link to="/contact-us" className="btn-premium-glossy px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl active:scale-95 group flex items-center gap-4 transition-all">
                        Get Started
                        <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                    <a href="tel:+2347046197826" className="group flex items-center gap-4 text-white text-lg font-bold uppercase tracking-widest hover:text-accent-gold transition-all">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent-gold/50 transition-all">
                            <Phone className="h-6 w-6 text-accent-gold" />
                        </div>
                        Call Us Today
                    </a>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
                    <p className="text-[10px] text-slate-500 font-bold tracking-[0.5em] uppercase">
                        ISO 9001:2015 Standards • Serving Nationwide, Nigeria
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

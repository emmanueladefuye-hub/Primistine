import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section-padding py-32 relative overflow-hidden border-t border-white/5">
            {/* Minimal Decorative Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto p-12 md:p-24 rounded-[3rem] bg-[#112240]/40 border border-white/10 shadow-2xl">
                <div className="flex flex-col items-center mb-10">
                    <div className="h-px w-12 bg-accent-gold/50 mb-6"></div>
                    <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm">Engineering Consulting</span>
                    <h2 className="text-4xl md:text-7xl font-display font-bold mt-6 text-white leading-[1.1]">Ready to Upgrade <br />Your Standard?</h2>
                </div>

                <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                    Don’t leave your power to chance with <span className="text-white/80">guesswork</span>. Speak with a Primistine engineer today and get a system designed for longevity.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/contact-us" className="btn-premium-white px-10 py-5 rounded-full font-bold hover:bg-accent-gold transition-all duration-500 shadow-xl active:scale-95 group flex items-center gap-3 text-sm uppercase tracking-widest">
                        Get Started
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a href="tel:+2347046197826" className="group flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest hover:text-accent-teal transition-colors">
                        <Phone className="h-5 w-5 text-accent-teal" />
                        Call Us Today
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-2">
                    <p className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">
                        Serving Nationwide, Nigeria
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section-padding py-20 bg-primary-light border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Upgrade Your Standard?</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Don’t leave your power to chance with guesswork. Speak with a Primistine engineer today and get a system designed for longevity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact-us" className="btn-primary w-full sm:w-auto justify-center">
                        Contact Us Now
                    </Link>
                    <a href="tel:+2347046197826" className="btn-secondary w-full sm:w-auto justify-center">
                        <Phone className="h-4 w-4" />
                        +234 704 619 7826
                    </a>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Serving clients nationwide across Nigeria.
                </p>
            </div>
        </section>
    );
};

export default CTASection;

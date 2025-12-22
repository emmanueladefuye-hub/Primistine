import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary min-h-screen"
        >
            <section className="py-16 md:py-24 section-padding">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Let's Discuss Your Project</h1>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed md:px-0 px-4">
                        Ready to upgrade your standard? Reach out to our engineering team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-primary-light p-8 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                                        <Phone className="h-5 w-5 text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Phone</p>
                                        <a href="tel:+2347046197826" className="text-white font-medium hover:text-accent-gold transition-colors">+234 704 619 7826</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                                        <Mail className="h-5 w-5 text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Email</p>
                                        <a href="mailto:primistineelectric@gmail.com" className="text-white font-medium hover:text-accent-gold transition-colors">primistineelectric@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                                        <MapPin className="h-5 w-5 text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Location</p>
                                        <p className="text-white font-medium">Lagos & Nationwide Service</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                                        <Clock className="h-5 w-5 text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Business Hours</p>
                                        <p className="text-white font-medium">Mon - Sat: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-[#0A192F] h-64 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
                            <p className="relative z-10 text-slate-500 flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                Interactive Map will load here
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-primary-light p-8 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-primary border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-teal transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-primary border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-teal transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-primary border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-teal transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Project Type</label>
                                <div className="relative">
                                    <select className="w-full bg-primary border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-teal transition-colors appearance-none cursor-pointer">
                                        <option>Solar Installation & Renewable Energy</option>
                                        <option>House Wiring and Electrical Installations</option>
                                        <option>Industrial Electrical Installations</option>
                                        <option>CCTV Installation and Surveillance Systems</option>
                                        <option>Generator Changeover and Power Integration</option>
                                        <option>Earthing and Surge Protection Systems</option>
                                        <option>Electrical Maintenance, Audits, and Fault Troubleshooting</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <ChevronDown className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-primary border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-teal transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="button" className="btn-primary w-full justify-center">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronDown, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { InquiryService } from '../lib/services/InquiryService';

const CustomSelect = ({ label, value, options, onChange, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white/5 border ${isOpen ? 'border-accent-gold' : 'border-white/10'} rounded-[1.5rem] p-5 text-white flex items-center justify-between transition-all group hover:border-white/20`}
            >
                <span className="text-sm font-medium">{value}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-gold' : 'group-hover:text-white'}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0A192F] border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => handleSelect(opt)}
                                className={`w-full text-left px-6 py-4 text-sm font-medium transition-colors hover:bg-white/5 flex items-center justify-between ${value === opt ? 'text-accent-gold bg-accent-gold/5' : 'text-slate-300'}`}
                            >
                                {opt}
                                {value === opt && <CheckCircle2 className="h-4 w-4" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay to close on click outside */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsOpen(false)} />
            )}
        </div>
    );
};

import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contactPreference: 'Call',
        location: '',
        projectType: 'Solar & Inverter',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🛡️ Security: Honeypot Check
        // If the hidden '_honey' field has a value, it's a bot.
        if (formData._honey) {
            console.log("Bot detected. Submission rejected.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await InquiryService.trackInquiry(formData);
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                contactPreference: 'Call',
                location: '',
                projectType: 'Solar & Inverter',
                message: ''
            });
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020C1B] min-h-screen"
        >
            <SEO
                title="Contact Us"
                description="Get in touch with Primistine Electric Limited. Schedule a load audit or discuss your solar and electrical engineering projects."
                keywords="Contact Primistine, Electrical Engineer Contact, Solar Quote Lagos, Book Consultant"
            />
            <SchemaMarkup type="LocalBusiness" />
            {/* Page Header */}
            <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden bg-[#0A192F]">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
                <div className="section-padding relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[1.1]">Talk to an <br /><span className="gradient-text">Expert</span></h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light opacity-80">
                            Ready to secure your power? Fill out the form below to schedule a load audit or talk to our engineering team about your project.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1440px] mx-auto">
                    {/* Contact Detail Cards */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full group-hover:bg-accent-gold/10 transition-all pointer-events-none" />
                            <h3 className="text-2xl font-display font-bold text-white mb-10 border-b border-white/5 pb-6 flex items-center gap-4">
                                <ShieldCheck className="text-accent-gold h-6 w-6" />
                                Engineering HQ
                            </h3>
                            <ul className="space-y-10">
                                {[
                                    { icon: Phone, label: "Technical Direct Line", value: "+234 704 619 7826", href: "tel:+2347046197826" },
                                    { icon: Mail, label: "Encrypted Email", value: "primistineelectric@gmail.com", href: "mailto:primistineelectric@gmail.com" },
                                    { icon: MapPin, label: "Deployment Hub", value: "Lagos & Nationwide Service", href: null },
                                    { icon: Clock, label: "Operating Sync", value: "Mon - Sat: 08:00 - 18:00 WAT", href: null },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-6 group/item">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-accent-gold/50 transition-all">
                                            <item.icon className="h-5 w-5 text-accent-gold" />
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-white text-lg font-medium hover:text-accent-gold transition-colors">{item.value}</a>
                                            ) : (
                                                <p className="text-white text-lg font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative h-72 bg-[#020C1B]">
                            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm flex items-center justify-center">
                                <p className="text-slate-500 font-display text-sm uppercase tracking-[0.3em] flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-accent-gold animate-bounce" />
                                    Satellite Hub Mapping...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Elite Intake Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-12 rounded-[4rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
                    >
                        <h3 className="text-3xl font-display font-bold text-white mb-10 text-center">Consultation Form</h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium"
                                        placeholder="Given Name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium"
                                        placeholder="Surname"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium"
                                        placeholder="contact@email.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium"
                                        placeholder="+234 ..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">How should we reach you?</label>
                                    <div className="relative z-20">
                                        <CustomSelect
                                            name="contactPreference"
                                            value={formData.contactPreference}
                                            onChange={handleChange}
                                            options={['Phone Call', 'WhatsApp Message']}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Your Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium"
                                        placeholder="Lagos, NG"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Project Type</label>
                                <div className="relative z-10">
                                    <CustomSelect
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        options={[
                                            'Solar & Inverter Storage',
                                            'Smart Grid & Wiring',
                                            'Safety/Compliance Audit',
                                            'Industrial Changeover',
                                            'Surge Suppression'
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Message / Requirements</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-white focus:outline-none focus:border-accent-gold focus:bg-accent-gold/5 transition-all text-sm font-medium resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            {/* 🛡️ Security: Honeypot Field (Hidden) */}
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <input
                                    type="text"
                                    name="_honey"
                                    value={formData._honey || ''}
                                    onChange={handleChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-premium-glossy w-full py-6 rounded-[1.5rem] font-display font-extrabold text-xl shadow-2xl active:scale-95 group flex items-center justify-center gap-4 transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send className="h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-4 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400"
                                >
                                    <CheckCircle2 className="h-6 w-6 shrink-0" />
                                    <p className="text-sm font-bold uppercase tracking-wider">Project Initiated. Sync expected within 4 hours.</p>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-4 p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400"
                                >
                                    <AlertCircle className="h-6 w-6 shrink-0" />
                                    <p className="text-sm font-bold uppercase tracking-wider">Link Error: Please verify connectivity and retry.</p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;


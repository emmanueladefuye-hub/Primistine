import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImg from '../assets/images/official_logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary-light border-t border-white/10 pt-16 pb-8">
            <div className="section-padding py-0 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="flex items-center gap-3 mb-6 h-14 md:h-16">
                        <img
                            src={logoImg}
                            alt="Primistine Logo"
                            className="h-full w-auto object-contain rounded-lg"
                        />
                        <span className="text-xl font-display font-bold text-white tracking-wide">PRIMISTINE</span>
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Power. Safety. Engineered Right. Bringing engineering discipline to Nigeria's electrical services.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-400 hover:text-accent-gold transition-colors"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-accent-gold transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-accent-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/services" className="hover:text-accent-teal transition-colors">solar Installation</Link></li>
                        <li><Link to="/services" className="hover:text-accent-teal transition-colors">Residential Wiring</Link></li>
                        <li><Link to="/services" className="hover:text-accent-teal transition-colors">Industrial Audits</Link></li>
                        <li><Link to="/services" className="hover:text-accent-teal transition-colors">CCTV & Security</Link></li>
                    </ul>
                </div>

                {/* Planning Tools */}
                <div>
                    <h4 className="text-white font-bold mb-4">Planning Tools</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/calculators/solar-load" className="hover:text-accent-gold transition-colors">Solar Load Calculator</Link></li>
                        <li><Link to="/calculators/budget" className="hover:text-accent-gold transition-colors">Budget Estimator</Link></li>
                        <li><Link to="/calculators/safety" className="hover:text-accent-gold transition-colors">Safety Assessment</Link></li>
                        <li><Link to="/calculators" className="hover:text-accent-gold font-medium transition-colors">All Engineering Tools</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/about" className="hover:text-accent-teal transition-colors">About Us</Link></li>
                        <li><Link to="/projects" className="hover:text-accent-teal transition-colors">Our Projects</Link></li>
                        <li><Link to="/blog" className="hover:text-accent-teal transition-colors">Blog</Link></li>
                        <li><Link to="/contact-us" className="hover:text-accent-teal transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-accent-gold shrink-0" />
                            <span>Serving clients nationwide<br />across Nigeria</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-accent-gold shrink-0" />
                            <a href="tel:+2347046197826" className="hover:text-white">+234 704 619 7826</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-accent-gold shrink-0" />
                            <a href="mailto:primistineelectric@gmail.com" className="hover:text-white">primistineelectric@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-padding py-0 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Primistine Electric Ltd. All rights reserved.</p>
                <p>Engineered for Safety.</p>
            </div>
        </footer>
    );
};

export default Footer;

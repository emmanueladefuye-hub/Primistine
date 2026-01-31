import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/official_logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Prevent scrolling when menu is open
    // Prevent scrolling when menu is open and compensate for scrollbar width to prevent layout shift
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen]);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Calculators', href: '/calculators' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact-us' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full bg-primary/95 lg:backdrop-blur-md border-b border-white/20 z-[100] gpu-accelerated">
            {/* Header Content Container - Controlled Layering */}
            <div className="relative z-[150] max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group relative h-12 md:h-14">
                    <img
                        src={logoImg}
                        alt="Primistine Logo"
                        className="h-full w-auto object-contain rounded-lg"
                    />
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold text-white tracking-wide leading-none">PRIMISTINE</span>
                        <span className="text-[10px] text-accent-teal uppercase tracking-[0.2em] mt-1">Electric Limited</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group ${isActive(item.href) ? 'text-accent-gold' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 h-px bg-accent-gold transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    ))}
                    <Link to="/contact-us" className="btn-premium-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-primary transition-all duration-300 shadow-lg active:scale-95">
                        Request Quote
                    </Link>
                </nav>

                <div className="flex items-center md:hidden">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="relative p-2 -mr-2 text-white transition-all active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <div className="bg-accent-gold/10 p-2 rounded-lg">
                                <X className="h-6 w-6 text-accent-gold" />
                            </div>
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-primary/95 backdrop-blur-md z-[130] md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-full sm:w-[85%] max-w-sm bg-[#050C1A] z-[140] shadow-2xl flex flex-col pt-24"
                        >
                            <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                                <p className="text-[12px] font-bold text-accent-teal uppercase tracking-[0.2em] mb-8">Navigation Hub</p>

                                <nav className="flex flex-col">
                                    <Link to="/" onClick={() => setIsOpen(false)} aria-label="Navigate to Home" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Home <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/about" onClick={() => setIsOpen(false)} aria-label="Navigate to About Us" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/about') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        About <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/services" onClick={() => setIsOpen(false)} aria-label="Our Services" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/services') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Services <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/projects" onClick={() => setIsOpen(false)} aria-label="Our Projects" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/projects') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Projects <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/calculators" onClick={() => setIsOpen(false)} aria-label="Engineering Calculators" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/calculators') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Calculators <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/blog" onClick={() => setIsOpen(false)} aria-label="Knowledge Hub Blog" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/blog') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Blog <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/contact-us" onClick={() => setIsOpen(false)} aria-label="Contact Us" className={`flex items-center justify-between py-5 text-xl font-display font-bold transition-colors ${isActive('/contact-us') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Contact <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                </nav>

                                <div className="mt-12 space-y-6 opacity-90">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Phone className="h-4 w-4 text-[#FFD700]" />
                                        <span className="text-sm font-medium">+234 123 456 7890</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Mail className="h-4 w-4 text-accent-teal" />
                                        <span className="text-sm font-medium">engineering@primistine.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-black/20 border-t border-white/5">
                                <Link
                                    to="/contact-us"
                                    className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Request Fast Quote
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

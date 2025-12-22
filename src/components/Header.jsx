import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
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
        <header className="fixed w-full bg-primary/95 lg:backdrop-blur-md border-b border-white/10 z-[100] gpu-accelerated">
            {/* Header Content Container - Controlled Layering */}
            <div className="relative z-[150] max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group relative">
                    <ShieldCheck className="h-8 w-8 text-accent-gold group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold text-white tracking-wide">PRIMISTINE</span>
                        <span className="text-[10px] text-accent-teal uppercase tracking-[0.2em]">Electric Ltd</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-sm font-medium transition-colors hover:text-accent-gold ${isActive(item.href) ? 'text-accent-gold' : 'text-slate-300'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/contact-us" className="btn-primary py-2 px-5 text-sm">
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
                            className="fixed top-0 right-0 h-screen w-full sm:w-[85%] max-w-sm bg-[#050C1A] border-l border-white/10 z-[140] shadow-2xl flex flex-col pt-24"
                        >
                            <div className="flex-1 overflow-y-auto px-8 pb-8">
                                <p className="text-[10px] font-bold text-accent-teal uppercase tracking-[0.2em] mb-8">Navigation Hub</p>

                                <nav className="flex flex-col">
                                    <Link to="/" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Home <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/about" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/about') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        About <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/services" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/services') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Services <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/projects" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/projects') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Projects <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/calculators" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/calculators') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Calculators <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/blog" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/blog') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Blog <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                    <Link to="/contact-us" onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-display font-bold border-b border-white/5 transition-colors ${isActive('/contact-us') ? 'text-[#FFD700]' : 'text-white'}`}>
                                        Contact <ArrowRight className="h-5 w-5 opacity-30" />
                                    </Link>
                                </nav>

                                <div className="mt-12 space-y-6 opacity-60">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Phone className="h-4 w-4 text-[#FFD700]" />
                                        <span className="text-sm">+234 123 456 7890</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Mail className="h-4 w-4 text-accent-teal" />
                                        <span className="text-sm">engineering@primistine.com</span>
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

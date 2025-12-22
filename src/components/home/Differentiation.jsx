import React from 'react';
import { X, Check } from 'lucide-react';

import boardImg from '../../assets/images/clean_distribution_board.png';

const Differentiation = () => {
    return (
        <section className="section-padding py-24 bg-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Anti-Chaos" Approach</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Most electrical issues in Nigeria stem from poor planning and non-genuine parts. We operate differently.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                            <div className="shrink-0 pt-1">
                                <X className="h-6 w-6 text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-red-400 font-bold text-lg mb-1">The Usual Way</h4>
                                <p className="text-slate-400 text-sm">Guesswork installation, trial-and-error troubleshooting, messy cabling, and fake components that fail in months.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-lg bg-emerald-500/5 border border-emerald-500/20 relative">
                            <div className="absolute -top-3 -right-3 bg-emerald-500 text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">The Primistine Way</div>
                            <div className="shrink-0 pt-1">
                                <Check className="h-6 w-6 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-emerald-400 font-bold text-lg mb-1">Engineering First</h4>
                                <p className="text-slate-400 text-sm">Calculated load analysis, precise circuit design, organized cable management, and 100% verified authentic parts.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Visual for Organized Distribution Board */}
                    <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                        <img
                            src={boardImg}
                            alt="Organized Distribution Board"
                            className="w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                        {/* Overlay card */}
                        <div className="absolute -bottom-6 -left-6 bg-[#0A192F] p-6 rounded-lg border border-white/10 shadow-xl max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                <p className="text-white font-bold text-sm">System Healthy</p>
                            </div>
                            <p className="text-slate-400 text-xs">0 faults detected in last 12 months.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;

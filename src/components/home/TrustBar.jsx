import React from 'react';
import { Shield, Settings, Users, CheckCircle } from 'lucide-react';

const TrustBar = () => {
    return (
        <section className="relative z-20 overflow-hidden">
            <div className="section-padding py-0">
                <div className="glass-panel-light rounded-[2rem] py-12 px-8 border border-white/5 border-t-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                        {[
                            { icon: Shield, label: "Safety First Excellence" },
                            { icon: Settings, label: "IEC/IEE Compliant" },
                            { icon: Users, label: "Served 100+ Businesses" },
                            { icon: CheckCircle, label: "100% Genuine Parts" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 justify-center hover-magnetic cursor-default group">
                                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/50 group-hover:bg-accent-gold/5 transition-all duration-500">
                                    <item.icon className="h-6 w-6 text-accent-gold group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-300 text-center group-hover:text-white transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;

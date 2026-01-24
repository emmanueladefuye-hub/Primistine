import React from 'react';
import { Shield, Settings, Users, CheckCircle } from 'lucide-react';

const TrustBar = () => {
    return (
        <div className="bg-primary-light/30 border-y border-white/5 py-10">
            <div className="section-padding py-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                    {[
                        { icon: Shield, label: "Safety First Excellence" },
                        { icon: Settings, label: "IEC/IEE Compliant" },
                        { icon: Users, label: "Served 100+ Businesses" },
                        { icon: CheckCircle, label: "100% Genuine Parts" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start opacity-50 hover:opacity-100 transition-opacity cursor-default group">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/30 transition-colors">
                                <item.icon className="h-5 w-5 text-accent-gold" />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-300 text-center md:text-left">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;

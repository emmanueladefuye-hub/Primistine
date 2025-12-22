import React from 'react';
import { Shield, Settings, Users, CheckCircle } from 'lucide-react';

const TrustBar = () => {
    return (
        <div className="bg-primary-light border-y border-white/5 py-8">
            <div className="section-padding py-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: Shield, label: "Safety First Excellence" },
                        { icon: Settings, label: "IEC/IEE Compliant" },
                        { icon: Users, label: "Served 100+ Businesses" },
                        { icon: CheckCircle, label: "100% Genuine Parts" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center md:justify-start opacity-70 hover:opacity-100 transition-opacity">
                            <item.icon className="h-6 w-6 text-accent-gold" />
                            <span className="text-sm font-medium text-slate-300">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;

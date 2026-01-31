import React from 'react';
import SafetyCheck from '../../components/calculators/SafetyCheck';

const SafetyPage = () => {
    return (
        <div className="bg-primary min-h-screen pt-32 pb-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="mb-16">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3 block">Hazard Prevention</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Electrical Safety Check</h1>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        Is your home wiring under stress? Answer a few questions about your property and appliance concurrent usage to identify potential fault risks and receive professional safety recommendations.
                    </p>
                </div>

                <SafetyCheck />
            </div>
        </div>
    );
};

export default SafetyPage;

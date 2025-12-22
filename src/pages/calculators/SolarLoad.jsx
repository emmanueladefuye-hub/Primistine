import React from 'react';
import SolarLoadCalculator from '../../components/calculators/SolarLoadCalculator';

const SolarLoadPage = () => {
    return (
        <div className="bg-primary min-h-screen pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-16">
                    <span className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-3 block">Solar Engineering Tool</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Load Audit Calculator</h1>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        Select your typical appliances and usage hours to understand your household energy footprint. This tool uses standard Nigerian power ratings to help you size your inverter and battery system correctly.
                    </p>
                </div>

                <SolarLoadCalculator />
            </div>
        </div>
    );
};

export default SolarLoadPage;

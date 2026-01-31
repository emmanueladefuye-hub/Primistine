import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CheckCircle2, XCircle, Zap, Info, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { budgetTiers, batteryInsights } from '../../data/calculatorData';
import CalculatorResult from './CalculatorResult';

const BudgetEstimator = () => {
    const [tier, setTier] = useState('small');
    const [batteryType, setBatteryType] = useState('lithium');

    const selectedData = budgetTiers[tier];

    // Format currency
    const formatNaira = (amt) => new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0
    }).format(amt);

    const calculation = useMemo(() => {
        const base = selectedData.basePrice;
        const premium = batteryType === 'lithium'
            ? selectedData.lithiumPremium
            : batteryType === 'tubular'
                ? selectedData.tubularPremium
                : 0;

        const total = base + premium;
        // Create a range (+/- 10% for logistics/variations)
        const min = total * 0.95;
        const max = total * 1.05;

        return {
            range: `${formatNaira(min)} - ${formatNaira(max)}`,
            insight: batteryInsights[batteryType] || null,
            total
        };
    }, [tier, batteryType]);

    return (
        <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column: Primary Selections */}
                <div className="space-y-12">
                    {/* 1. System Scale */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-accent-gold" />
                            1. Select system scale
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.keys(budgetTiers).map(key => (
                                <button
                                    key={key}
                                    onClick={() => setTier(key)}
                                    className={`p-6 rounded-2xl text-left border transition-all ${tier === key
                                        ? "bg-accent-teal/10 border-accent-teal shadow-[0_0_20px_rgba(100,255,218,0.1)]"
                                        : "bg-primary-light border-white/5 hover:border-white/20"
                                        }`}
                                >
                                    <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${tier === key ? "text-accent-teal" : "text-slate-500"
                                        }`}>
                                        Option {key === 'small' ? '01' : key === 'medium' ? '02' : '03'}
                                    </p>
                                    <h4 className="text-white font-bold text-lg">{budgetTiers[key].title}</h4>
                                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                        {budgetTiers[key].idealFor}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2. Battery Preference */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                            <Zap className="h-5 w-5 text-accent-teal" />
                            2. Choose storage tech
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['lithium', 'tubular'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setBatteryType(type)}
                                    className={`px-6 py-6 rounded-2xl border text-left transition-all ${batteryType === type
                                        ? "bg-white text-primary border-white"
                                        : "bg-primary-light text-slate-400 border-white/5 hover:border-white/20"
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm font-bold uppercase tracking-wider">{type}</span>
                                        {type === 'lithium' && <ShieldCheck className={`h-4 w-4 ${batteryType === type ? "text-primary/50" : "text-accent-teal"}`} />}
                                    </div>
                                    <p className={`text-[10px] leading-relaxed ${batteryType === type ? "text-primary/70" : "text-slate-500"}`}>
                                        {type === 'lithium' ? "Longest life, zero maintenance" : "Lower initial cost, 2yr life"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Insights & Coverage */}
                <div className="space-y-8">
                    {/* Floating Price Tracker - Always visible at top of column */}
                    <div className="lg:sticky lg:top-32 z-50 p-8 rounded-[2rem] bg-[#0A192F]/80 backdrop-blur-xl border border-accent-gold/20 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-50" />
                        <TrendingDown className="h-6 w-6 text-accent-gold mb-3 relative z-10" />
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2 relative z-10">
                            Current Projection
                        </p>
                        <p className="text-4xl lg:text-5xl font-display font-black text-white relative z-10 tracking-tight">
                            {formatNaira(calculation.total)}
                        </p>
                    </div>

                    {/* Engineering Insights */}
                    <div className="p-8 rounded-[2rem] glass-panel border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 blur-3xl rounded-full" />
                        <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                            <Info className="h-4 w-4 text-accent-teal" />
                            Engineering Insights
                        </h4>

                        {calculation.insight && (
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-accent-gold font-bold text-sm mb-2">{calculation.insight.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{calculation.insight.summary}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold text-accent-teal uppercase">Advantages</p>
                                        <ul className="space-y-2">
                                            {calculation.insight.pros.map((p, i) => (
                                                <li key={i} className="text-[10px] text-slate-300 flex items-center gap-2">
                                                    <CheckCircle2 className="h-3 w-3 text-accent-teal" /> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold text-red-400 uppercase">Considerations</p>
                                        <ul className="space-y-2">
                                            {calculation.insight.cons.map((c, i) => (
                                                <li key={i} className="text-[10px] text-slate-300 flex items-center gap-2">
                                                    <XCircle className="h-3 w-3 text-red-400" /> {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Coverage Summary */}
                    <div className="p-8 rounded-[2rem] bg-primary-light border border-white/5 space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Included Hardware</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {selectedData.includes.slice(0, 4).map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
                                    <CheckCircle2 className="h-3 w-3 text-accent-teal" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Wide Result Section */}
            <div className="pt-12 border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <CalculatorResult
                        title="Engineering Project Estimate"
                        results={[
                            { label: "Price Range (Turnkey)", value: calculation.range },
                            { label: "Deployment Scale", value: selectedData.title.split(' ')[0] },
                            { label: "Storage Life", value: batteryType === 'lithium' ? '10+ Years' : '2-3 Years' },
                            { label: "Installation Time", value: "3-5 Working Days" }
                        ]}
                        advice={`Your estimate for the ${selectedData.title} with ${batteryType} technology is optimized for ${selectedData.idealFor.toLowerCase()}. This includes logistics, engineering labor, and a full structural warranty.`}
                        ctaLabel="Generate Full PDF Quotation"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BudgetEstimator;

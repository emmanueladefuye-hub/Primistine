import React, { useState, useMemo } from 'react';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inputs (8 units) */}
            <div className="lg:col-span-7 space-y-12">
                {/* 1. System Scale */}
                <div className="space-y-6">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-accent-gold" />
                        1. System scale
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
                        2. Battery technology
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

                    {calculation.insight && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 animate-in fade-in slide-in-from-top-2 duration-500">
                            <div className="flex gap-4 items-start">
                                <Info className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                                <div>
                                    <h5 className="text-white font-bold text-sm mb-2">{calculation.insight.title}</h5>
                                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">{calculation.insight.summary}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent-teal uppercase mb-2">Eng. Advantages</p>
                                            <ul className="space-y-1">
                                                {calculation.insight.pros.map((p, i) => (
                                                    <li key={i} className="text-[10px] text-slate-300 flex items-center gap-2">
                                                        <CheckCircle2 className="h-3 w-3 text-accent-teal" /> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-red-400 uppercase mb-2">Trade-offs</p>
                                            <ul className="space-y-1">
                                                {calculation.insight.cons.map((c, i) => (
                                                    <li key={i} className="text-[10px] text-slate-300 flex items-center gap-2">
                                                        <XCircle className="h-3 w-3 text-red-400" /> {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Coverage Details */}
                <div className="p-8 rounded-2xl bg-primary-light border border-white/5 space-y-6">
                    <h4 className="text-white font-bold text-sm border-b border-white/5 pb-4 uppercase tracking-widest">Calculated Coverage</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedData.includes.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-xs text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-accent-teal flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 flex flex-wrap gap-3">
                        {selectedData.excludes.map((item, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 text-[10px] text-red-400/70 font-bold uppercase tracking-wider">
                                No {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Sticky Results (5 units) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                <div className="relative">
                    {/* Visual Connector (Desktop only) */}
                    <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-accent-teal/50 to-transparent" />

                    <CalculatorResult
                        title="Real-Time Budget Projection"
                        results={[
                            { label: "Estimated Range", value: calculation.range },
                            { label: "System Size", value: tier.toUpperCase() },
                            { label: "Storage Tech", value: batteryType.toUpperCase() },
                            { label: "Delivery", value: "3-5 Days" }
                        ]}
                        advice={`Your current choice of ${batteryType} technology results in an estimated project cost of ${formatNaira(calculation.total)}. This includes our standard engineering warranty and professional installation.`}
                        ctaLabel="Get Detailed PDF Quote"
                    />

                    {/* Quick Insight Callout */}
                    <div className="mt-6 p-6 rounded-2xl bg-accent-gold/5 border border-accent-gold/10 flex items-start gap-4">
                        <TrendingDown className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-slate-300 leading-relaxed font-display font-medium">
                                <span className="text-accent-gold font-bold">Smart Move:</span>
                                {batteryType === 'lithium'
                                    ? " You've selected our highest efficiency storage. This reduces long-term costs by 60% due to the 3,500+ cycle lifespan."
                                    : " Tubular batteries are budget-friendly but will require replacement every 2-3 years. Consider upgrading to Lithium for zero-maintenance."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BudgetEstimator;

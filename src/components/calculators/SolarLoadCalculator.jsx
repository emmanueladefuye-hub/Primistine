import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Zap, Info, Cpu } from 'lucide-react';
import { appliancePresets } from '../../data/calculatorData';
import CalculatorResult from './CalculatorResult';

const SolarLoadCalculator = () => {
    const [appliances, setAppliances] = useState(
        appliancePresets.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
    );
    const [hours, setHours] = useState(6);
    const [backupDays, setBackupDays] = useState(1);

    const updateCount = (id, delta) => {
        setAppliances(prev => ({
            ...prev,
            [id]: Math.max(0, prev[id] + delta)
        }));
    };

    const calculation = useMemo(() => {
        let totalDailyWatts = 0;
        let peakLoadByAppliances = 0;

        appliancePresets.forEach(app => {
            const count = appliances[app.id];
            if (count > 0) {
                const applianceTotal = count * app.wattage;
                totalDailyWatts += applianceTotal * hours;
                peakLoadByAppliances += applianceTotal;
            }
        });

        const dailyKwh = totalDailyWatts / 1000;

        // STEP 1: Peak Load (Auto-estimated as 25% of daily energy)
        const estimatedPeakLoadKw = dailyKwh / 4;

        // STEP 2: Inverter Size (Peak Load x 2.0 surge factor, rounded to nearest 2.5kVA)
        const rawInverterKva = estimatedPeakLoadKw * 2.0;
        const inverterSize = Math.max(2.5, Math.ceil(rawInverterKva / 2.5) * 2.5);

        // STEP 3: PV Array Size (Daily Energy / 5 hours * 1.25 safety margin)
        const targetPvKw = (dailyKwh / 5) * 1.25;
        const panelCount = Math.ceil(targetPvKw / 0.450);
        const actualPvKw = (panelCount * 450) / 1000;

        // STEP 4: Battery Storage (Lithium @ 80% DOD = Daily Energy x Backup Days / 0.8)
        const batteryKwh = dailyKwh * backupDays * 1.25;

        let warning = null;
        if (dailyKwh > 0 && dailyKwh < 5) warning = "Minimum system size is 5 kWh/day for stable operation.";
        if (dailyKwh > 200) warning = "System exceeds 200 kWh/day. Please contact us for custom commercial sizing.";

        return {
            usage: `${dailyKwh.toFixed(1)} kWh`,
            inverter: `${inverterSize} kVA`,
            battery: `${batteryKwh.toFixed(1)} kWh`,
            panels: `${actualPvKw.toFixed(2)} kWp (${panelCount} x 450W Panels)`,
            estimatedPeakLoad: estimatedPeakLoadKw.toFixed(2),
            rawKwh: dailyKwh,
            warning
        };
    }, [appliances, hours, backupDays]);

    return (
        <div className="space-y-16">
            {/* Input Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                            <Zap className="h-5 w-5 text-accent-gold" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white">Select Appliances</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        {appliancePresets.map(app => (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group flex items-center justify-between p-6 rounded-[2rem] glass-panel border border-white/5 hover:border-accent-gold/20 transition-all duration-500"
                            >
                                <div>
                                    <p className="text-base font-bold text-white mb-1">{app.name}</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{app.wattage} Watts</p>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
                                    <button
                                        onClick={() => updateCount(app.id, -1)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-90"
                                    >
                                        <Minus className="h-5 w-5" />
                                    </button>
                                    <span className="text-white font-display font-bold w-8 text-center text-xl">{appliances[app.id]}</span>
                                    <button
                                        onClick={() => updateCount(app.id, 1)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-accent-gold hover:bg-accent-gold/10 rounded-xl transition-all active:scale-90"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-10 lg:sticky lg:top-32 h-fit">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center border border-accent-teal/20">
                            <Info className="h-5 w-5 text-accent-teal" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white">System Config</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Usage Intensity Slider */}
                        <div className="p-10 rounded-[3rem] glass-panel border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 blur-3xl rounded-full" />
                            <label className="block text-sm font-bold text-white mb-10 uppercase tracking-widest text-center">
                                Usage Intensity: <span className="text-accent-gold text-2xl ml-2 font-display">{hours}h/day</span>
                            </label>
                            <div className="px-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="24"
                                    value={hours}
                                    onChange={(e) => setHours(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent-gold mb-8"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                                <span>Minimal</span>
                                <span className="text-right">Continuous</span>
                            </div>
                        </div>

                        {/* Backup Days Dropdown */}
                        <div className="p-8 rounded-[2.5rem] glass-panel border border-white/5">
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                                Autonomy: Backup Days Required
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map(day => (
                                    <button
                                        key={day}
                                        onClick={() => setBackupDays(day)}
                                        className={`py-4 rounded-2xl border font-display font-bold transition-all ${backupDays === day
                                            ? "bg-accent-teal/10 border-accent-teal text-white shadow-[0_0_20px_rgba(100,255,218,0.1)]"
                                            : "bg-white/5 border-white/5 text-slate-500 hover:border-white/20"}`}
                                    >
                                        {day} {day === 1 ? 'Day' : 'Days'}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-4 text-[10px] text-slate-500 leading-relaxed italic">
                                "{backupDays === 1 ? 'Standard urban backup strategy.' : backupDays === 2 ? 'Recommended for low-sun areas.' : 'Premium off-grid resiliency.'}"
                            </p>
                        </div>
                    </div>

                    {calculation.rawKwh > 0 && (
                        <div className="space-y-6">
                            {calculation.warning && (
                                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-4 items-center animate-in fade-in slide-in-from-top-2">
                                    <Info className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">{calculation.warning}</p>
                                </div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-[2.5rem] bg-accent-gold/10 border border-accent-gold/20 flex gap-6 items-center shadow-2xl"
                            >
                                <div className="p-4 rounded-2xl bg-accent-gold/20">
                                    <Cpu className="h-8 w-8 text-accent-gold" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-300 uppercase tracking-[0.2em] font-black mb-1">Total Daily Load</p>
                                    <p className="text-4xl font-display font-bold text-white">{calculation.usage}</p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>

            {/* Results Section - Now Wide and pushed by the grid */}
            {calculation.rawKwh > 0 && (
                <div className="pt-12 border-t border-white/5">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <CalculatorResult
                            title="System Specifications"
                            results={[
                                { label: "Daily Energy Output", value: calculation.usage },
                                { label: "Optimal Inverter", value: calculation.inverter },
                                { label: "Storage Capacity", value: calculation.battery },
                                { label: "PV Array Size", value: calculation.panels }
                            ]}
                            advice={`Based on an estimated ${calculation.estimatedPeakLoad}kW peak load with ${backupDays}-day autonomy. PV sizing includes a 25% safety margin for optimal efficiency under Nigerian sun hours.`}
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default SolarLoadCalculator;

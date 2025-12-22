import React, { useState, useMemo } from 'react';
import { Plus, Minus, Zap, Info } from 'lucide-react';
import { appliancePresets } from '../../data/calculatorData';
import CalculatorResult from './CalculatorResult';

const SolarLoadCalculator = () => {
    const [appliances, setAppliances] = useState(
        appliancePresets.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
    );
    const [hours, setHours] = useState(6);

    const updateCount = (id, delta) => {
        setAppliances(prev => ({
            ...prev,
            [id]: Math.max(0, prev[id] + delta)
        }));
    };

    const calculation = useMemo(() => {
        let totalDailyWatts = 0;
        appliancePresets.forEach(app => {
            totalDailyWatts += appliances[app.id] * app.wattage * hours;
        });

        const dailyKwh = totalDailyWatts / 1000;

        // Simple sizing logic
        const inverterSize = dailyKwh < 5 ? "1.5kVA - 3kVA" : dailyKwh < 12 ? "5kVA" : "7.5kVA - 10kVA+";
        const batterySize = `${Math.ceil(dailyKwh / 2)} - ${Math.ceil(dailyKwh / 1.5)} kWh`;
        const panelSize = `${Math.ceil(dailyKwh / 4)} - ${Math.ceil(dailyKwh / 3.5)} kWp`;

        return {
            usage: `${dailyKwh.toFixed(1)} kWh`,
            inverter: inverterSize,
            battery: batterySize,
            panels: panelSize,
            rawKwh: dailyKwh
        };
    }, [appliances, hours]);

    return (
        <div className="space-y-12">
            {/* Input Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Zap className="h-5 w-5 text-accent-gold" />
                        1. Select Appliances
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {appliancePresets.map(app => (
                            <div key={app.id} className="flex items-center justify-between p-4 rounded-xl bg-primary-light border border-white/5 hover:border-white/10 transition-colors">
                                <div>
                                    <p className="text-sm font-bold text-white">{app.name}</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{app.wattage} Watts</p>
                                </div>
                                <div className="flex items-center gap-2 bg-primary p-1 rounded-xl border border-white/5">
                                    <button
                                        onClick={() => updateCount(app.id, -1)}
                                        className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-accent-gold transition-colors active:scale-90"
                                    >
                                        <Minus className="h-5 w-5" />
                                    </button>
                                    <span className="text-white font-bold w-6 text-center text-lg">{appliances[app.id]}</span>
                                    <button
                                        onClick={() => updateCount(app.id, 1)}
                                        className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-accent-teal transition-colors active:scale-90"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Info className="h-5 w-5 text-accent-teal" />
                        2. Usage Patterns
                    </h3>
                    <div className="p-8 rounded-2xl bg-primary-light border border-white/5">
                        <label className="block text-sm font-bold text-white mb-6">
                            Average Daily Usage Hours: <span className="text-accent-teal">{hours}h</span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="24"
                            value={hours}
                            onChange={(e) => setHours(parseInt(e.target.value))}
                            className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer accent-accent-teal"
                        />
                        <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">
                            Tip: Most households use heavy loads (ACs, pumps) for 4-8 hours, while lighting and fans might run for 10-14 hours.
                        </p>
                    </div>

                    {calculation.rawKwh > 0 && (
                        <div className="p-6 rounded-2xl bg-accent-gold/5 border border-accent-gold/20 flex gap-4">
                            <Info className="h-5 w-5 text-accent-gold flex-shrink-0" />
                            <p className="text-xs text-slate-300 leading-relaxed uppercase tracking-wider font-bold">
                                Your estimated daily consumption is {calculation.usage}.
                                See recommendations below.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Results */}
            {calculation.rawKwh > 0 && (
                <CalculatorResult
                    title="Estimated System Sizing"
                    results={[
                        { label: "Daily Energy", value: calculation.usage },
                        { label: "Inverter Size", value: calculation.inverter },
                        { label: "Battery Bank", value: calculation.battery },
                        { label: "Solar Array", value: calculation.panels }
                    ]}
                    advice="This is an engineering estimate based on standard appliance ratings. Actual system sizing depends on wiring condition, specific appliance efficiency models, and real-time usage peaks."
                />
            )}
        </div>
    );
};

export default SolarLoadCalculator;

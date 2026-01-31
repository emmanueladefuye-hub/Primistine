import React, { useState, useMemo } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle, Home, Zap } from 'lucide-react';
import { safetyAssessmentLogic, appliancePresets } from '../../data/calculatorData';
import CalculatorResult from './CalculatorResult';

const SafetyCheck = () => {
    const [apartmentType, setApartmentType] = useState('flat');
    const [selectedAppliances, setSelectedAppliances] = useState([]);
    const [frequentTrips, setFrequentTrips] = useState('no');

    const toggleAppliance = (id) => {
        setSelectedAppliances(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const assessment = useMemo(() => {
        return safetyAssessmentLogic({
            apartmentType,
            majorAppliances: selectedAppliances,
            frequentTrips
        });
    }, [apartmentType, selectedAppliances, frequentTrips]);

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Home className="h-5 w-5 text-accent-gold" />
                        1. Property Profile
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {['1-bedroom', 'flat', 'duplex', 'office'].map(type => (
                            <button
                                key={type}
                                onClick={() => setApartmentType(type)}
                                className={`p-4 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${apartmentType === type
                                    ? "bg-accent-teal/10 border-accent-teal text-white"
                                    : "bg-primary-light border-white/5 text-slate-500 hover:border-white/20"
                                    }`}
                            >
                                {type.replace('-', ' ')}
                            </button>
                        ))}
                    </div>

                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 pt-4">
                        <ShieldAlert className="h-5 w-5 text-red-500" />
                        2. Key Infrastructure Symptoms
                    </h3>
                    <div className="p-6 rounded-2xl bg-primary-light border border-white/5">
                        <p className="text-sm text-slate-300 font-bold mb-4">Do you experience frequent breaker trips?</p>
                        <div className="flex gap-4">
                            {['yes', 'no'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => setFrequentTrips(opt)}
                                    className={`flex-1 py-3 rounded-lg border text-sm font-bold uppercase transition-all ${frequentTrips === opt
                                        ? "bg-white text-primary border-white"
                                        : "bg-transparent text-slate-500 border-white/10"
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8 lg:sticky lg:top-32 h-fit">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Zap className="h-5 w-5 text-accent-teal" />
                        3. Major Concurrent Loads
                    </h3>
                    <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {appliancePresets.filter(app => app.wattage >= 300).map(app => (
                            <button
                                key={app.id}
                                onClick={() => toggleAppliance(app.id)}
                                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${selectedAppliances.includes(app.id)
                                    ? "bg-accent-teal/5 border-accent-teal/50 text-white"
                                    : "bg-primary-light border-white/5 text-slate-400 hover:border-white/20"
                                    }`}
                            >
                                <span className="text-xs font-bold uppercase tracking-wider">{app.name}</span>
                                {selectedAppliances.includes(app.id) ? (
                                    <CheckCircle className="h-4 w-4 text-accent-teal" />
                                ) : (
                                    <div className="h-4 w-4 rounded-full border border-white/10" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Section - Now Wide and decoupled from sticky column */}
            <div className="pt-12 border-t border-white/5">
                <CalculatorResult
                    title="Safety Diagnosis"
                    results={[
                        { label: "Stress Index", value: assessment.level },
                        { label: "Risk Status", value: assessment.level === 'High' ? 'Critical' : 'Stable' },
                        { label: "Property Info", value: apartmentType.toUpperCase() },
                        { label: "Action Priority", value: assessment.level === 'High' ? 'Urgent' : 'Routine' }
                    ]}
                    advice={
                        assessment.level === 'High'
                            ? "Warning: Your current appliance load is likely straining your old or undersized wiring. This significantly increases fire risk and equipment failure. A professional audit is mandatory."
                            : "Your wiring appears to be handling current loads well, but age and hidden joint failures can still be dangerous. Regular 2-year inspections are recommended."
                    }
                    ctaLabel="Request Safety Audit"
                />
            </div>
        </div>
    );
};

export default SafetyCheck;

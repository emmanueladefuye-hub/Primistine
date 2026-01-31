import React from 'react';
import BudgetEstimator from '../../components/calculators/BudgetEstimator';

const BudgetPage = () => {
    return (
        <div className="bg-primary min-h-screen pt-32 pb-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="mb-16">
                    <span className="text-accent-teal font-bold uppercase tracking-widest text-xs mb-3 block">Financial Planning</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Budget Range Estimator</h1>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        Get a realistic financial baseline for your solar investment. Our estimator is updated with current lithium and inverter market rates to prevent pricing surprises during your transition to clean energy.
                    </p>
                </div>

                <BudgetEstimator />
            </div>
        </div>
    );
};

export default BudgetPage;

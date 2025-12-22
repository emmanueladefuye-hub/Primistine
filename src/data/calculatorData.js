// Wattage presets for standard Nigerian appliances
export const appliancePresets = [
    { id: 'led_bulb', name: 'LED Bulbs (10W)', wattage: 10, icon: 'Lightbulb' },
    { id: 'standing_fan', name: 'Standing Fan (60W)', wattage: 60, icon: 'Fan' },
    { id: 'ceiling_fan', name: 'Ceiling Fan (80W)', wattage: 80, icon: 'Fan' },
    { id: 'tv_led', name: 'LED TV (100W)', wattage: 100, icon: 'Tv' },
    { id: 'laptop', name: 'Laptop (65W)', wattage: 65, icon: 'Laptop' },
    { id: 'fridge_small', name: 'Small Fridge (150W)', wattage: 150, icon: 'Refrigerator' },
    { id: 'fridge_large', name: 'Large Deep Freezer (300W)', wattage: 300, icon: 'Refrigerator' },
    { id: 'washing_machine', name: 'Washing Machine (500W)', wattage: 500, icon: 'Waves' },
    { id: 'microwave', name: 'Microwave (800W)', wattage: 800, icon: 'CookingPot' },
    { id: 'ac_1hp', name: '1.0 HP AC (800W)', wattage: 800, icon: 'AirVent' },
    { id: 'ac_1.5hp', name: '1.5 HP AC (1200W)', wattage: 1200, icon: 'AirVent' },
    { id: 'pumping_machine', name: 'Pumping Machine (750W)', wattage: 750, icon: 'Droplets' },
];

export const budgetTiers = {
    small: {
        title: "Small (Basic Backup)",
        basePrice: 650000,
        lithiumPremium: 450000, // Cost to add lithium
        tubularPremium: 150000, // Cost to add tubular
        includes: ["1.5kVA - 3kVA Inverter", "Battery Storage", "2-4 Solar Panels", "Installation & Cabling"],
        excludes: ["Air Conditioners", "Pumping Machines", "Electric Cookers"],
        idealFor: "Apartments, Small Offices, Basic Home Lighting & Electronics"
    },
    medium: {
        title: "Medium (Standard Home)",
        basePrice: 1800000,
        lithiumPremium: 1200000,
        tubularPremium: 400000,
        includes: ["5kVA Pure Sine Inverter", "Battery Storage", "6-10 Solar Panels", "Full DC/AC Protection"],
        excludes: ["Central AC Systems", "Heavy Industrial Equipment"],
        idealFor: "3-4 Bedroom Flats, Larger Offices, Partial AC usage"
    },
    large: {
        title: "Large (Premium/Full Home)",
        basePrice: 5000000,
        lithiumPremium: 3500000,
        tubularPremium: 1500000,
        includes: ["10kVA - 20kVA Inverter System", "High-Capacity Storage", "15+ Solar Panels", "Smart Monitoring System"],
        excludes: ["None (Custom Built)"],
        idealFor: "Duplexes, Estates, Full Home Power Autonomy"
    }
};

export const batteryInsights = {
    lithium: {
        title: "Lithium Iron Phosphate (LFP)",
        pros: ["10+ Year Lifespan", "Zero Maintenance", "95% Depth of Discharge", "Fast Charging"],
        cons: ["Higher upfront cost"],
        summary: "The gold standard. While more expensive today, it's actually cheaper over 10 years because you won't replace it 3 times like tubular batteries."
    },
    tubular: {
        title: "Deep Cycle Tubular (Lead Acid)",
        pros: ["Lower Initial Cost", "Robust in Heat"],
        cons: ["2-3 Year Lifespan", "Requires Water Topping", "50% Max Discharge"],
        summary: "Entry-level storage. Good for tight budgets, but requires regular maintenance and will need replacement much sooner than lithium."
    }
};

export const safetyAssessmentLogic = (inputs) => {
    let stressScore = 0;

    // Apartment type impact
    if (inputs.apartmentType === 'duplex') stressScore += 2;
    if (inputs.apartmentType === 'office') stressScore += 1;

    // Major appliances count
    stressScore += (inputs.majorAppliances || []).length;

    // Frequent trips
    if (inputs.frequentTrips === 'yes') stressScore += 5;

    // Risk Level Determination
    if (stressScore >= 8) return { level: 'High', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' };
    if (stressScore >= 4) return { level: 'Medium', color: 'text-accent-gold', bg: 'bg-accent-gold/10', border: 'border-accent-gold/20' };
    return { level: 'Low', color: 'text-accent-teal', bg: 'bg-accent-teal/10', border: 'border-accent-teal/20' };
};

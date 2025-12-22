export const categories = [
    "Solar Education",
    "Electrical Safety",
    "Power Systems",
    "CCTV & Security",
    "Technical Explainers",
    "Industry Insights"
];

export const blogPosts = [
    {
        id: 1,
        slug: "why-lithium-batteries-win",
        title: "Why Lithium Batteries are Essential for Modern Nigerian Homes",
        excerpt: "Traditional lead-acid batteries are failing many households. Discover why switching to Lithium-Ion is the smartest engineering decision you can make this year.",
        content: `
            <p>In the quest for energy independence in Nigeria, the battery bank is often the most misunderstood component. For years, deep-cycle lead-acid batteries were the standard. However, as power requirements grow and technology advances, Lithium-Ion (specifically LiFePO4) has emerged as the clear winner.</p>
            
            <h2>1. Depth of Discharge (DoD)</h2>
            <p>Lead-acid batteries should typically only be discharged to 50% to prevent rapid degradation. In contrast, Lithium batteries can safely handle 80-90% Depth of Discharge. This means you get more usable power from a smaller physical footprint.</p>
            
            <h2>2. Lifespan and Cycles</h2>
            <p>A high-quality lead-acid battery might last 2-3 years (approx. 500-800 cycles). A premium Lithium bank, properly engineered by Primistine, can last 10+ years (approx. 4,000-6,000 cycles). The long-term ROI is significantly higher.</p>
            
            <h2>3. Charging Speed</h2>
            <p>Lithium batteries can accept charge much faster than lead-acid alternative. This is critical in Nigeria where the "NEPA" or Generator window might be short. You need to pull in as much energy as possible while it's available.</p>
            
            <div class="note-box">
                <strong>Engineering Tip:</strong> Always ensure your inverter's charging profile is correctly set for your battery chemistry. Applying a lead-acid charge profile to a lithium bank can lead to safety risks and shortened lifespan.
            </div>
            
            <h2>Conclusion</h2>
            <p>Moving to lithium isn't just a luxury; it's an engineering upgrade that brings stability and order to your power system. At Primistine, we specialize in high-voltage lithium migrations for homes and offices.</p>
        `,
        date: "Dec 20, 2023",
        category: "Solar Education",
        image: "/src/assets/images/solar_roof.png",
        readTime: "5 min read",
        author: "Primistine Engineering Team"
    },
    {
        id: 2,
        slug: "5-signs-your-wiring-is-unsafe",
        title: "5 Hidden Signs Your Building's Wiring is a Fire Hazard",
        excerpt: "Don't ignore flickering lights or warm sockets. These small signs indicate massive underlying chaos that could lead to electrical fires.",
        content: `
            <p>Electrical safety is often invisible until it's too late. Many buildings in Nigeria suffer from "managed" wiring—shortcuts taken during construction that create long-term risks. Here are the red flags every property owner should know.</p>
            
            <h2>1. Warm Switches or Sockets</h2>
            <p>If a switch or outlet feels warm to the touch, it indicates internal resistance or loose connections. This heat is a precursor to melting plastic and potential fire.</p>
            
            <h2>2. The Smell of Burning Plastic</h2>
            <p>This is an emergency. It usually means insulation is melting due to an overload or a short circuit. If you smell this, isolate your main breaker immediately.</p>
            
            <h2>3. Circuit Breakers Tripping Frequently</h2>
            <p>Breakers are safety devices, not inconveniences. If they trip, they are telling you that your demand is exceeding the circuit's capacity or there is a fault.</p>
            
            <h2>4. Dimming or Flickering Lights</h2>
            <p>This often signals a loose neutral connection or an undersized main cable struggling to handle the load when heavy appliances (like ACs or pumps) kick in.</p>
            
            <h2>5. No Clear Earthing System</h2>
            <p>Without a verified Earth pit and copper conducting path, lightning strikes and surges have nowhere to go but through your expensive electronics.</p>
            
            <p><strong>The Primistine Way:</strong> We conduct comprehensive safety audits using thermal imaging and earth resistance testers to find these ghosts before they cause disaster.</p>
        `,
        date: "Dec 18, 2023",
        category: "Electrical Safety",
        image: "/src/assets/images/neat_wiring.png",
        readTime: "4 min read",
        author: "Engr. Primistine"
    },
    {
        id: 3,
        slug: "balancing-loads-for-longevity",
        title: "The Science of Load Balancing: Why Professional Design Matters",
        excerpt: "Why does one phase always trip while the others stay on? Understanding 3-phase load distribution is the key to a stable commercial facility.",
        content: `
            <p>Managing power in a large facility isn't just about having a big generator; it's about how you distribute that power across the three phases. Poorly balanced loads lead to voltage drops, generator overheating, and frequent breaker trips.</p>
            
            <h2>What is Load Balancing?</h2>
            <p>In a 3-phase system (Red, Yellow, Blue), the goal is to have an equal amount of current (Amperes) running through each phase. If Phase A is handling 80A while Phase B and C are at 20A, the system is imbalanced.</p>
            
            <h2>Consequences of Imbalance</h2>
            <ol>
                <li><strong>Generator Stress:</strong> The generator's alternator has to work harder on one side, leading to vibration and premature failure.</li>
                <li><strong>Neutral Current Bloat:</strong> Imbalance causes high current to flow through the neutral wire, which can burn out connections.</li>
                <li><strong>Voltage Instability:</strong> Unbalanced phases lead to "sag" on the heavy phase and "surge" on the light ones, killing sensitive electronics.</li>
            </ol>
            
            <p>At Primistine Electric, we use advanced load analyzers to map your facility's consumption over 24 hours. We then reorganize your distribution boards to ensure a mathematical balance that extends the life of your equipment.</p>
        `,
        date: "Dec 15, 2023",
        category: "Power Systems",
        image: "/src/assets/images/clean_distribution_board.png",
        readTime: "6 min read",
        author: "Primistine Engineering Team"
    }
];

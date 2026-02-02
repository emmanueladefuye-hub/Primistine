// Import local assets to ensure they work in dev and build
import solarRoof from '../assets/images/solar_roof.png';
import neatWiring from '../assets/images/neat_wiring.png';
import distBoard from '../assets/images/clean_distribution_board.png';

// Mock Data for WordPress Integration
const MOCK_POSTS = [
    {
        id: 1,
        date: "2023-12-20T10:00:00",
        modified: "2023-12-20T12:00:00",
        slug: "why-lithium-batteries-win", // Reverted to original slug
        title: { rendered: "Why Lithium Batteries are Essential for Modern Nigerian Homes" },
        content: {
            rendered: `
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
            `
        },
        excerpt: { rendered: "<p>Traditional lead-acid batteries are failing many households. Discover why switching to Lithium-Ion is the smartest engineering decision you can make this year.</p>" },
        featured_media_url: solarRoof,
        author_name: "Primistine Engineering Team",
        category: "Solar Education"
    },
    {
        id: 2,
        date: "2023-12-18T09:30:00",
        modified: "2023-12-18T09:30:00",
        slug: "5-signs-your-wiring-is-unsafe",
        title: { rendered: "5 Hidden Signs Your Building's Wiring is a Fire Hazard" },
        content: {
            rendered: `
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
            `
        },
        excerpt: { rendered: "<p>Don't ignore flickering lights or warm sockets. These small signs indicate massive underlying chaos that could lead to electrical fires.</p>" },
        featured_media_url: neatWiring,
        author_name: "Engr. Primistine",
        category: "Electrical Safety"
    },
    {
        id: 3,
        date: "2023-12-15T14:15:00",
        modified: "2023-12-15T14:15:00",
        slug: "balancing-loads-for-longevity", // Reverted to original slug
        title: { rendered: "The Science of Load Balancing: Why Professional Design Matters" },
        content: {
            rendered: `
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
            `
        },
        excerpt: { rendered: "<p>Why does one phase always trip while the others stay on? Understanding 3-phase load distribution is the key to a stable commercial facility.</p>" },
        featured_media_url: distBoard,
        author_name: "Primistine Engineering Team",
        category: "Power Systems"
    }
];

export const wordpressService = {
    // Simulate Fetching All Posts
    getPosts: async (page = 1, perPage = 10, category = null) => {
        // In a real app, this would be: axios.get(`${API_URL}/posts?page=${page}&per_page=${perPage}&_embed`)
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredPosts = MOCK_POSTS;
                if (category && category !== "All") {
                    filteredPosts = MOCK_POSTS.filter(post => post.category === category);
                }
                resolve(filteredPosts);
            }, 500); // Simulate network delay
        });
    },

    // Simulate Fetching Single Post by Slug
    getPostBySlug: async (slug) => {
        // In a real app: axios.get(`${API_URL}/posts?slug=${slug}&_embed`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const post = MOCK_POSTS.find(p => p.slug === slug);
                if (post) {
                    resolve([post]); // WordPress API returns an array for slug search
                } else {
                    reject(new Error("Post not found"));
                }
            }, 500);
        });
    },

    // Simulate Fetching Projects (Custom Post Type)
    getProjects: async () => {
        // In a real app: axios.get(`${API_URL}/projects?_embed`)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_PROJECTS);
            }, 800);
        });
    }
};

const MOCK_PROJECTS = [
    {
        id: 101,
        title: { rendered: "Commercial Solar Array" },
        acf: { // Advanced Custom Fields structure
            location: "Lekki, Lagos",
            desc: "50kW Hybrid System for a manufacturing facility. Zero downtime achieved.",
            type: "Solar"
        },
        featured_media_url: solarRoof
    },
    {
        id: 102,
        title: { rendered: "Luxury Villa Wiring" },
        acf: {
            location: "Banana Island, Lagos",
            desc: "Complete concealed conduit wiring and smart automation integration.",
            type: "Residential"
        },
        featured_media_url: neatWiring
    },
    {
        id: 103,
        title: { rendered: "Factory Safety Audit" },
        acf: {
            location: "Ogun State",
            desc: "Comprehensive earthing improvement and distribution panel upgrade.",
            type: "Industrial"
        },
        featured_media_url: distBoard
    },
    {
        id: 104,
        title: { rendered: "Office Complex Backup" },
        acf: {
            location: "Abuja",
            desc: "20kVA Inverter setup with lithium battery bank for 24/7 IT operations.",
            type: "Commercial"
        },
        featured_media_url: solarRoof
    },
    {
        id: 105,
        title: { rendered: "Estate Street Lighting" },
        acf: {
            location: "Ikeja GRA",
            desc: "Solar-powered automated street lighting system for 50-unit estate.",
            type: "Infrastructure"
        },
        featured_media_url: solarRoof
    },
    {
        id: 106,
        title: { rendered: "Hotel Power Upgrade" },
        acf: {
            location: "Victoria Island",
            desc: "Switchgear replacement and load balancing for 100-room hotel.",
            type: "Commercial"
        },
        featured_media_url: distBoard
    }
];

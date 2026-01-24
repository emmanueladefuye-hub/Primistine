import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

const PremiumBackground = () => {
    const { scrollYProgress } = useScroll();

    // Parallax effects for background shapes
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const blobs = useMemo(() => [
        { id: 1, size: 'w-[40vw] h-[40vw]', color: 'bg-accent-teal/10', initial: { x: '-20%', y: '10%' }, animate: { x: '10%', y: '30%' }, duration: 25 },
        { id: 2, size: 'w-[35vw] h-[35vw]', color: 'bg-accent-gold/5', initial: { x: '60%', y: '5%' }, animate: { x: '40%', y: '25%' }, duration: 30 },
        { id: 3, size: 'w-[30vw] h-[30vw]', color: 'bg-[#112240]/40', initial: { x: '20%', y: '50%' }, animate: { x: '0%', y: '70%' }, duration: 20 },
    ], []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-[#0A192F]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#112240_0%,transparent_50%)]" />

            {/* Animated Blobs for Depth */}
            {blobs.map((blob) => (
                <motion.div
                    key={blob.id}
                    className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.size}`}
                    initial={blob.initial}
                    animate={{
                        ...blob.animate,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Parallax Geometric Accents */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-[20%] right-[10%] w-64 h-64 border border-white/5 rounded-3xl opacity-20"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[60%] left-[5%] w-96 h-96 border border-accent-teal/10 rounded-full opacity-10"
            />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(#64FFDA 0.5px, transparent 0.5px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Glass Rim Light */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-px top-0" />
        </div>
    );
};

export default PremiumBackground;

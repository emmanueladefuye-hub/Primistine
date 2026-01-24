import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Spring configuration for smooth "sticky" movement
    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="hidden lg:block">
            {/* The main ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-teal/50 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                }}
            />
            {/* The central dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-teal pointer-events-none z-[9999]"
                animate={{
                    x: mousePos.x - 3,
                    y: mousePos.y - 3,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
            />
        </div>
    );
};

export default CustomCursor;

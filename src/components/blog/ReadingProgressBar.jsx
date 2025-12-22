import React, { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white/5">
            <div
                className="h-full bg-accent-teal transition-all duration-150 ease-out shadow-[0_0_10px_rgba(100,255,218,0.5)]"
                style={{ width: `${completion}%` }}
            />
        </div>
    );
};

export default ReadingProgressBar;

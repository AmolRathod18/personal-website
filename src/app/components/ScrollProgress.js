"use client";

import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-white/5">
            <div
                className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 transition-[width] duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;

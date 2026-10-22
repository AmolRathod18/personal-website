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
        <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-neutral-300/40">
            <div
                className="h-full bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-400 transition-[width] duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;

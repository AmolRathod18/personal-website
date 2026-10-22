"use client";

import Image from "next/image";
import { useState } from "react";

const CursorReveal = ({ src, alt, className = "" }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            role="img"
            aria-label={alt}
            className={`cursor-reveal-image ${revealed ? "is-revealed" : ""} ${className}`}
            onPointerEnter={() => setRevealed(true)}
        >
            <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="portrait-image"
                priority
            />
        </div>
    );
};

export default CursorReveal;

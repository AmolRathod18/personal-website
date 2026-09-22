"use client";

import { useState, useEffect } from "react";

export default function LinkedInEmbedModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className="text-center">
            {isHydrated && (
                <>
                    {/* Tetikleyici */}
                    <div
                        onClick={() => setIsOpen(true)}
                        className="w-[300px] bg-purple-900 rounded-2xl shadow-sm shadow-purple-500 outline outline-slate-400 -outline-offset-8 "
                    >
                        <div className="w-[300px] group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                            <div className="z-10 flex flex-col items-center gap-2">
                                <span className="text-slate-400 text-6xl font-bold">
                                    911
                                </span>
                                <p className="text-gray-50">Unity Game</p>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    {isOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full relative p-4">
                                {/* Kapatma butonu */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-black text-2xl font-semibold"
                                >
                                    &times;
                                </button>

                                {/* İframe */}
                                <iframe
                                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7156021026118606849?collapsed=1"
                                    width="100%"
                                    height="640px"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="911 Game"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

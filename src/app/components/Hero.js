"use client";

import { HERO_CONTENT, HERO_STRINGS } from "../constants";
import { motion } from "motion/react";
import profilePic from "../../../public/images/Profile.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "./atoms/button";
import TypewriterComponent from "typewriter-effect";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: delay,
            ease: "easeOut",
        },
    },
});

export const Hero = () => {
    return (
        <div className="border-b border-neutral-800 pb-20 lg:pb-28 relative overflow-hidden min-h-screen flex items-center -mt-4">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black pointer-events-none"></div>
            
            {/* Decorative Elements */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl"
            />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.span
                            variants={container(0.1)}
                            initial="hidden"
                            animate="visible"
                            className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-sky-400 mb-4"
                        >
                            Full Stack Developer
                        </motion.span>
                        
                        <motion.h1
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6"
                        >
                            <span className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                                Amol Rathod
                            </span>
                        </motion.h1>
                        
                        <motion.div
                            variants={container(0.35)}
                            initial="hidden"
                            animate="visible"
                            className="h-1 w-20 bg-gradient-to-r from-sky-400 to-pink-500 rounded-full mb-6"
                        />
                        
                        <motion.div
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl lg:text-3xl text-sky-300 mb-6 font-semibold"
                        >
                            <TypewriterComponent
                                options={{
                                    strings: HERO_STRINGS,
                                    autoStart: true,
                                    loop: true,
                                    cursor: "|",
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </motion.div>
                        
                        <motion.p
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-lg lg:text-xl text-neutral-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        
                        <motion.div
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <CustomButton href="/Amol_Rathod_CV.pdf" text="Download CV" />
                        </motion.div>
                    </div>
                    
                    {/* Right Image */}
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex-1 relative"
                    >
                        <div className="relative">
                            {/* Sky-blue glow background */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    opacity: [0.4, 0.6, 0.4]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-blue-500/20 to-sky-600/30 blur-3xl rounded-full"
                            />
                            
                            {/* Secondary outer glow */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.08, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="absolute -inset-4 bg-sky-500/20 blur-2xl rounded-full"
                            />
                            
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <Image
                                    src={profilePic}
                                    alt="Amol Rathod - Full Stack Developer"
                                    className="w-full max-w-md mx-auto object-contain rounded-[3rem] drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:drop-shadow-[0_0_50px_rgba(56,189,248,0.6)] transition-all duration-300"
                                    priority
                                />
                            </motion.div>
                            
                            {/* Professional badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.5 }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
                            >
                                <div className="bg-gradient-to-r from-sky-500/90 to-blue-600/90 backdrop-blur-sm text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-2xl shadow-sky-500/50 border border-sky-400/30">
                                    <span className="text-xs uppercase tracking-wider">Full Stack Developer</span>
                                    <div className="text-[10px] text-sky-100 mt-0.5">MERN | Flask | Cloud</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

"use client";

import { ABOUT_ME } from "../constants";
import { motion } from "motion/react";
import aboutmePic from "../../../public/images/aboutme.webp";
import Image from "next/image";

export const About = () => {
    return (
        <div className="pb-20 pt-10 relative">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4 text-center">
                        About <span className="text-sky-400">Me</span>
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
                </motion.div>

                {/* Content Grid */}
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-12 lg:gap-16">
                    {/* Image Section */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        initial={{ opacity: 0, x: -100, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative group">
                            {/* Glowing Background */}
                            <motion.div
                                animate={{ 
                                    boxShadow: [
                                        "0 0 30px rgba(30, 144, 255, 0.2)",
                                        "0 0 50px rgba(30, 144, 255, 0.4)",
                                        "0 0 30px rgba(30, 144, 255, 0.2)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-2xl"
                            ></motion.div>
                            
                            {/* Image */}
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <Image
                                    src={aboutmePic}
                                    alt="Amol About"
                                    className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-sky-500/50 hover:border-sky-400 transition-all duration-300 shadow-2xl hover:shadow-sky-500/50"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                {ABOUT_ME}
                            </p>
                            
                            {/* Key Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-700"
                            >
                                <div className="flex flex-col items-center">
                                    <motion.span 
                                        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        5+
                                    </motion.span>
                                    <span className="text-sm text-neutral-400 mt-2">Projects</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <motion.span 
                                        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        2+
                                    </motion.span>
                                    <span className="text-sm text-neutral-400 mt-2">Years Exp</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <motion.span 
                                        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        10+
                                    </motion.span>
                                    <span className="text-sm text-neutral-400 mt-2">Technologies</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

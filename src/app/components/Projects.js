"use client";

import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import Image from "next/image";
import CustomButton from "./atoms/button";
import LinkedInEmbedModal from "./atoms/LinkedIn";

const Projects = () => {
    return (
        <div className="pb-20 pt-10 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4">
                        Featured <span className="text-sky-400">Projects</span>
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto mb-3"></div>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Building secure, scalable, and user-friendly applications
                    </p>
                </motion.div>
                
                <div className="max-w-7xl mx-auto space-y-20 px-4">
                    {PROJECTS.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative"
                        >
                            {/* Project Card Container */}
                            <div className="bg-gradient-to-br from-neutral-900/70 via-neutral-800/50 to-neutral-900/70 backdrop-blur-sm border border-sky-500/20 rounded-3xl overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className={`w-full lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-[500px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                    >
                                        {p.image === "null" ? (
                                            <div className="p-8 flex items-center justify-center h-full">
                                                <LinkedInEmbedModal />
                                            </div>
                                        ) : (
                                            <div className="relative group/image h-full">
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                                                
                                                {p.title === "Film Atlası — Mobile Movie Explorer App" && (
                                                    <motion.div
                                                        whileHover={{ y: -5 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="absolute top-4 left-4 z-20"
                                                    >
                                                        <Image
                                                            src={p.image2}
                                                            alt={p.title}
                                                            className="w-32 lg:w-40 rounded-2xl shadow-lg"
                                                            width={160}
                                                            height={120}
                                                        />
                                                    </motion.div>
                                                )}
                                                
                                                <Image
                                                    src={p.image}
                                                    alt={p.title}
                                                    fill
                                                    className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                                
                                                {/* Number Badge */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                                    className="absolute top-8 right-8 z-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                                                >
                                                    {index + 1}
                                                </motion.div>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Content Section */}
                                    <div className={`w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        {/* Project Title */}
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent leading-tight">
                                                {p.title}
                                            </h3>
                                        </motion.div>
                                        
                                        {/* Description */}
                                        <p className="text-neutral-300 text-base lg:text-lg leading-relaxed mb-6">
                                            {p.description}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="mb-8">
                                            <p className="text-sky-400 text-sm font-semibold mb-3 uppercase tracking-wider">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                {p.technologies.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        whileHover={{ scale: 1.1, y: -3 }}
                                                        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                                                        className="px-4 py-2 bg-gradient-to-r from-sky-900/50 to-blue-900/50 border border-sky-500/30 hover:border-sky-400 rounded-full text-sm font-medium text-sky-200 cursor-default backdrop-blur-sm"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* CTA Button */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex"
                                        >
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50"
                                            >
                                                <span>View Project</span>
                                                <motion.svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </motion.svg>
                                            </a>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

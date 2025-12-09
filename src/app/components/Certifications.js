"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
    const certifications = [
        {
            title: "CompTIA Security+ (SY0-701)",
            issuer: "Udemy",
            date: "2024",
            image: "/images/comptia-cert.png",
            link: "#",
            skills: ["Cybersecurity", "Risk Management", "Network Security"]
        },
        {
            title: "Web Development",
            issuer: "Internz Learn",
            date: "2024",
            image: "/images/webdev-cert.png",
            link: "#",
            skills: ["HTML", "CSS", "JavaScript", "Web Application Development"]
        }
    ];

    return (
        <div className="border-b border-neutral-900 pb-20 pt-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20 text-center"
            >
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4 text-center">
                    Certifications <span className="text-sky-400">& Achievements</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto mb-3"></div>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Professional certifications and continuous learning achievements
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="bg-gradient-to-br from-neutral-900/70 to-neutral-800/50 border border-sky-500/20 hover:border-sky-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20">
                            {/* Certificate Icon/Badge */}
                            <div className="relative bg-gradient-to-br from-sky-900/30 to-blue-900/30 p-6 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <FaAward className="text-white text-4xl" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-sky-400 hover:text-sky-300 transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                    </motion.a>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sky-300 font-medium text-sm">
                                        {cert.issuer}
                                    </p>
                                    <span className="bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full text-sky-300 text-xs font-semibold">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-neutral-900/50 border border-sky-500/20 rounded-full text-xs text-sky-200"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;

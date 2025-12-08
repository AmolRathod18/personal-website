"use client";

import { motion } from "motion/react";
import { FaCode, FaDatabase, FaCloud, FaTools, FaLaptopCode, FaCogs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs, FaPython, FaUnity } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: FaCode,
            skills: ["Java", "Python", "JavaScript", "C", "PHP", "SQL", "Dart"],
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Frameworks & Libraries",
            icon: FaLaptopCode,
            skills: ["React.js", "Node.js", "Express.js", "Flask", "Bootstrap", "Material UI"],
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Databases",
            icon: FaDatabase,
            skills: ["MySQL", "MongoDB"],
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "Cloud & Networking",
            icon: FaCloud,
            skills: ["AWS", "Computer Networks"],
            gradient: "from-sky-500 to-blue-500",
        },
        {
            title: "Developer Tools",
            icon: FaTools,
            skills: ["Visual Studio Code", "Notepad++", "Git"],
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Core Concepts",
            icon: FaCogs,
            skills: ["Data Structures & Algorithms", "Agile Methodology"],
            gradient: "from-indigo-500 to-purple-500",
        },
    ];

    const operatingSystems = ["Windows", "Ubuntu"];

    return (
        <div className="py-20 relative overflow-hidden">
            {/* Futuristic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10 pointer-events-none"></div>
            
            {/* Neon Circuit Lines */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.h2
                        className="text-5xl lg:text-6xl font-bold mb-4 relative inline-block"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(56, 189, 248, 0.5)",
                                "0 0 40px rgba(167, 139, 250, 0.5)",
                                "0 0 20px rgba(56, 189, 248, 0.5)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            TECHNICAL SKILLS
                        </span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-4"></div>
                    <p className="text-neutral-400 mt-6 text-lg">Cutting-edge technologies & tools mastered</p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Holographic Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl backdrop-blur-sm border border-neutral-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
                            
                            {/* Glowing Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                            ></motion.div>

                            <div className="relative p-6">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} mb-4 shadow-lg`}
                                >
                                    <category.icon className="text-white text-2xl" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            className={`px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${category.gradient} bg-opacity-10 text-white border border-neutral-600 hover:border-cyan-400 transition-all duration-300 cursor-default backdrop-blur-sm`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Operating Systems - Special Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative group mb-20"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    
                    <div className="relative bg-gradient-to-br from-neutral-900/70 to-neutral-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-8 text-center">
                        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
                            Operating Systems
                        </h3>
                        <div className="flex justify-center gap-6">
                            {operatingSystems.map((os, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 cursor-default"
                                >
                                    {os}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Animated Technology Icons */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-sky-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/30"
                    >
                        <RiReactjsLine className="text-7xl text-[#61DAFB]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-blue-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <TbBrandFlutter className="text-7xl text-[#02569B]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-green-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                    >
                        <SiMongodb className="text-7xl text-[#47A248]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-yellow-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
                    >
                        <IoLogoFirebase className="text-7xl text-[#FFCA28]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-green-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                    >
                        <FaNodeJs className="text-7xl text-[#339933]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-blue-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <FaPython className="text-7xl text-[#3776AB]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-orange-500/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                    >
                        <SiPostman className="text-7xl text-[#FF6C37]" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="rounded-2xl border-4 border-neutral-800 hover:border-white/50 p-4 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/30"
                    >
                        <FaUnity className="text-7xl text-white" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;

"use client";

import { motion } from "motion/react";
import { 
    FaPython, 
    FaReact, 
    FaNodeJs, 
    FaBootstrap, 
    FaGitAlt, 
    FaAws, 
    FaWindows, 
    FaUbuntu,
    FaNetworkWired,
    FaDatabase,
    FaCode,
    FaJava
} from "react-icons/fa";
import { 
    SiJavascript, 
    SiPhp, 
    SiMysql,
    SiMongodb,
    SiPostgresql, 
    SiExpress, 
    SiFlask, 
    SiMaterialdesignicons, 
    SiDart,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiVite,
    SiKalilinux
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: FaJava, color: "#007396" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
                { name: "C", icon: FaCode, color: "#A8B9CC" },
                { name: "PHP", icon: SiPhp, color: "#777BB4" },
                { name: "SQL", icon: FaDatabase, color: "#4479A1" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
            ],
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React.js", icon: FaReact, color: "#61DAFB" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
                { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
                { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Material UI", icon: SiMaterialdesignicons, color: "#0081CB" },
                { name: "Vite", icon: SiVite, color: "#646CFF" },
            ],
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
                { name: "PHP", icon: SiPhp, color: "#777BB4" },
            ],
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "Cloud & Networking",
            skills: [
                { name: "AWS", icon: FaAws, color: "#FF9900" },
                { name: "Computer Networks", icon: FaNetworkWired, color: "#0078D7" },
            ],
            gradient: "from-sky-500 to-blue-500",
        },
        {
            title: "Developer Tools",
            skills: [
                { name: "VS Code", icon: FaCode, color: "#007ACC" },
                { name: "Git", icon: FaGitAlt, color: "#F05032" },
            ],
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Cybersecurity & Security",
            skills: [
                { name: "Cybersecurity", icon: FaShieldAlt, color: "#00D9FF" },
                { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
            ],
            gradient: "from-red-500 to-pink-500",
        },
        {
            title: "Operating Systems",
            skills: [
                { name: "Windows", icon: FaWindows, color: "#0078D6" },
                { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
            ],
            gradient: "from-cyan-500 to-blue-600",
        },
    ];

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Holographic Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl backdrop-blur-sm border border-neutral-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
                            
                            {/* Glowing Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                            ></motion.div>

                            <div className="relative p-6">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-6 text-center group-hover:text-cyan-300 transition-colors">
                                    {category.title}
                                </h3>

                                {/* Technology Icons Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {category.skills.map((skill, skillIndex) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="relative group/icon flex flex-col items-center"
                                            >
                                                {/* Neon Glow */}
                                                <div 
                                                    className="absolute inset-0 rounded-xl opacity-0 group-hover/icon:opacity-100 blur-lg transition-all duration-300"
                                                    style={{ 
                                                        boxShadow: `0 0 20px ${skill.color}80, 0 0 40px ${skill.color}40` 
                                                    }}
                                                ></div>
                                                
                                                {/* Icon Container */}
                                                <div 
                                                    className="relative flex items-center justify-center w-full aspect-square rounded-xl bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 border border-neutral-700 group-hover/icon:border-opacity-0 backdrop-blur-md transition-all duration-300 overflow-hidden"
                                                    style={{
                                                        boxShadow: `inset 0 0 20px ${skill.color}20`
                                                    }}
                                                >
                                                    {/* Glossy Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                                                    
                                                    {/* Icon */}
                                                    <IconComponent 
                                                        className="text-4xl relative z-10 transition-transform duration-300 group-hover/icon:scale-110" 
                                                        style={{ color: skill.color }}
                                                    />
                                                </div>
                                                
                                                {/* Label Below Icon */}
                                                <div className="mt-2 text-center">
                                                    <span className="text-xs font-semibold text-gray-300 group-hover/icon:text-white transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

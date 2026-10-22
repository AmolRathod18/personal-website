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
    FaJava
} from "react-icons/fa";
import { 
    SiJavascript, 
    SiC,
    SiPhp, 
    SiMysql,
    SiMongodb,
    SiPostgresql, 
    SiExpress, 
    SiFlask, 
    SiMui,
    SiDart,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiVite,
    SiKalilinux
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: FaJava, color: "#007396" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", surface: "#323330" },
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
                { name: "C", icon: SiC, color: "#3949AB" },
                { name: "PHP", icon: SiPhp, color: "#777BB4" },
                { name: "SQL", icon: FaDatabase, color: "#4479A1" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
            ],
            gradient: "from-orange-500 to-orange-300",
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React.js", icon: FaReact, color: "#087E9B" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "Express.js", icon: SiExpress, color: "#111111" },
                { name: "Flask", icon: SiFlask, color: "#111111" },
                { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0B839A" },
                { name: "Material UI", icon: SiMui, color: "#007FFF" },
                { name: "Vite", icon: SiVite, color: "#646CFF" },
            ],
            gradient: "from-orange-500 to-amber-500",
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            ],
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "Cloud, Networking & Security",
            skills: [
                { name: "AWS", icon: FaAws, color: "#FF9900" },
                { name: "Computer Networks", icon: FaNetworkWired, color: "#0078D7" },
                { name: "Cybersecurity", icon: FaShieldAlt, color: "#087E9B" },
                { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
            ],
            gradient: "from-orange-500 to-amber-500",
        },
        {
            title: "Developer Tools",
            skills: [
                { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
                { name: "Git", icon: FaGitAlt, color: "#F05032" },
            ],
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Operating Systems",
            skills: [
                { name: "Windows", icon: FaWindows, color: "#0078D6" },
                { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
            ],
            gradient: "from-amber-500 to-orange-600",
        },
    ];

    return (
        <div className="py-20 relative overflow-hidden">
            <div className="relative z-10 mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 2xl:px-14">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 border-b border-white/10 pb-8 text-left"
                >
                    <p className="field-eyebrow mb-3">07 / Technical toolkit</p>
                    <motion.h2
                        className="field-display relative mb-3 text-4xl text-white sm:text-6xl"
                    >
                        <span className="text-orange-200">
                            Technologies I use
                        </span>
                    </motion.h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                        Languages, frameworks, databases, and platforms I have worked with across my projects and roles.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative self-start"
                        >
                            <div className="absolute inset-0 rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_12px_32px_rgba(40,44,48,0.06)] transition-all duration-300 group-hover:border-neutral-400"></div>

                            <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.04] blur-xl transition-opacity duration-300`}
                            ></motion.div>

                            <div className="relative p-6">
                                {/* Title */}
                                <h3 className="mb-6 text-left text-lg font-semibold text-neutral-900 transition-colors group-hover:text-orange-200">
                                    {category.title}
                                </h3>

                                {/* Technology Icons Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {category.skills.map((skill, skillIndex) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 1, scale: 1 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="relative group/icon flex flex-col items-center"
                                            >
                                                <div 
                                                    className="skill-icon-tile relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 transition-all duration-300 group-hover/icon:border-neutral-400"
                                                    style={{
                                                        boxShadow: "inset 0 1px 2px rgba(255,255,255,.9), 0 4px 10px rgba(40,44,48,.05)"
                                                    }}
                                                >
                                                    <span
                                                        className="skill-icon-badge flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200/80 sm:h-16 sm:w-16"
                                                        style={{
                                                            "--skill-color": skill.color,
                                                            ...(skill.surface ? { backgroundColor: skill.surface } : {}),
                                                        }}
                                                    >
                                                        <IconComponent
                                                        aria-hidden="true"
                                                        className="relative z-10 text-4xl transition-transform duration-300 group-hover/icon:scale-110 sm:text-5xl"
                                                        style={{ color: skill.color }}
                                                        />
                                                    </span>
                                                </div>
                                                
                                                <div className="mt-2 text-center">
                                                    <span className="text-xs font-medium text-neutral-700">
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

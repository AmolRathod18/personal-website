"use client";

import { motion } from "motion/react";
import { FaGraduationCap, FaCalendar, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Education = () => {
    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "KLE Technological University, Hubballi",
            period: "2023 – 2025",
            achievement: "CGPA: 7.2",
            description: "Advanced coursework in software engineering, databases, cloud platforms, and cybersecurity.",
            icon: "🎓",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWjhKHLe5wl8jQqV7wQ0VZLCWvHaVzGfqZg&s",
            website: "https://www.kletech.ac.in/"
        },
        {
            degree: "Bachelor of Science (Computer Science)",
            institution: "Karnataka Science College, Dharwad",
            period: "2020 – 2023",
            achievement: "Percentage: 76.57%",
            description: "Foundation in computer science, programming, data structures, and algorithms.",
            icon: "📚",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8wL3nKPXOy3pzVRBGJKBJGZNEWv7Fmzm6g&s",
            website: "https://kscd.ac.in/department_BCA_BSC(CS)1.php"
        },
        {
            degree: "Pre-University Course (PUC)",
            institution: "Sri Shanteshwar PU College, Indi – Vijayapura",
            period: "2020",
            achievement: "Percentage: 65.33%",
            description: "Core science subjects with focus on mathematics and computer science.",
            icon: "🏫",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqe3kMZzQYOXwqNmzk8vPqHKRzBoE0xJEqg&s",
            website: "https://sspharmacycollege.in/"
        },
        {
            degree: "Secondary School (SSLC)",
            institution: "Govt. High School, Indi – Vijayapura",
            period: "2018",
            achievement: "Percentage: 78.56%",
            description: "Strong foundation in academics and early interest in technology.",
            icon: "✏️",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4QY7kJx7HH3h-JDLyYLqFfCYYJWLGf8ucA&s",
            website: "https://schools.org.in/vijayapura/29030823304/govt-high-school-indi.html"
        }
    ];

    return (
        <div className="py-20 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4">
                        Education <span className="text-sky-400">&</span> Qualifications
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Timeline Connector */}
                            {index !== education.length - 1 && (
                                <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-sky-500 to-transparent"></div>
                            )}

                            {/* Card */}
                            <div className="flex gap-6">
                                {/* College Logo - Clickable */}
                                <motion.a
                                    href={edu.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-sky-500/30 hover:border-sky-400 flex items-center justify-center shadow-lg hover:shadow-sky-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                >
                                    {/* Glossy overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Logo Image */}
                                    <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                                        <Image 
                                            src={edu.logo} 
                                            alt={`${edu.institution} logo`}
                                            width={64}
                                            height={64}
                                            className="object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* External link icon */}
                                    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <FaExternalLinkAlt className="text-sky-400 text-xs" />
                                    </div>
                                </motion.a>

                                {/* Content */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-1 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-sky-500/20 hover:border-sky-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-sky-300 font-medium">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Period and Achievement */}
                                    <div className="flex flex-wrap gap-4 mb-3 text-sm">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full"
                                        >
                                            <FaCalendar className="text-sky-400" />
                                            {edu.period}
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full"
                                        >
                                            <FaAward className="text-sky-400" />
                                            {edu.achievement}
                                        </motion.div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 leading-relaxed">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 pt-20 border-t border-neutral-700"
                >
                    <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent">
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            { title: "CompTIA Security+ (SY0-701)", issuer: "Udemy" },
                            { title: "Web Development Certification", issuer: "internz Learn" }
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-br from-blue-900/20 to-sky-900/20 border border-sky-500/30 hover:border-sky-500/60 rounded-lg p-6 text-center transition-all"
                            >
                                <div className="text-3xl mb-2">🏆</div>
                                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                                <p className="text-sky-300 text-sm">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;

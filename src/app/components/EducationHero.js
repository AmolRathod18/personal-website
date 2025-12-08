"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Individual Education Hero Banner Component
const EducationBanner = ({ 
    image, 
    badge, 
    degree, 
    abbreviation, 
    college, 
    location, 
    duration, 
    score, 
    scoreLabel, 
    description, 
    link,
    index 
}) => {
    return (
        <section className="relative w-full h-auto min-h-[450px] sm:min-h-[500px] flex items-center overflow-hidden py-10 sm:py-12 lg:py-16">
            {/* Full-Width Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={college}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                    sizes="100vw"
                />
                {/* Stronger Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/90 via-[#16213e]/85 to-[#0f3460]/90"></div>
                {/* Cyberpunk accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#61dafb]/5 via-transparent to-[#bb86fc]/5"></div>
            </div>

            {/* Animated glow effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#61dafb]/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-[#bb86fc]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content Container - Reduced Width */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md sm:max-w-lg lg:max-w-xl">
                    {/* Compact Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-3"
                    >
                        <span className="px-3 py-1 bg-[#61dafb]/15 backdrop-blur-md rounded-lg text-[#61dafb] text-xs font-bold border border-[#61dafb]/20 inline-flex items-center gap-1.5 shadow-lg shadow-[#61dafb]/10">
                            <span className="text-sm">{badge}</span>
                            <span className="hidden sm:inline text-[10px] uppercase tracking-wider">{index === 0 ? 'Current' : 'Completed'}</span>
                        </span>
                    </motion.div>

                    {/* Degree Title - Cleaner Typography */}
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-2"
                    >
                        <span className="block text-white/95 drop-shadow-lg">{degree}</span>
                    </motion.h1>

                    {/* Abbreviation - Neon Style */}
                    {abbreviation && (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="mb-4"
                        >
                            <span className="text-lg sm:text-xl font-black text-[#61dafb] drop-shadow-[0_0_8px_rgba(97,218,251,0.5)]">
                                {abbreviation}
                            </span>
                        </motion.div>
                    )}

                    {/* College Info - Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-4"
                    >
                        <h2 className="text-base sm:text-lg font-semibold text-white/90 mb-0.5">
                            {college}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#61dafb]/80">
                            📍 {location}
                        </p>
                    </motion.div>

                    {/* Stats - Horizontal Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="flex gap-3 mb-4"
                    >
                        <div className="flex-1 backdrop-blur-md bg-white/5 rounded-lg p-2.5 sm:p-3 border border-[#61dafb]/10 hover:border-[#61dafb]/30 transition-all">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Duration</p>
                            <p className="text-sm sm:text-base font-bold text-white">{duration}</p>
                        </div>
                        <div className="flex-1 backdrop-blur-md bg-white/5 rounded-lg p-2.5 sm:p-3 border border-[#bb86fc]/10 hover:border-[#bb86fc]/30 transition-all">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{scoreLabel}</p>
                            <p className="text-sm sm:text-base font-bold text-[#bb86fc]">{score}</p>
                        </div>
                    </motion.div>

                    {/* Description - Compact */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-4 line-clamp-2"
                    >
                        {description}
                    </motion.p>

                    {/* Button - Sleek Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#61dafb] to-[#bb86fc] hover:from-[#00eaff] hover:to-[#9d4edd] rounded-lg text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#61dafb]/20 hover:shadow-[#61dafb]/40 transition-all duration-300 hover:scale-105"
                        >
                            <span>View Details</span>
                            <svg
                                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Sleek Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                <svg
                    className="w-full h-10 sm:h-12 lg:h-14 text-gray-950"
                    viewBox="0 0 1440 100"
                    fill="currentColor"
                    preserveAspectRatio="none"
                >
                    <path d="M0,50L48,45C96,40,192,30,288,35C384,40,480,60,576,65C672,70,768,60,864,55C960,50,1056,50,1152,55C1248,60,1344,70,1392,75L1440,80L1440,100L0,100Z"></path>
                </svg>
            </div>
        </section>
    );
};

// Main Component with all 4 Education Sections
const EducationHero = () => {
    const educationData = [
        {
            image: "/images/kle-tech-logo.jpg",
            badge: "🎓",
            degree: "Master of Computer Applications",
            abbreviation: "MCA",
            college: "KLE Technological University",
            location: "Hubballi, Karnataka",
            duration: "2023 – 2025",
            score: "7.2",
            scoreLabel: "CGPA",
            description: "Advanced coursework in software engineering, cloud platforms, databases, and cybersecurity.",
            link: "https://www.kletech.ac.in/"
        },
        {
            image: "/images/karnataka-university-logo.jpg",
            badge: "📚",
            degree: "Bachelor of Science (Computer Science)",
            abbreviation: "B.Sc CS",
            college: "Karnataka Science College",
            location: "Dharwad, Karnataka",
            duration: "2020 – 2023",
            score: "76.57%",
            scoreLabel: "Percentage",
            description: "Foundation in computer science, programming, data structures, and algorithms.",
            link: "https://kscd.ac.in/department_BCA_BSC(CS)1.php"
        },
        {
            image: "/images/sri-shanteshwar-logo.jpg",
            badge: "🏫",
            degree: "Pre-University Course",
            abbreviation: "PUC",
            college: "Sri Shanteshwar PU College",
            location: "Indi – Vijayapura, Karnataka",
            duration: "2020",
            score: "65.33%",
            scoreLabel: "Percentage",
            description: "Core science subjects with focus on mathematics and computer science.",
            link: "https://sspharmacycollege.in/"
        },
        {
            image: "/images/govt-school-indi.jpg",
            badge: "✏️",
            degree: "Secondary School Certificate",
            abbreviation: "SSLC",
            college: "Govt. High School Indi",
            location: "Indi – Vijayapura, Karnataka",
            duration: "2018",
            score: "78.56%",
            scoreLabel: "Percentage",
            description: "Strong foundation in academics and early interest in technology.",
            link: "https://schools.org.in/vijayapura/29030823304/govt-high-school-indi.html"
        }
    ];

    return (
        <>
            {educationData.map((edu, index) => (
                <EducationBanner key={index} {...edu} index={index} />
            ))}
        </>
    );
};

export default EducationHero;

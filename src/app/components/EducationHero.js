"use client";

import { motion } from "motion/react";
import Image from "next/image";

const EducationCard = ({ 
    image, 
    badge, 
    degree, 
    college, 
    location, 
    duration, 
    score, 
    scoreLabel, 
    link,
    index 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative w-full rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#61dafb]/50 hover:shadow-xl hover:shadow-[#61dafb]/20"
        >
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={college}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/30"></div>
                
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 bg-[#61dafb] rounded-lg text-white text-xs font-bold shadow-lg">
                        {badge}
                    </span>
                </div>
                
                <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-medium border border-white/20">
                        {duration}
                    </span>
                </div>
            </div>

            <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#61dafb] transition-colors duration-300">
                    {degree}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-300 mb-1">
                    {college}
                </p>
                <p className="text-xs text-[#61dafb]/80 mb-4 flex items-center gap-1">
                    <span>📍</span>
                    <span>{location}</span>
                </p>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-800">
                    <div className="bg-gray-800/60 rounded-lg px-4 py-2.5 border border-gray-700">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{scoreLabel}</p>
                        <p className="text-lg sm:text-xl font-bold text-[#bb86fc]">{score}</p>
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#61dafb] to-[#bb86fc] rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#61dafb]/50 transition-all duration-300 hover:scale-105"
                    >
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const EducationHero = () => {
    const educationData = [
        {
            image: "/images/kle-tech-logo.jpg",
            badge: "🎓",
            degree: "Master of Computer Applications",
            college: "KLE Technological University",
            location: "Hubballi, Karnataka",
            duration: "2023 – 2025",
            score: "7.2",
            scoreLabel: "CGPA",
            link: "https://www.kletech.ac.in/"
        },
        {
            image: "/images/karnataka-university-logo.jpg",
            badge: "📚",
            degree: "Bachelor of Science (Computer Science)",
            college: "Karnataka Science College",
            location: "Dharwad, Karnataka",
            duration: "2020 – 2023",
            score: "76.57%",
            scoreLabel: "Percentage",
            link: "https://kscd.ac.in/department_BCA_BSC(CS)1.php"
        },
        {
            image: "/images/sri-shanteshwar-logo.jpg",
            badge: "🏫",
            degree: "Pre-University Course",
            college: "Sri Shanteshwar PU College",
            location: "Indi – Vijayapura, Karnataka",
            duration: "2020",
            score: "65.33%",
            scoreLabel: "Percentage",
            link: "https://sspharmacycollege.in/"
        },
        {
            image: "/images/govt-school-indi.jpg",
            badge: "✏️",
            degree: "Secondary School Leaving Certificate",
            college: "Govt. High School Indi",
            location: "Indi – Vijayapura, Karnataka",
            duration: "2018",
            score: "81.28%",
            scoreLabel: "Percentage",
            link: "#"
        }
    ];

    return (
        <div className="w-full bg-gray-950 py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-[#61dafb] via-[#bb86fc] to-[#00eaff] bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Academic journey and qualifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} {...edu} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationHero;

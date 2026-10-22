"use client";

import { motion } from "motion/react";
import Image from "next/image";

const EducationCard = ({
    image,
    level,
    degree,
    college,
    location,
    duration,
    score,
    scoreLabel,
    link,
    index,
}) => {
    return (
        <motion.article
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className="education-card group relative flex h-full flex-col overflow-hidden rounded-2xl border transition duration-200"
        >
            <div className="education-card-photo relative h-36 w-full overflow-hidden sm:h-40">
                <Image
                    src={image}
                    alt={`${college} campus`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="education-card-photo-shade absolute inset-0" />
                <span className="education-card-level absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.16em]">
                    {level}
                </span>
                <span className="education-card-date absolute right-3 top-3 rounded-full border px-3 py-1.5 font-mono text-[10px]">
                    {duration}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="education-card-title text-lg font-semibold leading-snug sm:text-xl">
                    {degree}
                </h3>

                <p className="education-card-school mt-2 text-sm font-medium">
                    {college}
                </p>
                <p className="education-card-location mt-1 text-xs">
                    {location}
                </p>

                <div className="education-card-footer mt-auto flex items-end justify-between gap-3 border-t pt-4">
                    <div>
                        <p className="education-card-score-label font-mono text-[9px] uppercase tracking-[0.13em]">{scoreLabel}</p>
                        <p className="education-card-score mt-1 text-lg font-semibold leading-tight">{score}</p>
                    </div>

                    {link !== "#" && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="education-card-link inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition"
                        >
                            Institution <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

const EducationHero = () => {
    const educationData = [
        {
            image: "/images/kle-tech-logo.jpg",
            level: "Postgraduate",
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
            level: "Undergraduate",
            degree: "Bachelor of Science (Computer Science)",
            college: "Karnataka Science College",
            location: "Dharwad, Karnataka",
            duration: "2020 – 2023",
            score: "7.9",
            scoreLabel: "CGPA",
            link: "https://kscd.ac.in/department_BCA_BSC(CS)1.php"
        }
    ];

    return (
        <div className="education-section w-full border-y py-12 sm:py-14">
            <div className="mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 2xl:px-14">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 border-b border-neutral-300 pb-6 text-left"
                >
                    <p className="field-eyebrow mb-3">05 / Foundations</p>
                    <h2 className="field-display text-4xl text-neutral-900 sm:text-6xl">
                        Education
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                        Academic journey and qualifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} {...edu} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationHero;

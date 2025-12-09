"use client";

import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 pt-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20 text-center"
            >
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4 text-center">
                    Work <span className="text-sky-400">Experience</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
            </motion.div>
            <div>
                {EXPERIENCES.map((e, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 max-w-5xl mx-auto"
                        >
                            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-sky-500/20 hover:border-sky-500/50 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="lg:w-1/4 flex items-start"
                                    >
                                        <div className="bg-sky-500/10 border border-sky-500/30 px-4 py-2 rounded-lg">
                                            <p className="text-sky-300 font-semibold">
                                                {e.year}
                                            </p>
                                        </div>
                                    </motion.div>
                                    <div className="lg:w-3/4">
                                        <h6 className="mb-2 text-xl font-bold text-white">
                                            {e.role}
                                        </h6>
                                        <p className="text-sky-300 font-medium mb-4">
                                            {e.company}
                                        </p>
                                        <p className="mb-6 text-neutral-300 leading-relaxed">
                                            {e.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {e.technologies.map((tech, techIndex) => {
                                                return (
                                                    <motion.span
                                                        key={techIndex}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        className="rounded-full bg-gradient-to-r from-blue-900 to-neutral-900 px-4 py-1.5 text-sm font-medium text-sky-300 border border-sky-700 hover:border-sky-500"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;

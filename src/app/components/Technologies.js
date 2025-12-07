"use client";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { motion } from "motion/react";

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

const Technologies = () => {
    return (
        <div className="pb-24 pt-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20 text-center"
            >
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent mb-4">
                    Technologies <span className="text-sky-400">&</span> Tools
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
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
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaUnity className="text-7xl text-white" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

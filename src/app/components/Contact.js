"use client";

import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="pb-20 pt-10">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-bold"
            >
                <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-sky-600 bg-clip-text text-transparent">
                    Get In Touch
                </span>
            </motion.h2>

            <div className="flex flex-col items-center justify-center gap-8 px-6">
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {/* Address Card */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-sky-500/30 hover:border-sky-500/60 transition duration-300 h-full flex flex-col items-center justify-center text-center">
                            <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-4 rounded-xl mb-4">
                                <FaMapMarkerAlt className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-300 mb-2">Location</h3>
                            <p className="text-gray-300 text-sm hover:text-sky-400 transition">
                                {CONTACT.address}
                            </p>
                        </div>
                    </motion.div>

                    {/* Phone Card */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-600/20 rounded-2xl blur-lg group-hover:blur-xl transition duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-sky-500/30 hover:border-sky-500/60 transition duration-300 h-full flex flex-col items-center justify-center text-center">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl mb-4">
                                <FaPhone className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-300 mb-2">Phone</h3>
                            <a
                                href={`tel:${CONTACT.phoneNo}`}
                                className="text-gray-300 text-sm hover:text-sky-400 transition font-semibold"
                            >
                                {CONTACT.phoneNo}
                            </a>
                        </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-sky-500/30 hover:border-sky-500/60 transition duration-300 h-full flex flex-col items-center justify-center text-center">
                            <div className="bg-gradient-to-br from-sky-400 to-cyan-500 p-4 rounded-xl mb-4">
                                <FaEnvelope className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-300 mb-2">Email</h3>
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-gray-300 text-sm hover:text-sky-400 transition font-semibold break-all"
                            >
                                {CONTACT.email}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Social Links Section */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 pt-12 border-t border-sky-500/30 w-full max-w-5xl"
                >
                    <p className="text-center text-sky-300 text-lg font-semibold mb-6">
                        Connect With Me
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://linkedin.com/in/amolrathod18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-sky-600 p-4 rounded-full hover:bg-sky-500 transition duration-300 transform hover:scale-110">
                                <FaLinkedin className="text-white text-2xl" />
                            </div>
                        </a>
                        <a
                            href="https://github.com/AmolRathod18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-blue-900 p-4 rounded-full hover:bg-blue-800 transition duration-300 transform hover:scale-110">
                                <FaGithub className="text-white text-2xl" />
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center max-w-3xl"
                >
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                        I'm always interested in hearing about new projects and opportunities. Whether you have a question or want to start a conversation, feel free to reach out!
                    </p>
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50"
                    >
                        Send Me an Email
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

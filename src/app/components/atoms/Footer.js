"use client";

import Link from "next/link";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white">
            <div className="w-full max-w-7xl mx-auto px-6 py-12">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Contact Us Directly */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us Directly</h4>
                        <div className="space-y-3">
                            <a href="tel:+918971490395" className="flex items-start gap-2 text-gray-400 hover:text-[#61dafb] transition-colors">
                                <span>📞</span>
                                <span>+91 89714 90395</span>
                            </a>
                            <a href="mailto:amolrathod5655@gmail.com" className="flex items-start gap-2 text-gray-400 hover:text-[#61dafb] transition-colors">
                                <span>✉️</span>
                                <span>amolrathod5655@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Our Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Our Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-[#61dafb] transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-[#61dafb] transition-colors">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-[#61dafb] transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-[#61dafb] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Additional Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#experience" className="text-gray-400 hover:text-[#61dafb] transition-colors">Experience</a></li>
                            <li><a href="#education" className="text-gray-400 hover:text-[#61dafb] transition-colors">Education</a></li>
                            <li><a href="#technologies" className="text-gray-400 hover:text-[#61dafb] transition-colors">Technologies</a></li>
                            <li><a href="https://github.com/AmolRathod18" target="_blank" className="text-gray-400 hover:text-[#61dafb] transition-colors">GitHub</a></li>
                        </ul>
                    </div>

                    {/* Portfolio Tools */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Portfolio Tools</h4>
                        <ul className="space-y-2">
                            <li><a href="#projects" className="text-gray-400 hover:text-[#61dafb] transition-colors">View Projects</a></li>
                            <li><a href="https://github.com/AmolRathod18?tab=repositories" target="_blank" className="text-gray-400 hover:text-[#61dafb] transition-colors">GitHub Repositories</a></li>
                            <li><a href="https://www.linkedin.com/in/amol-rathod-b84746281/" target="_blank" className="text-gray-400 hover:text-[#61dafb] transition-colors">LinkedIn Profile</a></li>
                        </ul>
                    </div>
                </div>

                {/* Brand Logo */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-[#61dafb] to-[#bb86fc] p-3 rounded-lg">
                            <FaCode className="text-white text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#61dafb] to-[#bb86fc] bg-clip-text text-transparent">
                                Amol Rathod
                            </h2>
                            <p className="text-sm text-gray-400">The Full Stack Developer</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4 text-sm text-gray-400">
                            <a href="#privacy" className="hover:text-[#61dafb] transition-colors">Privacy Policy</a>
                            <a href="#terms" className="hover:text-[#61dafb] transition-colors">Terms & Conditions</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">Follow us</span>
                            <a href="https://www.linkedin.com/in/amol-rathod-b84746281/" target="_blank" className="text-gray-400 hover:text-[#61dafb] transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/AmolRathod18" target="_blank" className="text-gray-400 hover:text-[#61dafb] transition-colors">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-6 text-sm text-gray-500">
                        © 2025 Amol Rathod . All rights reserved
                        <span className="ml-4">Web Design by <span className="text-[#61dafb] font-semibold">Amol Rathod</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
